# node-typescript-eslint-template

![build status](https://github.com/naviocean/node-typescript-eslint-template/workflows/build/badge.svg)
![last commit](https://img.shields.io/github/last-commit/naviocean/node-typescript-eslint-template)
![license UNLICENSE](https://img.shields.io/github/license/naviocean/node-typescript-eslint-template?color=brightgreen)

This repository is based on [node-typescript-eslint-template](https://github.com/nihalgonsalves/node-typescript-eslint-template.git)

TypeScript template repository with typescript-eslint (airbnb config) and ts-node-dev.

Dependabot keeps the dependencies up to date.

-   **Build tool**: yarn (can be replaced with npm: `rm yarn.lock && npm install`)
-   **Target Node version**: 14.x (es2020)
-   **Structure**: `src/` for TypeScript source files and `build/` for output
-   Also includes a default `.editorconfig` with 2-space indents

Scripts:

-   `yarn dev` run from source, auto-restarting
-   `yarn lint` run eslint
-   `yarn lint --fix` run eslint with auto-formatting
-   `yarn build` build to JS
-   `yarn start` run built JS
-   `yarn test` currently does nothing
