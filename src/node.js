export default class Node {
    constructor (name, config) {
        this.name = name;
        this.config = config;
        this.frameOffset = null;
        this.offsetY = null;
    }

    px () {
        return this.frameOffset + this.offsetY;
    }
}
