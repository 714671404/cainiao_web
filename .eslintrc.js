module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-tabs': 0,
        'no-mixed-spaces-and-tabs': 0,
        'indent': ["off", "tab"],
        'no-trailing-spaces': 0,
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}