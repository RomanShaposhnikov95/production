import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
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
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'args': 'all',
          'argsIgnorePattern': '^_',
          'caughtErrors': 'all',
          'caughtErrorsIgnorePattern': '^_',
          'destructuredArrayIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'ignoreRestSiblings': true
        },
      ], // Предупреждение для неиспользуемых переменных
      "@typescript-eslint/ban-ts-comment": "off",
    }
  },
];