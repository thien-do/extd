module.exports = {
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', ['root', 'core', 'docs']],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['build', 'chore', 'docs', 'feat', 'fix', 'test']]
  }
};