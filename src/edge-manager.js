import Connection from './connection';

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

export default class EdgeManager {
    constructor (edges, frames) {
        this.edges = edges;
        this.frames = frames;
        this.connections = connectionResolver(edges);
    }

    draw (mount, config) {
        let sel = mount
            .selectAll('g.arcus-edges')
            .data([1]);

        sel.exit().remove();
        sel = sel.enter().append('g').attr('class', 'arcus-edges')
            .attr('transform', `translate(${config.labelBBox}, 0)`);

        const conPath = this.connections.map(con => [con.path(), con]);
        sel = sel.selectAll('path').data(conPath);
        sel.exit().remove();
        sel.enter().append('path').classed('arcus-edge', true).merge(sel).attr('d', d => d[0].forward);
    }
}
