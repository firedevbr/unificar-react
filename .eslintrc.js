module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: ['error', 'never'],
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'consistent-return': 'off',
    'max-len': ['error', { code: 120 }],
    'no-restricted-globals': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': ['off'],
    'import/prefer-default-export': 'off',
    'react/no-array-index-key': 'off',
    'react/state-in-constructor': 'off',
    'react/prop-types': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prettier/prettier': 'error'
  }
}
