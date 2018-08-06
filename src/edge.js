import Bezier from './bezier';
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

    path () {
        const movement = this.sequence * 4;
        const fpx = this.from.px();
        const tpx = this.to.px();
        const r = (tpx - fpx) * 0.75 + movement;
        return [new Bezier(0, fpx, r, fpx, r, tpx, 0, tpx).toSVG(), this];
    }

    reversePath () {
        const movement = this.sequence * 4;
        const fpx = this.from.px();
        const tpx = this.to.px();
        const r = (tpx - fpx) * 0.75 + movement;
        return [new Bezier(0, tpx, r, tpx, r, fpx, 0, fpx).toSVG(), this];
    }
}
