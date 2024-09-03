# Package Deprecations

The goal of this repository is to provide the tooling required to quickly scan a Pulsar community package, and alert of any deprecations it may have.

These deprecations vary in nature and source, so we need the tools flexible enough to do so.

This repository will use code scanning tools in order to inspect the source code of a package, and find any issues that may exist.

## Features Needed

* [X] Ability to scan JavaScript.
* [X] Ability to check directory structure.
* [ ] Ability to scan CoffeeScript.
* [X] Ability to scan JSON.
* [ ] Ability to scan CSS.
* [ ] Ability to check if a file has to be modified before any transformations. Such as JSX

## The How

We mainly use [`jscodeshift`](https://www.npmjs.com/package/jscodeshift) to get a view into the JavaScript code of the community package and inspect it.

We also use [`dirshift`](./dirshift) to inspect a directory structure of a package.

## Setup

Within `./transformers/` is different transformations that should be applied to a community package, their name should make it obvious what they intend to do or check for, but following their name is the type of transformation it is:

* `[name].jscode.[ext]`: Transformed using `jscodeshift`
* `[name].dir.[ext]`: Transformed using `dirshift`
* `[name].json.[ext]`: Transformed using `jsonshift`
* `[name].coffee.[ext]`: Transformed using `???`
* `[name].css.[ext]`: Transformed using `???`

## Usage

After getting a community package in a directory you'd like to check, just run:

```
npm run transform -- --paths=/path/to/package
```

The errors generated from the package will be logged to the console.
