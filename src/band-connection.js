import Bezier from './bezier';
import { edgeOrderCode } from './utils';

const direction = edges => edgeOrderCode(edges[0]);

export default class BandConnection {
    constructor (bands) {
        this.bands = bands;
        this.direction = direction(bands);
    }

    path () {
        const sample = this.bands[0];
        const fpx = sample.from.px();
        const tpx = sample.to.px();
        const movement = (this.bands.length - 1) * 4;
        const rStart = (tpx - fpx) * 0.75;
        const rEnd = (tpx - fpx) * 0.75 + movement;

        return [[
            new Bezier(0, fpx, rStart, fpx, rStart, tpx, 0, tpx).toSVG(),
            new Bezier(0, tpx, rEnd, tpx, rEnd, fpx, 0, fpx).toSVG().replace(/M/g, 'L'),
            'Z'
        ].join(' '), sample];
    }
}
