const path = require("path");

module.exports = {
    entry: "./src/index",
    target: "web",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "index.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    "resolve-url-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: {
                    loader: "file-loader",
                    // include: path.resolve(__dirname, "./src/assets/fonts"),
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets/fonts/",
                        esModule: false,
                    },
                },
            },
            {
                test: /\.svg$/,
                exclude: path.resolve(__dirname, "./src/assets/images"),
                use: ["@svgr/webpack"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
};
