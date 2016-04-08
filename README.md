# Levi [![Circle CI](https://circleci.com/gh/mboperator/redux-modules/tree/master.svg?style=svg)](https://circleci.com/gh/mboperator/levi/tree/master)

An opinionated framework for the rapid development of complex web applications.

# CLI

## Development

#### Start a new project
- `levi g project AwesomeSPA`

#### Start Dev Server
- `levi dev`

#### Build
- `levi build`

## Generators
### Route
- `levi g route Feed`
```
modified src/routes/index.js
created src/routes/Feed/index.js
created src/routes/Feed/handler.jsx
created src/routes/Feed/__tests__/handler-test.js
```

### Layout
- `levi g layout DopeWidget`
```
created src/_shared/layouts/DopeWidget/index.js
created src/_shared/layouts/DopeWidget/DopeWidget.jsx
created src/_shared/layouts/DopeWidget/__tests__/DopeWidget-test.js
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
- `levi g module DopeModule`
```
modified src/_shared/modules/index.js
created src/_shared/modules/DopeModule/index.js
created src/_shared/modules/DopeModule/module.js
created src/_shared/modules/DopeModule/selector.js
created src/_shared/modules/DopeModule/dispatch.js
created src/_shared/modules/DopeModule/Interface.js
created src/_shared/modules/DopeModule/__tests__/module-test.js
created src/_shared/modules/DopeModule/__tests__/Interface-test.js
```
