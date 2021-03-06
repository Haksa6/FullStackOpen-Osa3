module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 2017
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'eqeqeq': 'error',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': [
            'error', 'always'
        ],
        'arrow-spacing': [
            'error', { 'before': true, 'after': true }
        ],
        'no-console': 0,
    },
}
