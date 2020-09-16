const withCSS = require("@zeit/next-css");

module.exports = withCSS({
	target: "serverless",
	webpack: (config, { webpack }) => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: "empty"
		};

		config.plugins.push(new webpack.IgnorePlugin(/^encoding$/, /node-fetch/));

		return config;
	}
});
