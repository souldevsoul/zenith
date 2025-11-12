import tsParser from '@typescript-eslint/parser';

import productQuality from './eslint-plugin-product-quality/index.js';

/**
 * Product Quality ESLint Config for Zenith
 * Flat config format (ESLint 9+) with TypeScript support
 *
 * Enforces Zenith brand standards:
 * - Orange/Amber/Yellow color palette only
 * - Company name: Zenith
 * - Email: support@zenithdev.com
 * - Payment provider: stripe
 */
export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'product-quality': productQuality,
    },
    rules: {
      // ========================================
      // LINK VALIDATION (Critical for UX)
      // ========================================
      'product-quality/no-broken-internal-links': 'warn',

      // ========================================
      // BRAND CONSISTENCY - ZENITH ONLY
      // ========================================
      'product-quality/use-styleguide-colors-only': ['warn', {
        allowedColors: [
          // Base colors
          'black',
          'white',
          'transparent',
          'current',
          'inherit',
          // Grayscale (always allowed)
          'gray-',
          'slate-',
          'zinc-',
          'neutral-',
          // Zenith brand colors ONLY
          'orange-',    // Primary brand color
          'amber-',     // Primary brand color
          'yellow-',    // Accent color
          // Utility colors (allowed)
          'red-',       // For errors
        ],
      }],

      // ========================================
      // CONTENT CONSISTENCY - ZENITH
      // ========================================
      'product-quality/consistent-payment-providers': ['warn', {
        provider: 'stripe',
      }],
      'product-quality/consistent-company-info': ['warn', {
        companyName: 'Zenith',
        email: 'support@zenithdev.com',
      }],

      // ========================================
      // UX CONSISTENCY RULES
      // ========================================
      'product-quality/no-button-without-handler': 'warn',
      'product-quality/no-form-without-submit': 'error',
      'product-quality/no-missing-alt-text': 'error',
      'product-quality/no-generic-placeholders': 'warn',
      'product-quality/require-loading-state-on-async-button': 'warn',
      'product-quality/require-aria-label-on-icon-buttons': 'warn',

      // ========================================
      // ERROR HANDLING & QUALITY
      // ========================================
      'product-quality/require-try-catch-fetch': 'warn',
      'product-quality/require-empty-state': 'warn',

      // ========================================
      // PERFORMANCE
      // ========================================
      'product-quality/require-image-optimization': 'warn',
    },
  },
];
