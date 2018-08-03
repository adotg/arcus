import Bezier from './bezier';

const orderEdges = (edges) => {
    const resp = { forward: [], backward: [] };
    edges.forEach((edge) => {
        if (edge.to.pOrder - edge.from.pOrder === 0) {
            if (edge.to.order - edge.from.order > 0) {
                resp.forward.push(edge);
            } else {
                resp.backward.push(edge);
            }
        } else if (edge.to.pOrder - edge.from.pOrder > 0) {
            resp.forward.push(edge);
        } else {
            resp.backward.push(edge);
        }
    });

    return resp;
};

export default class Connection {
    constructor (edges) {
        this.directions = orderEdges(edges);
    }

    path () {
        return {
            forward: this.directions.forward.map((edge) => {
                const fpx = edge.from.px();
                const tpx = edge.to.px();
                const r = (tpx - fpx) / 2;
                return new Bezier(0, fpx, r, fpx, r, tpx, 0, tpx).toSVG();
            }).join(' ')
        };
    }
}
