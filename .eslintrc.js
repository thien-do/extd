module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./packages/*/tsconfig.json",
    "ecmaFeatures": { "jsx": true },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/no-require-imports": ["error"],
    "@typescript-eslint/quotes": ["error"],
    "@typescript-eslint/semi": ["error"],
    "eol-last": ["error", "always"],
    "indent": "off",
    "linebreak-style": ["error", "unix"],
    "quotes": "off",
    "semi": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
