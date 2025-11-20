import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierConfig from 'eslint-config-prettier'
import tailwind from 'eslint-plugin-tailwindcss'

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },

  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactRefresh.configs.vite,
      prettierConfig,
      ...tailwind.configs['flat/recommended'],
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  {
    files: ['*.{js,cjs,mjs,ts}', 'vite.config.*', 'eslint.config.*'],
    languageOptions: { globals: globals.node },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'no-console': 'off',
    },
  }
)
