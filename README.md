# Trivia app

## Running

- `yarn start` to run the dev server
- `yarn test:e2e` for end to end tests with cypress
- `yarn test` for unit tests
- `yarn build` for building

## Folder structure

### `app` folder

the app folder is for everything bootstraping, like routing and store assembling, top level hooks etc...

- `app/pages`

  This folder contains top level pages that are non feature specific. Think generic 404 pages, privacy policy page etc...

- `app/utils`  
   All custom utils and helpers.

### `features` folder

This folder contains the bulk of the app grouped into features.  
Every feature folder contains all code related, it's data or external services, store, feature specific components, test files and all pages related to that feature.

### `components` folder

Globaly shared components grouped with atomic design conventions.

### `infrastructure`

Stuff not specific to the app logic goes here, dev related things, mocks and related services etc...
