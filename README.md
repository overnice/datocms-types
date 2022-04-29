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

Each time DatoCMS changes are made, a script will trigger to cause this repo to update its types. If you made a change in DatoCMS and would like for it to be reflected in your local project, just run `yarn` again and it will update to the latest version. The key here is that the installation references the github repo, so its not an npm module nor does it use semver.

The update script is a probot GitHub app, found inside the `webhook.js` file. To start the app, run `yarn start` from the root. Grab a copy of the `.env` file from a teammate, and make sure you have access to the app in Heroku. It's set up such that dato pings the app when there is a new publish event, the app generates types from dato, compares to existing types, and if they are different, commits them to the `index.d.ts` file.

The initial author was Jeff Escalante, here's the [reference repo](https://github.com/hashicorp/dato-types).
