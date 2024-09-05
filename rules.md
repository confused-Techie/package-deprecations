# Rules

A breakdown of all rules within this repository.

## js/no-atom.config.unobserve

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `suggestion`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data)

Config::unobserve no longer does anything. Call `.dispose()` on the object returned by Config::observe instead.

## js/no-require-dollarSign

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data)

Requiring `$` from `atom` is no longer supported.
If you are using `space-pen`, please require `$` from `atom-space-pen-views`.
Otherwise require `jquery` instead: `{$} = require 'atom-space-pen-views'` or `$ = require 'jquery'`.
Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.
Or add `"jquery": "^2"` to your package dependencies.

## js/no-require-doubleDollarSign

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data)

Requiring `$$` from `atom` is no longer supported.
Please require `atom-space-pen-views` instead: `{$$} = require 'atom-space-pen-views'`.
Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

## js/no-require-tripleDollarSign

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data)

Requiring `$$$` from `atom` is no longer supported.
Please require `atom-space-pen-views` instead: `{$$$} = require 'atom-space-pen-views'`.
Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

## js/no-require-view

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data)

Requiring `View` from `atom` is no longer supported.
Please require `atom-space-pen-views` instead: `{View} = require 'atom-space-pen-views'`.
Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.


## js/no-require-editorView

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data)

Requiring `EditorView` from `atom` is no longer supported.
Please require `TextEditorView` from `atom-space-pen-view` instead: `{TextEditorView} = require 'atom-space-pen-views'`
.Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

## json/no-activationEvents

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data)

Use `activationCommands` instead of `activationEvents` in your package.json.
Commands should be grouped by selector as follows:

```json
"activationCommands": {
  "atom-workspace": ["foo:bar", "foo:baz"],
  "atom-text-editor": ["foox:quux"]
}
```
