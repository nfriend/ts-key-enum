# ts-key-enum
A TypeScript string enum for compile-time safety when working with `event.key`.

<img align="right" src="https://raw.githubusercontent.com/nfriend/ts-key-enum/master/logo.jpg" />

## Install

```bash
npm install ts-key-enum --save
```

## Purpose

Tired of referencing JavaScript keys with a string?

```JavaScript
onKeyPress = (ev) => {

    // whoops, spelled "Enter" wrong!
    if (ev.key === 'ENter') {
        ...
    }
}
```

Me too.  With this module, you can do this instead (in a TypeScript file):

```JavaScript
onKeyPress = (ev) => {

    // much better
    if (ev.key === Key.Enter) {
        ...
    }
}
```

## Background

This is similar to the [ts-keycode-enum](https://github.com/nfriend/ts-keycode-enum) module, but it provides an enum with string values that correspond with the [`event.key` values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) instead of number values that correspond to the deprecated [`event.which`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/which) and [`event.keyCode`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) values.

## Usage

To use this module, import the `Key` enum at the top of your TypeScript file:

```JavaScript
import { Key } from 'ts-key-enum';
```

You can now use the enum value in place of key strings throughout the file:

```JavaScript
// if (ev.key === 'Escape') { ... }
if (ev.key === Key.Escape) { ... }
```

See [Key.enum.ts](./Key.enum.ts) for a complete list of available keys.

In addition, to aid with readability, a number of enum values have aliases.  For example:

```JavaScript
// this is true - these values are equal
Key.Hash === Key.Pound
```

Use whichever value makes more sense for readability.

## Building

To build this module yourself, first install its dependencies using

```bash
npm install
```

Then, run the build using

```bash
npm run build
```

Build output is placed in the `dist` directory.

## Contributions

This module only contains some of the most commonly-used key string values.  There are many more, as you can see by taking a look at [this complete list](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). If this module is missing enum values that you need, feel free to request the additions via an issue or a pull request.

## License

MIT