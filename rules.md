# Rules

A breakdown of all rules within this repository.

## js/no-atom.config.unobserve

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `warn`
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

In the event of `atom.workspaceView.statusBar` being used, that'll instead produce the following error:
The `atom.workspaceView.statusBar` global is deprecated. The global was previously being
assigned by the status-bar package, but Atom packages should never assign globals.
In the future, this problem will be solved by an inter-package communication API available on `atom.services`.
For now, you can get a reference to the `status-bar` element via `document.querySelector('status-bar')`.

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

## js/rename-atom.workspace.-changeFocus

* _Breaking Pulsar/Atom API Version_: `v1.0.0`
* _Severity_: `problem`
* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data)

This rule technically encompasses three separate rules:

### atom.workspace.open({ changeFocus })

* _Source_: [`benogle/deprecation-data`](https://github.com/benogle/deprecation-data)

In `atom.workspace.open()` options:
The `changeFocus` option has been renamed to `activatePane`.

While this item isn't listed directly in the source as a deprecation message, at one time it was.
Since the package's marked for the depreciation via benogle's data, are those using
the plan `atom.workspace.open()` method call, rather than the more complex ones below.

### atom.workspace.openSync({ changeFocus })

* _Source_: [`atom/atom@v1.0.0`](https://github.com/atom/atom/blob/v1.0.0/src/workspace.coffee#L405)

In `atom.workspace.openSync()` options:
The `changeFocus` option has been renamed to `activatePane`.

### atom.workspace.openURIInPane({ changeFocus })

* _Source_: [`atom/atom@v1.0.0`](https://github.com/atom/atom/blob/v1.0.0/src/workspace.coffee#L426)

In `atom.workspace.openURIInPane()` options:
The `changeFocus` option has been renamed to `activatePane`.

## js/no-atom.showSaveDialogSync

* _Deprecated Pulsar/Atom API Version_: `v1.25.0`
* _Severity_: `warn`
* _Source_: [`atom/atom#16245`](https://github.com/atom/atom/pull/16245), [`pulsar-edit/pulsar #7f01a8e`](https://github.com/pulsar-edit/pulsar/commit/7f01a8e7185657eba461bcf559843062b8430e02)

`atom.showSaveDialogSync` is deprecated and will be removed soon.
Please, implement `::saveAs` and `::getSaveDialogOptions` instead for pane items or use `Pane::saveItemAs` for programmatic saving.

This API endpoint was deprecated by [`@50Wliu`](https://github.com/50Wliu) back in Nov 20, 2017.
It has remained a deprecated endpoint the entire time, with migration notes available in their PR replies, or further used in [`atom/markdown-preview#521`](https://github.com/atom/markdown-preview/pull/521).

## js/no-promise.done

* _Deprecated Pulsar/Atom API Version_: `v1.1.0`
* _Severity_: `warn`
* _Source_: [`atom/atom@v1.1.0`](https://github.com/atom/atom/blob/v1.1.0/src/atom.coffee#L846), [`atom/atom#8256`](https://github.com/atom/atom/pull/8256), [`atom/atom #fb341b0`](https://github.com/atom/atom/commit/fb341b094b335e1cd1bbea31048ff1869707385d)

Pulsar now uses ES6 Promises instead of Q.
Call `Promise.then()` instead of `Promise.done()`.

This API endpoint was deprecated by [`@nathansobo`](https://github.com/nathansobo) back in Sep 18, 2015.
It has remained deprecated since then, after removing the `Q` library, with the following commit notes for it's inclusion:

```
Base on our research, this is the only non-standard Q method people are
really calling. We didn’t check the really obscure stuff, but this
should cover the vast majority of issues.

Signed-off-by: Max Brunsfeld <maxbrunsfeld@gmail.com>
```

## js/no-dock.getActiveTextEditor

* _Deprecated Pulsar/Atom API Version_: `v1.19.0`
* _Severity_: `warn`
* _Source_: [`atom/atom#14695`](https://github.com/atom/atom/pull/14695), [`pulsar-edit/pulsar #f8ebd71`](https://github.com/pulsar-edit/pulsar/commit/f8ebd71200af4dcc5cf6fc2d85e68247833d9acc)

Text editors are not allowed in docks.
Use `atom.workspace.getActiveTextEditor()` instead.

This API endpoint was deprecated by [`@jsonrudolph`](https://github.com/atom/atom/commits?author=jasonrudolph) back in Jun 1, 2017.
It became deprecated when Atom decided to officially deprecate any text editors in Docks, allowing them only in the workspace pane.

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
