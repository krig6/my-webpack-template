import globals from "globals";

export default [
  {
    languageOptions: { globals: globals.browser },
    settings: {
      "import/resolver": {
        webpack: {
          config: "webpack.dev.js",
        },
      },
    },
    rules: {
      "object-curly-newline": [
        "error",
        {
          "ImportDeclaration": { "multiline": true, "minProperties": 2 }
        }
      ],
      "no-restricted-imports": ["error", "underscore"],
      "eqeqeq": "error",
      "no-console": "off",
      "consistent-return": "error",
      "no-unused-vars": "off",
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "import", "next": "*" }
      ]
    },
  },
];
