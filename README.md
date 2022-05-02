# Overnice DatoCMS types

This repo serves one purpose: to always contain, at `index.d.ts`, an up to date file with typings for all of our DatoCMS models.

## Usage

Install this package with `yarn add -D overnice/datocms-types`, then add its location to the `typeRoots` config in your `tsconfig.json` file, as such:

```json
{
  "compilerOptions": {
    "otherOptions": "xxx",
    "typeRoots": ["node_modules/@types", "node_modules/@overnice/datocms-types"]
  }
}
```

Now you should be able to require typings directly from this package, as such:

```jsx
import { ButtonRecord } from '@overnice/datocms-types'
```

> **NOTE**: The installation command is `overnice/datocms-types` without an `@` on purpose, as this package is intended to be installed directly from github. When requiring it internally however, use `@overnice/datocms-types` as this is the npm package name.

## Updating

Every time there's a change in any of the DatoCMS models, a webhook will trigger this app and update the `index.d.ts` file if necessary.

The script is a probot GitHub app, found inside the `webhook.js` file. To start the app, run `yarn start` from the root. Grab a copy of the `.env` file from a teammate, and make sure you have access to the app in [glitch.com](https://glitch.com). The app is set up in such a way that DatoCMS pings the app (via a webhook) when there is a change to any of the models (create, update or delete actions), the app generates types from DatoCMS' GraphQL API, compares the result to the existing types, and if they are different, commits them to the `index.d.ts` file.

The initial author was Jeff Escalante, here's the [reference repo](https://github.com/hashicorp/dato-types).
