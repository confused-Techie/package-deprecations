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

## js/no-require-scrollView

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data)

Requiring `ScrollView` from `atom` is no longer supported.
Please require `ScrollView` from `atom-space-pen-view` instead: `{ScrollView} = require 'atom-space-pen-views'`.
Note that the API has changed slightly!
Please read the docs at https://github.com/atom/atom-space-pen-views.
Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

## js/no-require-selectListView

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data)

Requiring `SelectListView` from `atom` is no longer supported.
Please require `SelectListView` from `atom-space-pen-view` instead: `{SelectListView} = require 'atom-space-pen-views'`.
Note that the API has changed slightly!
Please read the docs at https://github.com/atom/atom-space-pen-views.
Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

## js/no-require-textEditorView

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data)

Requiring `TextEditorView` from `atom` is no longer supported.
Please require `TextEditorView` from `atom-space-pen-view` instead: `{TextEditorView} = require 'atom-space-pen-views'`.
Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

## js/no-atom.services

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data), [`atom/atom@v1.0.0`](https://github.com/atom/atom/blob/v1.0.0/src/atom.coffee#L46)

`atom.services` is no longer available.
To register service providers and consumers, use the `providedServices` and `consumedServices` fields in your package's `package.json`.

## js/no-atom.workspaceView

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data), [`atom/atom@v1.0.0`](https://github.com/atom/atom/blob/v1.0.0/src/atom.coffee#L38)

`atom.workspaceView` is no longer available.
In most cases you will not need the view. See the Workspace docs for alternatives: https://atom.io/docs/api/latest/Workspace.
If you do need the view please use `atom.views.getView(atom.workspace)`, which returns an HTMLElement.

## js/no-atom.syntax

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data), [`atom/atom@v1.0.0`](https://github.com/atom/atom/blob/v1.0.0/src/atom.coffee#L279)

The `atom.syntax` global is deprecated. Use `atom.grammars` instead.

## js/no-atom.registerRepresentationClass

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`atom/atom@v1.0.0`](https://github.com/atom/atom/blob/v1.0.0/src/atom.coffee#L864)

`atom.registerRepresentationClass` is no longer available.
Callers should be converted to use `atom.deserializers`.

## js/no-atom.registerRepresentationClasses

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`atom/atom@v1.0.0`](https://github.com/atom/atom/blob/v1.0.0/src/atom.coffee#L868)

`atom.registerRepresentationClasses` is no longer available.
Callers should be converted to use `atom.deserializers`.

## js/no-atom.workspace.openSync-changeFocus

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data), [`atom/atom@v1.0.0`](https://github.com/atom/atom/blob/v1.0.0/src/workspace.coffee#L405)

In `atom.workspace.openSync()` options:
The `changeFocus` option has been renamed to `activatePane`.

## js/no-atom.workspace.openURIInPane-changeFocus

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data), [`atom/atom@v1.0.0`](https://github.com/atom/atom/blob/v1.0.0/src/workspace.coffee#L426)

In `atom.workspace.openURIInPane()` options:
The `changeFocus` option has been renamed to `activatePane`.

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
