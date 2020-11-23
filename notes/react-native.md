---
date: 2020-08-25
tags:
  - dev/react
---

# React-Native

A [[js]] framework for making native apps.

## [Component module](https://www.freecodecamp.org/news/how-to-publish-a-react-native-component-to-npm-its-easier-than-you-think-51f6ae1ef850/#:~:text=Initial%20Setup&text=Once%20inside%20the%20folder%2C%20we,%2C%20description%2C%20keywords%2C%20etc.)
```
mkdir my-component && cd my-component
yarn init // or npm init
yarn add ... //add dependencies
```

Export components from `index.js`

```
import Component from './src/Component'

export { Component }
```

Ignore files:
```
### .gitignore
# Logs
*.log
npm-debug.log

# Runtime data
tmp
build
dist

# Dependency directory
node_modules

### .npmignore
# Logs
*.log
npm-debug.log

# Dependency directory
node_modules

# Runtime data
tmp

# Examples (If applicable to your project)
examples
```
Finally, `yarn publish`
