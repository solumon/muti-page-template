module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 2021,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            tsx: true
        }
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended',
    ],
    plugins: ['vue'],
    rules: {
        'indent': ['error', 4], // 缩进统一使用
        'linebreak-style': 'off', // 去掉行末的  lf; crlf 检查
        'no-underscore-dangle': 'off', // 允许变量命名以下划线开头
        'no-plusplus': 'off', // 允许使用一元运算符 ++ --
        'max-len': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'no-bitwise': 'off',
        'consistent-return': 'off',
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'state', // for vuex state
                'target', // for e.return value
                'event'
            ],
        }],
        // plugin vue
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': 'error',
    },
}
