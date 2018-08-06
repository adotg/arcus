import { select, event, mouse } from 'd3-selection';
import Connection from './connection';
import BandConnection from './band-connection';

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

const bandConnectionResolver = (edges) => {
    const bandPool = {};
    let seq;
    const conns = {};

    for (let i = 0, edge; edge = edges[i++];) {
        if ((seq = edge.seqHash()) in bandPool) {
            bandPool[seq].push(edge);
        } else {
            bandPool[seq] = [edge];
        }
    }

    for (let key in bandPool) {
        conns[key] = new BandConnection(bandPool[key]);
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
        this.bandConnections = bandConnectionResolver(edges);
        this._evtRecords = {};
    }

    draw (mount, config) {
        let sel = mount
            .selectAll('g.arcus-edges')
            .data([1]);

        sel.exit().remove();
        sel = sel.enter().append('g').attr('class', 'arcus-edges').attr('transform',
            `translate(${config.labelBBox}, 0)`);

        // Draw the paths
        let conPath = this.connections.map(con => con.path());
        const flattenConPath = { forward: [], backward: [] };
        for (let i = 0, path; path = conPath[i++];) {
            flattenConPath.forward.push(...path.forward);
        }

        const edgeSel = sel.selectAll('path.arcus-edge').data(flattenConPath.forward);
        edgeSel.exit().remove();
        edgeSel.enter().append('path').classed('arcus-edge', true).merge(edgeSel).attr('d', d =>
            d[0]).style('stroke', d => d[1].to.config.color).attr('class', function (d) {
                let cls = select(this).attr('class');
                cls += ` ${d[1].seqHash()}`;
                return cls;
            });

        // Draw shadows for interaction
        conPath = [];
        for (let key in this.bandConnections) {
            conPath.push(this.bandConnections[key].path());
        }

        let shadowSel = sel.selectAll('path.arcus-edge-shadow').data(conPath);
        shadowSel.exit().remove();
        shadowSel = shadowSel.enter().append('path').classed('arcus-edge-shadow', true).classed('shadow', true)
            .merge(shadowSel).attr('d', d => d[0]).attr('class', function (d) {
                let cls = select(this).attr('class');
                cls += ` ${d[1].seqHash()}`;
                return cls;
            });

        shadowSel.on('mouseover', () => {
            console.log('over');
            const el = select(event.target);
            const hash = el.attr('class').split(/\s+/)[2];
            console.log(mouse(sel.node()));
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
}
