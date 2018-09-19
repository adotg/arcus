const formatter = (conn) => {
    const sample = conn.edges[0];
    return `
        <div class='norm-pad'>
            <div style="font-weight: 700">${sample.key}</div>
            <div style="font-weight: 300; padding-top: 8px;">${sample.meta.inf.summary}</div>
            <div style="font-weight: 300; font-size: 14px; padding: 8px 0px;">
                <span>Assignee: ${sample.meta.inf.assignee}</span>
                <span style="margin-left: 20px">Story Point: ${sample.meta.inf.sp}</span>
            </div>
        </div>
    `;
};

export default class {
    constructor () {
        this._mount = null;
        this._listeners = [formatter];
        this._data = null;
    }

    mount (...params) {
        let arg;
        if (params.length) {
            arg = params[0];
            this._mount = arg.append('div').classed('arcus-tooltip', true)
                .style('display', 'none');

            return this;
        }

        return this._mount;
    }

    data (data) {
        this._data = data;
        return this;
    }

    registerListener (fn) {
        this._listeners[0] = fn;
        return () => this._listeners[0] = formatter;
    }

    action (payload) {
        if (!payload.affectedSet) {
            this._mount.style('display', 'none');
            return;
        }
        const coord = payload.point;
        const content = formatter(payload.affectedSet);
        this._mount.html(content).style('display', 'inline-block').style('left', `${coord[0] + 100}px`)
                        .style('top', `${coord[1] + 50}px`);
    }
}
