import { hashCode } from './utils';

export default class Edge {
    constructor (from, to, key, meta) {
        this.from = from;
        this.to = to;
        this.key = key;
        this.meta = meta;
        this.sequence = null;

        const path = meta.path;
        this._seqStr = `${path[0]}-${path[1]}`;
        this._seqHash = hashCode(this._seqStr);
    }

    seqStr () {
        return this._seqStr;
    }

    seqHash () {
        return this._seqHash;
    }
}
