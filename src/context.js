export default class Context {
    constructor () {
        this._mount = null;
        this._listeners = [];
    }

    mount (...params) {
        if (params.length) {
            this._mount = params[0];
            return this;
        }

        return this._mount;
    }

    registerListener (fn) {
        const i = this._listeners.push(fn) - 1;
        return () => this._listeners.splice(i, 1);
    }
}
