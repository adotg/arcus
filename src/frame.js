const drawText = (mount, text) => {
    let sel = mount.selectAll('text').data([text]);
    sel.exit().remove();
    sel.enter().append('text');

    sel = sel.selectAll('tspan').data(d => d);
    sel.exit().remove();
    sel.enter().append('tspan').merge(sel).text(d => d);

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
        .attr('r', node => node.config.size).classed('arcus-frame-node', true);
    return sel;
};

export default class Frame {
    constructor (name, nodes, dependencies) {
        this.name = name;
        this.nodes = nodes;
        this._dep = dependencies;
    }

    getLabelSize () {
        return this._dep.sl.getOriSize(this.name);
    }

    draw (mount, config) {
        const sl = this._dep.sl;
        const lines = sl.constructor.textToLines(sl.getSmartText(this.name, ...config.labelBBox));

        let sel = mount.selectAll('g.arcus-frame-label').data([1]);
        sel.exit().remove();
        sel.enter().append('g').classed('arcus-frame-label', true);

        drawText(sel, lines);

        sel = mount.selectAll('g.arcus-frame-marks').data([1]);
        sel.exit().remove();
        sel = sel.enter().append('g').classed('arcus-frame-marks', true)
            .attr('transform', `translate(${config.labelBBox}, 0)`);

        drawMarks(sel, this.nodes, config);
    }
}
