# dusk-react [![npm version](https://badge.fury.io/js/dusk-react.svg)](https://badge.fury.io/js/dusk-react)

React components for Dusk icons.

## Install

```bash
# npm
$ npm install dusk-react

# yarn
$ yarn add dusk-react
```

## Usage

Import using object destructuring:

```js
import { Safari } from 'dusk-react';

const Component = () => (
  <Safari />
);
```

Import an icon directly:

```js
import Safari from 'dusk-react/dist/icons/safari';

const Component = () => (
  <Safari />
);
```

Import all of the icons:

```js
import * dusk from 'dusk-react';

const Component = () => (
  <dusk.Safari />
);
```

### Props

#### size(`number`)

The size, in pixels, of the icon. Applies to both the width and the height.

#### bg(`string`)

Background color of the icon.

#### fg(`string`)

Foreground color of the icon.

#### fg2(`string`)

Secondary foreground color of the icon, if applicable.

## Example

```js
import { Safari } from 'dusk-react';

const Component = () => (
  <Safari
    size={300}
    bg="blue"
    fg="#FFEFD5"
  />
);
```

## Note

The `1Password` icon is exported as `Password`, because Javascript variable names cannot begin with a number.

## Related

- [Dusk](https://github.com/pacocoursey/dusk): simple, customizable macOS application icons
