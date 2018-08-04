export default class Edge {
    constructor (from, to, key, meta) {
        this.from = from;
        this.to = to;
        this.key = key;
        this.meta = meta;
        this.sequence = null;
    }

    seqStr () {
        const path = this.meta.path;
        return `${path[0]}-${path[1]}`;
    }
}
