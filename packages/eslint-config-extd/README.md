This is the [shared config](https://eslint.org/docs/developer-guide/shareable-configs) for extd's packages.

**Note:**
- The used plugins are defined as dependencies (instead of peerDependencies as the official recommendation) to simplify the workspace. This is _not_ supported by ESLint, but it does work thank to Yarn's workspace.
  - Hopefully it will be supported by ESLint: https://github.com/eslint/rfcs/pull/9
  - See also: https://github.com/eslint/eslint/issues/3458
