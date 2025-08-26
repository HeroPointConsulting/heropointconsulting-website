import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "lib/generated/**",
      "*.generated.js",
      "*.generated.ts", 
      "*.generated.d.ts",
      "next-env.d.ts",
      "*.tsbuildinfo",
    ],
  },
  {
    rules: {
      // Security rules
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-optional-chaining": "error",
      
      // Prevent common security issues
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-assignment": "off", // Too strict for this project
      "@typescript-eslint/no-unsafe-member-access": "off", // Too strict for this project
      "@typescript-eslint/no-unsafe-call": "off", // Too strict for this project
      
      // Code quality
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "no-debugger": "error",
      "no-alert": "warn",
      "no-var": "error",
      "prefer-const": "error",
      
      // React-specific security  
      "react/no-danger": "warn", // Allow for theme script with warning
      "react/no-danger-with-children": "error",
      "react/jsx-no-script-url": "error",
      "react/jsx-no-target-blank": "error",
      
      // Next.js specific
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error", // We already fixed this
      
      // Accessibility
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
    },
  },
];

export default eslintConfig;
