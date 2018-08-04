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
    const conns = [];

    for (let i = 0, edge; edge = edges[i++];) {
        if ((seq = edge.seqStr()) in bandPool) {
            bandPool[seq].push(edge);
        } else {
            bandPool[seq] = [edge];
        }
    }

    for (let key in bandPool) {
        conns.push(new BandConnection(bandPool[key]));
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
    }

    draw (mount, config) {
        let sel = mount
            .selectAll('g.arcus-edges')
            .data([1]);

        sel.exit().remove();
        sel = sel.enter().append('g').attr('class', 'arcus-edges')
            .attr('transform', `translate(${config.labelBBox}, 0)`);

        const conPath = this.bandConnections.map(con => [con.path(), con]);
        sel = sel.selectAll('path').data(conPath);
        sel.exit().remove();
        sel.enter().append('path').classed('arcus-edge', true).merge(sel).attr('d', d => d[0]);
    }
}
