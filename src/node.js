export default class Node {
    constructor (name, order, config) {
        this.name = name;
        this.association = null;
        this.config = config;
        this.frameOffset = null;
        this.offsetY = null;
        this.order = order;
        this.pOrder = null;
    }

    px () {
        return this.frameOffset + this.offsetY;
    }
}
