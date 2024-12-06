import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';
import example from 'eslint-plugin-exapmle'


export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  i18next.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      example
    },
    rules: {
      'space-before-function-paren': ['error', 'always'], // Требовать пробел перед функцией
      'space-in-parens': ['error', 'never'], // Запрещать пробелы внутри круглых скобок
      'no-multi-spaces': ['error'], // Запрещать несколько пробелов подряд
      'indent': ['error', 2], // Использовать 2 пробела для отступов
      'no-trailing-spaces': ['error'], // Запрещать пробелы в конце строк
      'object-curly-spacing': ['error', 'always'], // Требовать пробелы внутри фигурных скобок
      'quotes': ['error', 'single'], // Использовать одинарные кавычки
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off', // Отключить требование для React в области видимости при использовании JSX
      'react/jsx-props-no-spreading': 'warn',
      '@typescript-eslint/no-unused-vars': "off",
      '@typescript-eslint/no-explicit-any': "off",
      // '@typescript-eslint/no-unused-vars': [
      //   'error',
      //   {
      //     'args': 'all',
      //     'argsIgnorePattern': '^_',
      //     'caughtErrors': 'all',
      //     'caughtErrorsIgnorePattern': '^_',
      //     'destructuredArrayIgnorePattern': '^_',
      //     'varsIgnorePattern': '^_',
      //     'ignoreRestSiblings': true
      //   },
      // ], // Предупреждение для неиспользуемых переменных
      "@typescript-eslint/ban-ts-comment": "off",
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: 'function' },
        { blankLine: 'always', prev: 'import', next: 'class' },
      ],
      'example/path-checker': 'error',
      "react/display-name": "off",
    },
  },
  {
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }// что бы в тестах выключить eslint на неперведенные слова
];