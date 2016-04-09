# Levi [![Circle CI](https://circleci.com/gh/mboperator/redux-modules/tree/master.svg?style=svg)](https://circleci.com/gh/mboperator/levi/tree/master)

An opinionated framework **easily** developing **dope** web applications.

## Stack(ed)
- View
  - react
  - react-router
  - grommet
- Data
  - immutable
  - redux
  - redux-saga
  - redux-modules
- Build
  - webpack 2
  - css-modules
  - babel 6
  - yeoman

# CLI Documentation

## Development

| Start a new project |`levi g project AwesomeSPA` |
|---------------------|----------------------------|
| Start dev server    |`levi dev`                  |
| Build Project       |`levi build`                |

## Generators

| Generator  | Command                      |
|------------|------------------------------|
| Route      |`levi g route Feed`           |
| Layout     |`levi g layout SplitPane`     |
| Component  |`levi g component CoolWidget` |
| Module     |`levi g module dopeModule`    |
| Scaffold   |`levi g scaffold Todos`       |

## Generator Output

### Route
- `levi g route Feed`
```
// automatically generates route at /feed/
modified src/routes/index.js
created src/routes/Feed/index.js
created src/routes/Feed/handler.jsx
created src/routes/Feed/__tests__/handler-test.js
```
- `levi g route Users :user_id Detail`
```
// automatically generates route at /users/:user_id/detail
modified src/routes/index.js
created src/routes/Users/routes/Detail/index.js
created src/routes/Users/routes/Detail/handler.jsx
created src/routes/Users/routes/Detail/__tests__/handler-test.js
```

### Layout
- `levi g layout SplitPane`
```
created src/_shared/layouts/SplitPane/index.js
created src/_shared/layouts/SplitPane/SplitPane.jsx
created src/_shared/layouts/SplitPane/__tests__/SplitPane-test.js
```

### Component
- `levi g component DopeWidget`
```
modified src/_shared/components/index.js
created src/_shared/components/DopeWidget/index.js
created src/_shared/components/DopeWidget/DopeWidget.jsx
created src/_shared/components/DopeWidget/__tests__/DopeWidget-test.js
```

### Module
- `levi g module dopeModule`
```
// automatically registers module with state under dopeModule key
modified src/_shared/modules/index.js
created src/_shared/modules/dopeModule/index.js
created src/_shared/modules/dopeModule/module.js
created src/_shared/modules/dopeModule/selector.js
created src/_shared/modules/dopeModule/dispatch.js
created src/_shared/modules/dopeModule/Interface.js
created src/_shared/modules/dopeModule/__tests__/module-test.js
created src/_shared/modules/dopeModule/__tests__/Interface-test.js
```
