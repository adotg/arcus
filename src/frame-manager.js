export default class FrameManager {
    constructor (frames) {
        this.frames = frames;
    }

    size () {
        return this.frames.length;
    }

    draw (mount, config) {
        const sel = mount
            .selectAll('g')
            .data(this.frames);

        sel.exit().remove();
        sel.enter().append('g').attr('class', (e, i) => `arcus-frame-${i}`).attr('transform', (e, i) =>
            `translate(0, ${i * (config.frameLength + config.frameSpacing)})`);

        const labelsSize = this.frames.map(frame => frame.getLabelSize().width);
        config.labelBBox = Math.min(Math.max(...labelsSize), config.maxFrameLabelLength);
        this.frames.forEach((frame, i) => frame.draw(mount.select(`.arcus-frame-${i}`), config));
    }
}
