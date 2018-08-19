/* global FusionCharts */
const formatter = (edges) => {
    const sample = edges[0];
    return `
        <div class='norm-pad'>
            Total issues moved from <i>${sample.from.name} of ${sample.from.association.source.name}</i> to <i>
            ${sample.to.name} of ${sample.to.association.source.name}</i> is ${edges.length}
        </div>
    `;
};

const vizMount = () => `
    <div id='circum-viz' class='norm-pad'></div>
`;

const prepareData = (edges) => {
    const hash = edges.reduce((store, edge) => {
        if (edge.key in store) {
            store[edge.key]++;
        } else {
            store[edge.key] = 1;
        }

        return store;
    }, {});

    return Object.entries(hash).map(([key, occurrence]) => ({ value: occurrence, tooltext: `${key}: ${occurrence}` }));
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

    action (payload) {
        const content = formatter(payload.affectedSet);
        this._mount.html(content + vizMount());
        FusionCharts.ready(() => {
            const fc = new FusionCharts({
                type: 'sparkcolumn',
                renderAt: 'circum-viz',
                width: 200,
                height: 50,
                dataFormat: 'json',
                theme: 'fusion',
                dataSource: {
                    chart: {
                        caption: 'Repeatation',
                        charttopmargin: '10',
                        theme: 'fusion',
                        bgColor: '#D7EFEE',
                        captionFont: 'Roboto',
                        captionFontBold: 0,
                        highColor: '5d62b5',
                        lowColor: '5d62b5'
                    },
                    dataset: [
                        { data: prepareData(payload.affectedSet) }
                    ]
                }
            });
            fc.render();
        });
    }
}
