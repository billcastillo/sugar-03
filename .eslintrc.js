module.exports = {
	extends: ['./node_modules/poetic/config/eslint/eslint-config.js', 'plugin:prettier/recommended'],
	// Add custom rules here
	rules: {
		'import/no-named-as-default-member': 0,
		'import/no-named-as-default': 0,
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['pages', 'components'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
