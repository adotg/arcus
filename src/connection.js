import { edgeOrderCode, EdgeDirection } from './utils';

const orderEdges = (edges) => {
    const resp = { forward: [], backward: [] };
    edges.forEach((edge) => {
        const status = edgeOrderCode(edge);
        if (status === EdgeDirection.FORWARD) {
            resp.forward.push(edge);
        } else {
            resp.backward.push(edge);
        }
    });

    return resp;
};

export default class Connection {
    constructor (edges) {
        edges.forEach(edge => edge.partOf(this));
        this.edges = edges;
        this.directions = orderEdges(edges);
        this.sequence = null;
    }

    path () {
        return {
            forward: this.directions.forward.map(edge => edge.path()),
            backward: this.directions.backward.map(edge => edge.path())
        };
    }
}
