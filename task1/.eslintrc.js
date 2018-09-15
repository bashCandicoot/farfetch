module.exports = {
	extends: ['airbnb-base'],
    root: true,
    env: {
        browser: true,
        es6: true
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    rules: {
        "no-unused-vars": [1,{"argsIgnorePartern": "res|next|~err"}],
        "arrow-body-style": [2, "as-needed"],
        "no-param-reassign": [2, { "props": false }],
        "no-console": 0,
        "import": 0,
        "max-len": 0,
        "no-underscore-dangle": 0,
        'max-len': [1, 120], // extended
        'no-plusplus': 0, // disabled

        // allow optionalDependencies
		'import/no-extraneous-dependencies': ['error', {
			optionalDependencies: ['test/unit/index.js']
        }],
    },
}