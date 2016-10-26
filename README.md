# Spotnotes
> An example app with shared web, iOS, and Android logic

## Description
Data transformations and async are all completely shared. By sharing the data layer, frontend developers can focus more time on what matters - the frontend experience.

## Disclaimer
This project was hacked together fairly quickly and so there may be a few... rough edges. After all this I _do not_ recommend combining both clients in the same repository. I say this **not because of the code or file organization** but because of **dependencies**.

`react-native` is on a 2 week release cycle which means dependencies break. Often. Normally this isn't too bad to deal with, but involving the web client can lead to dependency hell when it comes to resolving `react` versions. This may be a none issue with `yarn`, I haven't tried yet.

## Buzzwords Used

### Core
- react
- react-native
- react-router

### UI Layer
- grommet
- native-base
- immutable

### Data Layer
- redux
- redux-saga
- redux-modules

### Build Tools
- webpack
- babel

## Project Structure
```
src/
  _shared/
    modules/
    sagas/
    services/
    utils/
  web/
    components/
    views/
    App.js
  mobile/
    components/
    views/
    App.js
    routes.js

```
