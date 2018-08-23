import { select, event, mouse } from 'd3-selection';
import { transition } from 'd3-transition';
import { easeCubic } from 'd3-ease';
import Edge from './edge';
import Connection from './connection';
import Shadow from './shadow';
import { difference, union, EdgeDirection } from './utils';

const addTranslate = (node, newTranslate) => {
    const translate = node.attr('transform');
    let matchedVal = translate.match(/(\d+)\s*,\s*(\d+)/);
    matchedVal = matchedVal.slice(0).map(val => parseInt(val, 0));

    return [matchedVal[0] + newTranslate[0], matchedVal[1] + newTranslate[1]];
};

const connectionResolver = (edges) => {
    const connectionPool = {};
    const conns = [];
    let key;
    for (let i = 0, edge; edge = edges[i++];) {
        if ((key = edge.key) in connectionPool) {
            connectionPool[key].push(edge);
        } else {
            connectionPool[key] = [edge];
        }
    }

    for (key in connectionPool) {
        conns.push(new Connection(connectionPool[key]));
    }

    return conns;
};

const shadowResolver = (edges) => {
    const shadowPool = {};
    let seq;
    const conns = {};

    for (let i = 0, edge; edge = edges[i++];) {
        if ((seq = edge.seqHash()) in shadowPool) {
            shadowPool[seq].push(edge);
        } else {
            shadowPool[seq] = [edge];
        }
    }

    for (let key in shadowPool) {
        conns[key] = new Shadow(shadowPool[key]);
    }

    return conns;
};

const minDist = (dists) => {
    let min = { d: Number.POSITIVE_INFINITY, index: -1 };
    for (let i = 0, dist; dist = dists[i++];) {
        if (min.d > dist.d) {
            min.d = dist.d;
            min.index = i - 1;
        }
    }

    return dists[min.index];
};

const applySequence = (edges) => {
    const seqMap = { };
    let seqStr;
    let seqNo;

    for (let i = 0, edge; edge = edges[i++];) {
        seqStr = edge.seqStr();
        if (seqStr in seqMap) {
            seqNo = ++seqMap[seqStr];
            edge.sequence = seqNo;
        } else {
            seqMap[seqStr] = 0;
            edge.sequence = 0;
        }
    }
};

export default class EdgeManager {
    constructor (edges, frames, referrer) {
        this.edges = edges;
        this.frames = frames;
        this._referrer = referrer;

        applySequence(edges);

        this.connections = connectionResolver(edges);
        this.shadows = shadowResolver(edges);
        this._transitionTime = 300;
        this.transition = transition().duration(this._transitionTime).ease(easeCubic);

        this._evtRecords = {};
    }

