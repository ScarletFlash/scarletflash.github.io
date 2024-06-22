// @ts-check
const ESLint = require('@eslint/js');
const AngularESLint = require('angular-eslint');
const TypeScriptESLint = require('typescript-eslint');

module.exports = TypeScriptESLint.config(
  {
    languageOptions: {
      parser: TypeScriptESLint.parser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 'latest',
        project: './tsconfig.app.json'
      }
    },
    files: ['**/*.ts'],
    extends: [
      ESLint.configs.recommended,
      ...TypeScriptESLint.configs.strictTypeChecked,
      ...TypeScriptESLint.configs.stylisticTypeChecked,
      ...AngularESLint.configs.tsAll
    ],
    processor: AngularESLint.processInlineTemplates,
    rules: {
      curly: 'error',
      'max-depth': [
        'error',
        {
          max: 2
        }
      ],
      'no-else-return': [
        'error',
        {
          allowElseIf: false
        }
      ],
      'no-extra-boolean-cast': [
        'error',
        {
          enforceForLogicalOperands: true
        }
      ],
      'no-implicit-coercion': [
        'error',
        {
          boolean: true,
          number: true,
          string: true,
          disallowTemplateShorthand: false
        }
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports'
        }
      ],
      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: true
        }
      ],
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            Object: null
          },
          extendDefaults: false
        }
      ],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never'
        }
      ],
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: false,
          allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true
        }
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'off',
            parameterProperties: 'off'
          }
        }
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
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-require-imports': 'error',
      'no-unused-expressions': 'off',
      'no-inner-declarations': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: false,
          allowTernary: true,
          allowTaggedTemplates: false,
          enforceForJSX: false
        }
      ],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
          allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
        }
      ],
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/typedef': [
        'error',
        {
          arrowParameter: true,
          arrayDestructuring: false,
          memberVariableDeclaration: true,
          objectDestructuring: false,
          parameter: true,
          propertyDeclaration: true,
          variableDeclaration: true,
          variableDeclarationIgnoreFunction: true
        }
      ],
      '@typescript-eslint/prefer-as-const': 'off',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true
        }
      ],
      '@typescript-eslint/no-namespace': 'off',
      complexity: [
        'error',
        {
          max: 10
        }
      ],
      'consistent-return': 'error',
      'no-underscore-dangle': 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      eqeqeq: 'error',
      'no-caller': 'error',
      'no-duplicate-imports': 'error',
      'no-sequences': [
        'error',
        {
          allowInParentheses: false
        }
      ],
      'no-template-curly-in-string': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'object-shorthand': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_'
        }
      ],
      'no-var': 'error',
      'no-unneeded-ternary': 'error',
      'no-undef-init': 'error',
      'no-new-wrappers': 'error',
      'no-bitwise': 'error',
      'prefer-const': 'error',
      radix: 'error',
      'no-eval': 'error',
      'no-console': [
        'error',
        {
          allow: ['warn']
        }
      ],
      'id-denylist': ['warn', 'data', 'e', 'acc'],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': 'error',
      'no-restricted-imports': 'off',
      '@typescript-eslint/no-restricted-imports': 'error'
    }
  },
  {
    files: ['**/*.html'],
    extends: [...AngularESLint.configs.templateAll],
    rules: {
      '@angular-eslint/template/i18n': 'off'
    }
  }
);
