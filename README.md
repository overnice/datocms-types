# Overnice DatoCMS types

This repo serves one purpose: to always contain, at `index.d.ts`, an up to date file with typings for all of our DatoCMS models and blocks-library.

## Usage

```bash
# Install this package with
yarn add -D overnice/datocms-types
```

> **NOTE**: The installation command is `overnice/datocms-types` without an `@` on purpose, as this package is intended to be installed directly from github. When requiring it internally however, use `@overnice/datocms-types` as this is the npm package name.

Add its location to the `typeRoots` config in your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "otherOptions": "xxx",
    "typeRoots": ["node_modules/@types", "node_modules/@overnice/datocms-types"]
  }
}
```

Now you should be able to require typings directly from this package, as such:

```ts
import { ButtonRecord } from '@overnice/datocms-types'
```

### Known issue with tsconfig and typeRoots

If you see a `cannot find type definition file for 'node_modules'` error in your `tsconfig` file:

```bash
# Install node types
yarn add -D @types/node
```

Add them to the `types` config in your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "otherOptions": "xxx",
    "typeRoots": [
      "node_modules/@types",
      "node_modules/@overnice/datocms-types"
    ],
    "types": ["node"]
  }
}
```

## How it works

Every time there's a change in any of the DatoCMS models/blocks-library, a webhook will trigger this app and update the `index.d.ts` file if necessary.

The script is a probot GitHub app, found inside the `webhook.js` file. To start the app, run `yarn start` from the root. Grab a copy of the `.env` file if you need to setup a new app but bare in mind that we already have one running in [glitch.com](https://glitch.com/edit/#!/overnice-bot). The app is set up in such a way that DatoCMS pings the app (via a webhook) when there is a change to any of the models/blocks-library (create, update or delete actions), the app then generates the types from DatoCMS' GraphQL API, compares the result to the existing types, and if they are different, commits them to the `index.d.ts` file.

[Jeff Escalante](https://github.com/jescalan) is the original author, this is a derivation of [this repo](https://github.com/hashicorp/dato-types).
