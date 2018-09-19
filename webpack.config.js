const libraryName = 'arcus',
    OUT_FILE = `${libraryName}.js`;

module.exports = {
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: OUT_FILE,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    devServer: {
        inline: true,
        contentBase: './docs'
    }
};