    draw (mount, config) {
        let backwardShadowR;
        const circumstance = this._referrer._circumstance;
        let sel = mount
            .selectAll('g.arcus-edges')
            .data([1]);

        sel.exit().remove();
        sel = sel.enter().append('g').attr('class', 'arcus-edges').attr('transform',
            `translate(${config.labelBBox.width}, 0)`);


        const [, shadowSel] = this.__drawConnections(sel, this.connections, this.shadows);

        const maxBackwardShadow = Object.values(this.shadows)
            .filter(shadow => shadow.direction === EdgeDirection.BACKWARD).reduce((store, shadow) =>
                (store.spread() > shadow.spread() ? store : shadow)
            , { spread: () => Number.NEGATIVE_INFINITY, edges: [{ r: () => 0, pathOptions: () => {} }] });

        const maxForwardShadow = Object.values(this.shadows)
            .filter(shadow => shadow.direction === EdgeDirection.FORWARD).reduce((store, shadow) =>
                (store.spread() > shadow.spread() ? store : shadow)
            , { spread: () => Number.NEGATIVE_INFINITY });

        const backwardShadowEnd = maxBackwardShadow.edges[maxBackwardShadow.edges.length - 1];
        const forwardShadowEnd = maxForwardShadow.edges[maxForwardShadow.edges.length - 1];

        [backwardShadowEnd, forwardShadowEnd].map(edge => edge.pathOptions({ expansionFactor: 16 }));

        const cumulativeTranslate = addTranslate(mount, [-(backwardShadowR = backwardShadowEnd.r()), 0]);
        mount.attr('transform', `translate(${cumulativeTranslate[0]}, ${cumulativeTranslate[1]})`);


        shadowSel.on('mouseover', () => {
            const el = select(event.target);
            const hash = el.attr('class').split(/\s+/)[2];
            const edges = this.shadows[hash].edges;

            this._evtRecords.transitionMutationLock = true;
            clearTimeout(this._evtRecords.outTimer);
            this._evtRecords.overTimer = setTimeout(() => {
                this._evtRecords.overTimer = null;

                edges.forEach(edge => edge.pathOptions({ expansionFactor: 16, focus: Edge.FocusMode.FOCUSED }));
                difference(this.shadows, hash, 'edges').forEach(edge =>
                    edge.pathOptions({ focus: Edge.FocusMode.UNFOCUSED }));

                this.__drawConnections(sel, this.connections, this.shadows);
                circumstance.action({
                    action: 'mouseover',
                    affectedSet: edges
                });

                setTimeout(() => {
                    this._evtRecords.transitionMutationLock = false;
                }, this._transitionTime);
            }, 100);
        });
        shadowSel.on('mousemove', () => {
            if (this._evtRecords.transitionMutationLock) {
                return;
            }

            const el = select(event.target);
            const hash = el.attr('class').split(/\s+/)[2];
            const edges = this.shadows[hash].edges;
            const point = mouse(sel.node());
            const distances = edges.map((edge, i) => {
                const dist = edge.distance(point);
                dist.i = i;
                return dist;
            });
            const nearest = minDist(distances);
            const nearestEdge = edges[nearest.i];
            const conn = nearestEdge.partOf();

            this.edges.map(edge => edge.pathOptions({ select: Edge.SelectMode.OFF }));
            conn.edges.map(edge => edge.pathOptions({ select: Edge.SelectMode.ON }));
            this.__drawConnections(sel, this.connections, this.shadows);
        });
        shadowSel.on('mouseout', () => {
            const el = select(event.target);
            const hash = el.attr('class').split(/\s+/)[2];
            const edges = this.shadows[hash].edges;

            clearTimeout(this._evtRecords.overTimer);
            this._evtRecords.outTimer = setTimeout(() => {
                this._evtRecords.outTimer = null;
                this._evtRecords.transitionMutationLock = false;

                this.edges.map(edge => edge.pathOptions({ select: Edge.SelectMode.OFF }));
                edges.forEach(edge => edge.pathOptions({ expansionFactor: 8 }));
                union(this.shadows, 'edges').forEach(edge => edge.pathOptions({ focus: Edge.FocusMode.NA }));
                this.__drawConnections(sel, this.connections, this.shadows);
            }, 0);
        });

        return [Math.abs(backwardShadowR) + Math.abs(forwardShadowEnd.r()), { shiftX: backwardShadowR }];
    }


    __drawConnections (mount, connections, shadows) {
        // Draw the paths
        let conPath = connections.map(con => con.path());
        const flattenConPath = { forward: [], backward: [] };
        for (let i = 0, path; path = conPath[i++];) {
            flattenConPath.forward.push(...path.forward);
            flattenConPath.backward.push(...path.backward);
        }

        mount.selectAll('path.arcus-edge').interrupt();
        let edgeSel = mount.selectAll('path.arcus-edge').data([...flattenConPath.forward, ...flattenConPath.backward]);
        edgeSel.exit().remove();
        edgeSel = edgeSel.enter().append('path').classed('arcus-edge', true).attr('class', function (d) {
            let cls = select(this).attr('class');
            cls += ` ${d[1].seqHash()}`;
            return cls;
        }).merge(edgeSel).style('stroke', d => d[1].to.config.color).attr('d', d =>
            d[1].pathHist[0].path).style('opacity', (d) => {
                const options = d[1].pathOptions();

                if (options.select === Edge.SelectMode.ON) {
                    return 1;
                } else if (options.focus === Edge.FocusMode.UNFOCUSED) {
                    return 0.03;
                }

                return 0.35;
            }).transition(this.transition).attr('d', d => d[0]);

        // Draw shadows for interaction
        conPath = [];
        for (let key in shadows) {
            conPath.push(shadows[key].path());
        }

        let shadowSel = mount.selectAll('path.arcus-edge-shadow').data(conPath);
        shadowSel.exit().remove();
        shadowSel = shadowSel.enter().append('path').classed('arcus-edge-shadow', true).classed('shadow', true)
            .attr('class', function (d) {
                let cls = select(this).attr('class');
                cls += ` ${d[1].seqHash()}`;
                return cls;
            }).merge(shadowSel).attr('d', d => d[0]);

        return [edgeSel, shadowSel];
    }
}
