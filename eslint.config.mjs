import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: ['dist', 'dist-cjs', 'dist-esm', 'eslint.config.js'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends('airbnb-base'),
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
      ],
      'import/prefer-default-export': 'off',
      'newline-before-return': 'error',
      'no-console': 'off',
      'no-var': 'error',
    },
  },
  eslintConfigPrettier,
];