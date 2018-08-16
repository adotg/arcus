import { select } from 'd3-selection';
import SmartLabelManager from 'fusioncharts-smartlabel';
import Node from './node';
import Frame from './frame';
import FrameManager from './frame-manager';
import Edge from './edge';
import EdgeManager from './edge-manager';
import { resolver } from './utils';

export default class Arcus {
    constructor (config) {
        this.height = null;
        this.width = null;
        this.config = Object.assign(Object.assign({}, this.constructor.defaultConfig()), config);

        this._mount = null;
        this._bodyEl = null;
        this._data = null;
        this._frames = null;
        this._edges = null;
        this._slManager = new SmartLabelManager(+new Date());
    }

    static defaultConfig () {
        return {
            nodeSpacing: 50,
            frameSpacing: 80,
            nodeSize: 4,
            maxFrameLabelLength: 120,
            padding: [20, 20],
            delimiter: '.'
        };
    }

    mount (...params) {
        let el;
        let dim;
        if (params.length) {
            this._mount = el = params[0];
            dim = params[1];
            this._bodyEl = select(el).append('svg').attr('version', '1.1').classed('arcus-root', true);
            this.width = dim[0];
            this.height = dim[1];
            return this;
        }
        return this._mount;
    }

    bodyEl () {
        return this._bodyEl;
    }

    data (...params) {
        if (params.length) {
            let data;

            this._data = data = params[0];
            this._frames = new FrameManager(
                data.frames.map((frame, i) => {
                    const offset = i * ((data.nodes.length - 1) * this.config.nodeSpacing + this.config.frameSpacing);
                    const inst = new Frame(
                        frame.name,
                        data.nodes.map((node, ii) => {
                            let nInst = new Node(node.name, ii,
                                Object.assign({ size: this.config.nodeSize }, node.config));
                            nInst.frameOffset = offset;
                            nInst.offsetY = ii * this.config.nodeSpacing;
                            return nInst;
                        }),
                        i,
                        { sl: this._slManager }
                    );

                    inst.offset = offset;
                    return inst;
                }
            ));
            let resolve = resolver(this._frames.frames, this.config);

            this._edges = new EdgeManager(data.edges.map(edge => new Edge(resolve(edge.from), resolve(edge.to),
                edge.key, {
                    inf: edge.inf,
                    path: [edge.from, edge.to]
                })), this._frames);
            return this;
        }
        return this._data;
    }

    render () {
        const body = this.bodyEl();
        const frameSize = this._frames.size();
        this.config.frameLength = (this._data.nodes.length - 1) * this.config.nodeSpacing;

        let sel = body.selectAll('g').data([1]);

        sel.exit().remove();
        sel = sel.enter().append('g').attr('transform',
            `translate(${this.config.padding[0]}, ${this.config.padding[1] + this.config.nodeSize * 0.5})`);

        this._frames.draw(sel, this.config);
        const [edgeWidth] = this._edges.draw(sel, this.config);

        body.attr('height', `${frameSize * this.config.frameLength + (frameSize - 1) * this.config.frameSpacing +
            2 * this.config.padding[1] + this.config.nodeSize}px`);

        body.attr('width', `${edgeWidth + this.config.padding[0]}px`);
    }
}
