# Package Deprecations

The goal of this repository is to provide the tooling required to quickly scan a Pulsar Community Package,
and determine if it contains any deprecations, and the severity of them.

These deprecations vary in nature and source, so we will need to ensure the tooling we use is flexible enough to do so.

<details>
  <summary>Details of the original implementation</summary>

Originally this repository had implemented this functionality following a codemod style.
With the basis of the behavior based on [`jscodeshift`](https://www.npmjs.com/package/jscodeshift),
with tooling like `dirshift` and `jsonshift` being created to extend this behavior to other filetypes.

But it quickly became apparent that codemods were not the right tool for this task.
Since while these tools are flexible and provide great insight into a codebase, their aim
was obviously to resolve issues in code. Not just find them.

So to that extent we had to rethink this work, to prioritize identifying issues, rather than fixing them.

If you'd like to view the original implementation details, those have been moved to the `codemod-style` dir.
</details>


To approach this issue in a flexible way in this repository, our main tool is [`eslint`](https://eslint.org/) as it provides a consistent way to view the inner details of a codebase.

Extending this we will use different parsers and plugins to be able to handle the details and filetypes we need to.

Although, considering the variety of languages a package may be written in within the Pulsar ecosystem, we need several tools to accomplish this.

## Languages

### JavaScript

The de facto methodology of inserting logic into a Pulsar community package in the recent years, is our primary target for identifying deprecations.
As this language is supported natively, we don't need to do anything extra here, except add our custom rules.

### JSON

As the JSON file format is what's used in every package's `package.json` file as well as some other configuration files, it requires fantastic support in order to catch deprecations.
For this we use `jsonc-eslint-parser` and `eslint-plugin-jsonc` in order to support finding any issues within the code.

## Methodology

In order to support the required functionality, we use a custom setup of eslint that's loaded only with our custom ruleset in order to find issues within a community package.

Each different language we need to check gets it's own eslint plugin, these are stored in the respective directories:

* `js`
* `json`

Each plugin then has as many rules as needed for our purposes within it, that's able to work with the language directory it resides in.

## Testing

To test every single rule, we have extended the eslint rule format slightly.
We add a `test` key to each rule, which within we expect to find `valid` and `invalid` entries, which match those of the same name for the eslint RuleTester module. Which allows us to use eslint tooling for testing, without needing to write much code.

## Support

But keep in mind this project is still a work in progress.
Below we will outline the type of support needed vs. what we have.

* [X] Native JavaScript
* [X] JSON
* [ ] CoffeeScript
* [ ] Directory Structure
* [ ] CSS
* [ ] Less
* [ ] JSX

### Deprecations

Considering Atom/Pulsar's long history, it's no surprise there have been many changes over time.
Considering this, it's the goal of `package-deprecations` to have the ability to identify any deprecation within a package originating from the first version of Atom.

Considering Atom's API was only ever considered stable when `v1.0.0` was released, and there was a large effort at that time to get as many package's as possible compliant, it only makes sense to start there for our deprecations.

This is where the majority of deprecations listed in `rules-todo-v1-0-0.md` come from, being those taken from the data dumps made by the Atom team at the time to identify out of support packages.

From there, we hope to then bring all the modern rules possible in, getting all current deprecations into this repository.

The last step then would be to identify any deprecations that have existed between modern day and version one, and add those as well.
