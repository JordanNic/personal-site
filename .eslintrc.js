module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
    },
    extends: [
        'plugin:vue/recommended',
        'plugin:prettier-vue/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['@typescript-eslint'],
    root: true,
    settings: {
        'prettier-vue': {
            SFCBlocks: {
                customBlocks: {
                    docs: { lang: 'markdown' },
                    config: { lang: 'json' },
                    module: { lang: 'js' },
                    comments: false,
                },
            },
        },
        usePrettierrc: true,
        fileInfoOptions: {
            withNodeModules: false,
        },
    },
    rules: {
        'prettier-vue/prettier': ['error'],
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index', 'default', '[...slug]', '[...404]'],
            },
        ],
    },
}
