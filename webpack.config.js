var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        js: './src/main.js'
            // styles: './src/styles/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'svg-fill-loader/encodeSharp',
                            'sass-loader',
                            {
                                /* расширяем первоначальную сборку sass-resourse-loader плагином для подмешивания в каждый компонент стилей их этих файлов */
                                loader: 'sass-resources-loader',
                                options: {
                                    resources: [
                                        './src/styles/variables.scss',
                                        './src/styles/mixins.scss',
                                        './src/styles/layout.scss'
                                    ]
                                }
                            }
                        ],
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                /* для общих стилей на странице */
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                /* для подключения normalize.css */
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.svg$/,
                use: [
                    'url-loader',
                    {
                        /* цвет по умолчанию, подключаемых svg */
                        loader: 'svg-fill-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'images': path.resolve(__dirname, 'src/assets/images'),
            'fonts': path.resolve(__dirname, 'src/assets/fonts')
        },
        extensions: ['.js', '.vue']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: false
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}