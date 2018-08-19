const formatter = (edges) => {
    const sample = edges[0];
    return `
        <div class='norm-pad'>
            Total issues moved from <i>${sample.from.name} of ${sample.from.association.source.name}</i> to <i>
            ${sample.to.name} of ${sample.to.association.source.name}</i> is ${edges.length}
        </div>
    `;
};

export default class {
    constructor () {
        this._mount = null;
        this._listeners = [formatter];
    }

    mount (...params) {
        if (params.length) {
            this._mount = params[0];
            return this;
        }

        return this._mount;
    }

    registerListener (fn) {
        this._listeners[0] = fn;
        return () => this._listeners[0] = formatter;
    }

    action () {
        // const text = formatter(payload.affectedSet);
        // this._mount.html(text);
        // Render
    }
}
