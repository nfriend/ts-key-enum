# ts-key-enum

A TypeScript string enum for compile-time safety when working with `event.key`.

<img align="right" src="https://raw.githubusercontent.com/nfriend/ts-key-enum/master/logo.jpg" />

## Install

```bash
npm install ts-key-enum --save
```

## Purpose

Tired of referencing keyboard keys with a string?

```JavaScript
onKeyPress = (ev) => {

    // whoops, it's actually ArrowLeft!
    if (ev.key === 'LeftArrow') {
        ...
    }
}
```

Me too. With this module, you can do this instead (in a TypeScript file):

```JavaScript
onKeyPress = (ev) => {

    // much better
    if (ev.key === Key.ArrowLeft) {
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

See [`Key.enum.ts`](./Key.enum.ts) for a complete list of available keys. This file is auto-generated from the list of keys found at MDN: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values.

## What's included

The `Key` enum contains values for all standard non-printable keys such as "CapsLock", "Backspace", and "AudioVolumeMute". The enum does _not_ contain values for printable keys such as "a", "A", "#", "é", or "¿", simply because the list of possible values is too vast to include in a single enum. To test for printable values, simply use a string comparison:

```JavaScript
if (ev.key === 'é') { ... }
```

## Building

To build this module yourself, first install its dependencies using

```bash
npm install
```

Next, run the scraper script ([`scrapeMDNForKeys.ts`](./scrapeMDNForKeys.ts)) using

```bash
npm run scrape
```

This will overwrite [`Key.enum.ts`](./Key.enum.ts) with the updated list of keys found in MDN.

Finally, run the build using

```bash
npm run build
```

Build output is placed in the `dist` directory.

## License

MIT
