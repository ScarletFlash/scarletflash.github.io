import { join } from 'node:path';
import { default as ESLint } from '@eslint/js';
import angular from 'angular-eslint';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { default as functionalPlugin } from 'eslint-plugin-functional';
import { createNodeResolver, default as importPlugin } from 'eslint-plugin-import-x';
import { getMergedOptions, plugin as noMercyPlugin, PARTS_OF_SPEECH_DEFAULT } from 'eslint-plugin-no-mercy';
import { default as unicornPlugin } from 'eslint-plugin-unicorn';
import { defineConfig, globalIgnores } from 'eslint/config';
import { default as typescriptEslint } from 'typescript-eslint';

export default defineConfig(
  globalIgnores(['**/*.d.ts', '**/dist/**', '**/coverage/**', '**/node_modules/**', '**/.angular/**']),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    }
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      parser: typescriptEslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      functional: functionalPlugin,
      unicorn: unicornPlugin,
      'no-mercy': noMercyPlugin
    },
    extends: [
      ESLint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      ...typescriptEslint.configs.strictTypeChecked,
      ...typescriptEslint.configs.stylisticTypeChecked
    ],
    settings: {
      'import-x/resolver-next': [
        createNodeResolver({ extensions: ['.ts', '.cts', '.mts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'] }),
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: join(import.meta.dirname, 'tsconfig.app.json')
        })
      ]
    },
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector:
            'Program:has(ExportNamedDeclaration:not([source])) > ExportNamedDeclaration:not(:has(TSDeclareFunction)):not([source]) ~ ExportNamedDeclaration:not(:has(TSDeclareFunction)):not([source])',
          message: 'Only one export per file is allowed. Split into separate files.'
        },
        {
          selector:
            'Program > ExportDefaultDeclaration ~ ExportNamedDeclaration:not(:has(TSDeclareFunction)):not([source])',
          message: 'Only one export per file is allowed. Split into separate files.'
        },
        {
          selector:
            'Program > ExportNamedDeclaration:not(:has(TSDeclareFunction)):not([source]) ~ ExportDefaultDeclaration',
          message: 'Only one export per file is allowed. Split into separate files.'
        },
        {
          selector: 'IfStatement IfStatement',
          message:
            'Avoid nested "if" statements. Use early returns, guard clauses, or extract logic into separate functions.'
        }
      ],
      curly: 'error',
      'max-depth': ['error', { max: 2 }],
      'no-else-return': ['error', { allowElseIf: false }],
      'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
      'no-implicit-coercion': [
        'error',
        { boolean: true, number: true, string: true, disallowTemplateShorthand: false }
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', disallowTypeAnnotations: true, fixStyle: 'inline-type-imports' }
      ],
      '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'explicit', overrides: { constructors: 'off', parameterProperties: 'off' } }
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          classes: [
            'abstract-field',
            'instance-field',
            'static-field',
            'static-get',
            'instance-get',
            'abstract-get',
            'constructor',
            'abstract-method',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
            '#private-instance-method',
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            '#private-static-method'
          ]
        }
      ],
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      'no-inner-declarations': 'error',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: false, allowTernary: true, allowTaggedTemplates: false, enforceForJSX: false }
      ],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowAny: false,
          allowNullableBoolean: false,
          allowNullableEnum: false,
          allowNullableNumber: false,
          allowNullableObject: false,
          allowNullableString: false,
          allowNumber: false,
          allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
          allowString: false
        }
      ],
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowAny: false,
          allowBoolean: true,
          allowNullish: true,
          allowNumber: true,
          allowRegExp: false,
          allowNever: false
        }
      ],
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-namespace': 'off',
      complexity: ['error', { max: 10 }],
      'consistent-return': 'error',
      'no-underscore-dangle': 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      eqeqeq: 'error',
      'no-caller': 'error',
      'no-duplicate-imports': 'error',
      'no-sequences': ['error', { allowInParentheses: false }],
      'no-template-curly-in-string': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': ['error', { checkThenables: true, ignoreVoid: false }],
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'object-shorthand': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-var': 'error',
      'no-unneeded-ternary': 'error',
      'no-undef-init': 'error',
      'no-new-wrappers': 'error',
      'no-bitwise': 'error',
      'prefer-const': 'error',
      radix: 'error',
      'no-eval': 'error',
      'no-console': ['error', { allow: ['warn'] }],
      'id-denylist': ['warn', 'data', 'e', 'acc'],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': 'error',
      '@typescript-eslint/no-deprecated': 'warn',
      'import-x/no-empty-named-blocks': 'error',
      'import-x/no-extraneous-dependencies': 'error',
      'import-x/no-named-as-default': 'error',
      'import-x/no-named-as-default-member': 'error',
      'import-x/no-amd': 'error',
      'import-x/no-commonjs': 'error',
      'import-x/no-import-module-exports': 'error',
      'import-x/unambiguous': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-cycle': 'off',
      'import-x/no-dynamic-require': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-webpack-loader-syntax': 'error',
      'import-x/exports-last': 'error',
      'import-x/extensions': 'error',
      'import-x/first': 'error',
      'import-x/newline-after-import': ['error', { exactCount: true, considerComments: true }],
      'import-x/no-anonymous-default-export': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-unassigned-import': 'error',
      'import-x/order': [
        'error',
        {
          named: { enabled: true, types: 'types-last' },
          alphabetize: { order: 'asc' },
          'newlines-between': 'never'
        }
      ],
      'id-length': ['error', { min: 2, exceptions: ['x', 'y', 'z', 'w', 'a', 'b', '_'], properties: 'always' }],
      'no-inline-comments': 'error',
      'functional/no-let': 'error',
      'unicorn/prefer-at': 'error',
      'unicorn/consistent-destructuring': 'error',
      'unicorn/consistent-function-scoping': 'error',
      'unicorn/explicit-length-check': 'error',
      'unicorn/filename-case': ['error', { cases: { kebabCase: true, pascalCase: true } }],
      'unicorn/no-abusive-eslint-disable': 'error',
      'unicorn/no-empty-file': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
      'unicorn/no-nested-ternary': 'error',
      'unicorn/no-unreadable-iife': 'error',
      'unicorn/no-unused-properties': 'error',
      'unicorn/prefer-array-flat-map': 'error',
      'no-mercy/boolean-prefix': 'error',
      'no-mercy/no-else': 'error',
      'no-mercy/no-else-if': 'error',
      'no-mercy/no-redundant-types': 'error',
      'no-mercy/parts-of-speech': [
        'error',
        getMergedOptions({
          base: PARTS_OF_SPEECH_DEFAULT,
          override: {
            dictionary: {
              noun: ['charge', 'debounce', 'fill', 'overscroll', 'repeat', 'resize', 'slide', 'slope', 'translate'],
              verb: ['bootstrap']
            }
          }
        })
      ],
      'no-mercy/prefer-parameter-object': 'error'
    }
  },
  {
    files: ['**/*.ts'],
    extends: [...angular.configs.tsRecommended],
    processor: angular.createProcessor(),
    rules: {
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
      '@angular-eslint/prefer-on-push-component-change-detection': ['error', { allowExplicitOnPush: false }],
      '@angular-eslint/prefer-service-decorator': 'error',
      '@angular-eslint/prefer-host-metadata-property': 'error',
      '@angular-eslint/prefer-signals': 'error'
    }
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/prefer-ngsrc': 'error',
      '@angular-eslint/template/prefer-class-binding': 'error',
      '@angular-eslint/template/prefer-style-binding': 'error'
    }
  }
);
