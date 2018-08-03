export const resolver = (frames, config) => {
    const frameMap = {};
    for (let i = 0, frame; frame = frames[i++];) {
        frameMap[frame.name] = {
            inst: frame,
            nodeMap: frame.nodes.reduce((store, node) => {
                store[node.name] = {
                    inst: node
                };
                return store;
            }, {})
        };
    }

    return (path) => {
        path = path.split(config.delimiter);
        return frameMap[path[0]].nodeMap[path[1]].inst;
    };
};
