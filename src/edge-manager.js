import { select, event, mouse } from 'd3-selection';
import { transition } from 'd3-transition';
import { easeCubic } from 'd3-ease';
import Edge from './edge';
import Connection from './connection';
import Shadow from './shadow';
import { difference, union } from './utils';

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
    constructor (edges, frames) {
        this.edges = edges;
        this.frames = frames;

        applySequence(edges);

        this.connections = connectionResolver(edges);
        this.shadows = shadowResolver(edges);
        this._transitionTime = 300;
        this.transition = transition().duration(this._transitionTime).ease(easeCubic);

        this._evtRecords = {};
    }

    draw (mount, config) {
        let selMarkG = mount
            .selectAll('g.arcus-edge-sel-mark')
            .data([1]);

        selMarkG.exit().remove();
        selMarkG = selMarkG.enter().append('g').attr('class', 'arcus-edge-sel-mark').attr('transform',
            `translate(${config.labelBBox}, 0)`);

        let sel = mount
            .selectAll('g.arcus-edges')
            .data([1]);

        sel.exit().remove();
        sel = sel.enter().append('g').attr('class', 'arcus-edges').attr('transform',
            `translate(${config.labelBBox}, 0)`);


        const [, shadowSel] = this.__drawConnections(sel, this.connections, this.shadows);

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
            point[1] -= 2;
            const distances = edges.map((edge, i) => {
                const dist = edge.distance(point);
                dist.i = i;
                return dist;
            });
            const nearest = minDist(distances);

            this.__showSelector(selMarkG, nearest);
        });
        shadowSel.on('mouseout', () => {
            const el = select(event.target);
            const hash = el.attr('class').split(/\s+/)[2];
            const edges = this.shadows[hash].edges;

            clearTimeout(this._evtRecords.overTimer);
            this._evtRecords.outTimer = setTimeout(() => {
                this._evtRecords.outTimer = null;
                this._evtRecords.transitionMutationLock = false;

                edges.forEach(edge => edge.pathOptions({ expansionFactor: 4 }));
                union(this.shadows, 'edges').forEach(edge => edge.pathOptions({ focus: Edge.FocusMode.NA }));
                this.__showSelector(selMarkG);
                this.__drawConnections(sel, this.connections, this.shadows);
            }, 0);
        });
    }

    __showSelector (mount, pos) {
        let sel = mount
            .selectAll('circle')
            .data(pos ? [pos] : []);

        sel.exit().remove();

        sel = sel
            .enter()
            .append('circle')
            .merge(sel)
            .attr('r', 4)
            .attr('cx', d => d.x)
            .attr('cy', d => d.y);

        return sel;
    }

    __drawConnections (mount, connections, shadows) {
        // Draw the paths
        let conPath = connections.map(con => con.path());
        const flattenConPath = { forward: [], backward: [] };
        for (let i = 0, path; path = conPath[i++];) {
            flattenConPath.forward.push(...path.forward);
        }

        mount.selectAll('path.arcus-edge').interrupt();

        let edgeSel = mount.selectAll('path.arcus-edge').data(flattenConPath.forward);
        edgeSel.exit().remove();
        edgeSel = edgeSel.enter().append('path').classed('arcus-edge', true).attr('class', function (d) {
            let cls = select(this).attr('class');
            cls += ` ${d[1].seqHash()}`;
            return cls;
        }).merge(edgeSel).style('stroke', d => d[1].to.config.color).attr('d', d =>
            d[1].pathHist[0].path).transition(this.transition).attr('d', d => d[0]).style('opacity', (d) => {
                const options = d[1].pathOptions();
                if (options.focus === Edge.FocusMode.UNFOCUSED) {
                    return 0.05;
                }

                return 1;
            });

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
