# Package Deprecations

## WARNING: WIP

This repository is ongoing large scale changes and is in a state of slight chaos.
While originally this repositories goals were going to be achieved via `jscodeshift` and a slew of tools designed in a similar manner,
it soon became obvious that this wasn't the right tool for the job.

Instead the approach is shifting to a more linting like one. Using `eslint` to power the main cycle of work,
scanning code with plugins and parsers, and all custom rules to catch the issues we care about, and report them.

As this repository is much more concerned with just knowing and reporting errors, it makes much more sense to do so like this, rather than handicap larger tools meant to automatically fix them.

In this way we can scan a community package, and get back issues with that repo that require fixing. So we are aware of issues, and can even assign severity and documentation to them. Ideally allowing anyone's usage of such a tool.

---

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
