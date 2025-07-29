module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        // Example rule: turn off semi-colon enforement
        'semi': 'off',
        'no-console': 'off',
        'vue/no-unused-vars': 'warn'
    }
}