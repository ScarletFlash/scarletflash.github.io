const PACKAGE_JSON_DEFAULT_SORT_ORDER = {
  name: null,
  description: null,
  version: null,
  private: null,
  repository: 'lexical',
  bin: null,
  main: null,
  types: null,
  files: 'lexical',
  scripts: 'lexical',
  peerDependencies: 'lexical',
  dependencies: 'lexical',
  devDependencies: 'lexical',
  engines: 'lexical',
  packageManager: null,
  '*': 'lexical'
};

const ROOT_PACKAGE_JSON_SORT_ORDER = {
  ...PACKAGE_JSON_DEFAULT_SORT_ORDER,
  scripts: null
};

export default {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: true,
  printWidth: 120,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  plugins: ['prettier-plugin-sort-json', 'prettier-plugin-tailwindcss'],
  jsonRecursiveSort: true,
  jsonSortOrder: JSON.stringify({ '*': 'lexical' }),
  tailwindStylesheet: './src/styles.css',
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json'
      }
    },
    {
      files: ['package.json'],
      options: {
        jsonRecursiveSort: false,
        jsonSortOrder: JSON.stringify(ROOT_PACKAGE_JSON_SORT_ORDER)
      }
    }
  ]
};
