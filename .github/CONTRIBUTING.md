# Contributing

**Table of contents**

- [Codebase overview](#codebase-overview)

## Codebase overview

- Extd is a monorepo powered by Yarn's workspaces. Under `/packages`:
  - `core`: Styling kit and core components, bundled with Webpack ([config](https://github.com/dvkndn/extd/blob/master/packages/core/webpack.config.js)):
    - `yarn start` to develop (start the `docs` package to preview).
    - `yarn build` to generate production build (targeting [UMD]).
  - `docs`: The website at [ext.design](https://ext.design), mostly for documentation, bundled with Parcel:
    - `yarn start` to develop (with `core` package [linked](https://yarnpkg.com/lang/en/docs/workspaces/#toc-why-would-you-want-to-do-this)).
- Source code from all packages is written in TypeScript.
- Upon commit:
  - Changed code is checked by ESLint ([config](https://github.com/dvkndn/extd/blob/master/.eslintrc.js) – for all packages).
  - Commit message is checked by Commitlint ([config](https://github.com/dvkndn/extd/blob/master/commitlint.config.js)).

Most design principles of this codebase come from (and be added to) the [festival](http://github.com/axieinfinity/festival/) project.