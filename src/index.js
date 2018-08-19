/* global requestAnimationFrame */

import { select } from 'd3-selection';
import SmartLabelManager from 'fusioncharts-smartlabel';
import Node from './node';
import Frame from './frame';
import FrameManager from './frame-manager';
import Edge from './edge';
import EdgeManager from './edge-manager';
import { resolver } from './utils';
import Context from './context';

const render = self =>
    () => {
        const body = self.bodyEl();
        const frameSize = self._frames.size();
        self.config.frameLength = (self._data.nodes.length - 1) * self.config.nodeSpacing;

        let sel = body.selectAll('g').data([1]);

        sel.exit().remove();
        sel = sel.enter().append('g').attr('transform',
            `translate(${self.config.padding[0]}, ${self.config.padding[1] + self.config.nodeSize * 0.5})`);

        const [frameElWidth] = self._frames.draw(sel, self.config);
        const [edgeWidth, settings] = self._edges.draw(sel, self.config);
        self._frames.postDrawingAdjust({ offsetX: settings.shiftX });

        body.attr('height', `${frameSize * self.config.frameLength + (frameSize - 1) * self.config.frameSpacing +
            2 * self.config.padding[1] + self.config.nodeSize}px`);

        body.attr('width', `${frameElWidth + edgeWidth + self.config.padding[0]}px`);
    };

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
        this._context = new Context();
    }

    static defaultConfig () {
        return {
            nodeSpacing: 50,
            frameSpacing: 80,
            nodeSize: 4,
            maxFrameLabelLength: 250,
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

    contextInf (mount, cb) {
        const ctx = this._context;
        ctx.mount(select(mount));
        return ctx.registerListener(cb);
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
                        frame,
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
        requestAnimationFrame(render(this));
        return this;
    }
}
