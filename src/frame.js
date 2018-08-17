const drawText = (mount, text) => {
    let sel = mount.selectAll('text').data([text]);
    sel.exit().remove();
    sel = sel.enter().append('text');

    sel = sel.selectAll('tspan').data(d => d);
    sel.exit().remove();
    sel.enter().append('tspan').attr('dy', 16).merge(sel).text(d => d);

    return sel;
};


const drawMarks = (mount, nodes, config) => {
    let sel = mount.selectAll('line').data([config.frameLength]);
    sel.exit().remove();
    sel = sel.enter().append('line').attr('x1', 0).attr('y1', 0).attr('x2', 0).attr('y2', d => d)
        .classed('arcus-frame-line', true);

    sel = mount.selectAll('circle').data(nodes);
    sel.exit().remove();
    sel = sel.enter().append('circle').attr('cx', 0).attr('cy', (d, i) => i * config.nodeSpacing)
        .attr('r', node => node.config.size).classed('arcus-frame-node', true).style('fill', d => d.config.color);
    return sel;
};

export default class Frame {
    constructor (source, nodes, order, dependencies) {
        this.source = source;
        this.nodes = nodes;
        this.order = order;
        this.offset = null;
        this._mount = null;
        this._dep = dependencies;

        nodes.forEach(node => node.pOrder = order);

        const sl = this._dep.sl;

        this._dims = {};

        sl.setStyle({
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            fontStyle: 'normal'
        });
        this._dims.head = sl.getOriSize(source.name);

        sl.setStyle({
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            fontStyle: 'normal'
        });
        this._dims.desc = sl.getOriSize(source.desc || '');
    }

    getLabelSize () {
        return Math.max(this._dims.head.width, this._dims.desc.width);
    }

    draw (mount, config) {
        const sl = this._dep.sl;
        const source = this.source;
        const lines = sl.constructor.textToLines(sl.getSmartText(source.name, ...config.labelBBox.width)).lines;
        this._mount = mount;

        let sel = mount.selectAll('g.arcus-frame-label').data([1]);
        sel.exit().remove();
        sel = sel.enter().append('g').classed('arcus-frame-label', true);

        drawText(sel, lines);

        sel = mount.selectAll('g.arcus-frame-marks').data([1]);
        sel.exit().remove();
        sel = sel.enter().append('g').classed('arcus-frame-marks', true)
            .attr('transform', `translate(${config.labelBBox.width}, 0)`);

        drawMarks(sel, this.nodes, config);
    }

    postDrawingAdjust (adjustment) {
        this._mount.selectAll('g.arcus-frame-label').attr('transform', `translate(${adjustment.offsetX}, 0)`);
    }
}
