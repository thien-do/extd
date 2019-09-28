const error = 2;

module.exports = {
  rules: {
    "body-leading-blank": [error, "always"],
    "footer-leading-blank": [error, "always"],
    "header-max-length": [error, "always", 72],
    "scope-empty": [error, "never"],
    "scope-enum": [error, "always", ["build", "core"]],
    "subject-case": [error, "always", "lower-case"],
    "subject-empty": [error, "never"],
    "subject-full-stop": [error, "never", "."],
    "type-empty": [error, "never"],
    "type-enum": [error, "always", ["refactor", "docs", "feat", "fix", "test"]]
  }
};
