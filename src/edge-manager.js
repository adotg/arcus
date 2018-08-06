import { select, event, mouse } from 'd3-selection';
import Connection from './connection';
import Shadow from './shadow';

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
        this._evtRecords = {};
    }

    draw (mount, config) {
        let sel = mount
            .selectAll('g.arcus-edges')
            .data([1]);

        sel.exit().remove();
        sel = sel.enter().append('g').attr('class', 'arcus-edges').attr('transform',
            `translate(${config.labelBBox}, 0)`);

        const [, shadowSel] = this.__drawConnections(sel, this.connections, this.shadows, { expansion: 4 });

        shadowSel.on('mouseover', () => {
            console.log('over');
            const el = select(event.target);
            const hash = el.attr('class').split(/\s+/)[2];
            const point = mouse(sel.node());
            console.log(this.shadows[hash]);
            // clearTimeout(this._evtRecords.outTimer);

            // // this.bandConnections[hash].viewExpand();
            // this._evtRecords.overTimer = setTimeout(() => {
            //     console.log('expand', hash);
            // }, 16);
        });
        shadowSel.on('mouseout', () => {
            console.log('out');
        //     const el = select(event.target);
        //     const hash = el.attr('class').split(/\s+/)[1];
        //     clearTimeout(this._evtRecords.overTimer);

        //     this._evtRecords.outTimer = setTimeout(() => {
        //         console.log('collapse', hash);
        //         // this.bandConnections[hash].viewCollapse();
        //         clearTimeout(this._evtRecords.timer);
        //     }, 16);
        });
    }

    __drawConnections (mount, connections, shadows, options) {
        const expansion = options.expansion;

        // Draw the paths
        let conPath = connections.map(con => con.path(expansion));
        const flattenConPath = { forward: [], backward: [] };
        for (let i = 0, path; path = conPath[i++];) {
            flattenConPath.forward.push(...path.forward);
        }

        const edgeSel = mount.selectAll('path.arcus-edge').data(flattenConPath.forward, d => d[1].seqHash());
        edgeSel.exit().remove();
        edgeSel.enter().append('path').classed('arcus-edge', true).attr('class', function (d) {
            let cls = select(this).attr('class');
            cls += ` ${d[1].seqHash()}`;
            return cls;
        }).merge(edgeSel).attr('d', d => d[0]).style('stroke', d => d[1].to.config.color);

        // Draw shadows for interaction
        conPath = [];
        for (let key in shadows) {
            conPath.push(shadows[key].path(expansion));
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
