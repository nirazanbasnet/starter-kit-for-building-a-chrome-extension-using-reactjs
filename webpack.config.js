const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: "development",
	devtool: "cheap-module-source-map",
	entry: {
		popup: path.resolve("src/popup/index.tsx"),
		options: path.resolve("src/options/index.tsx"),
		contentScript: path.resolve("src/contentScript/index.tsx"),
	},
	module: {
		rules: [
			{
				use: "ts-loader",
				test: /\.(tsx|ts)$/,
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: "postcss-loader", // postcss loader needed for tailwindcss
						options: {
							postcssOptions: {
								ident: "postcss",
								plugins: [tailwindcss, autoprefixer],
							},
						},
					},
				],
			},
			{
				type: "assets/resource",
				test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
			},
		],
	},
	plugins: [
		new Dotenv(),
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false,
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve("src/static"),
					to: path.resolve("dist"),
				},
			],
		}),
		...getHtmlPlugins(["popup", "options", "contentScript"]),
	],
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "dist"),
	},
	optimization: {
		splitChunks: {
			chunks(chunk) {
				return chunk.name !== "contentScript";
			},
		},
	},
};

function getHtmlPlugins(chunks) {
	return chunks.map(
		(chunk) =>
			new HtmlPlugin({
				title: "Chrome Extension with ReactJs",
				filename: `${chunk}.html`,
				chunks: [chunk],
			})
	);
}
