const { prettierConfig } = require('poetic');

module.exports = {
	...prettierConfig,
	// Add custom rules here
	jsxBracketSameLine: true,
	bracketSpacing: true,
	printWidth: 120,
};
