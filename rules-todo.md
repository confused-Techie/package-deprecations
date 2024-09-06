# Rules - TODO

This document contains deprecations rules that have yet to be implemented.

## v1.0.0 - Data from benogle/deprecation-data
> This collection of deprecations is taken directly from the `deprecations-raw.csv` grabbing all unique deprecations listed

* `ContextMenuManager::add` has changed to take a single object as its argument. Please see https://atom.io/docs/api/latest/ContextMenuManager#context-menu-cson-format for more info.

* Accessing `PaneView` via `$::view()` is deprecated. Use the raw DOM node or underlying model object instead.

* Are you trying to listen for the 'core:cancel' Atom command with `jQuery::on`? `jQuery::trigger` can no longer be used to listen for Atom commands. Please use `atom.commands.add` instead. See the docs at https://atom.io/docs/api/latest/CommandRegistry#instance-add for details.

* Are you trying to listen for the 'core:cancel core:close' Atom command with `jQuery::on`? `jQuery::trigger` can no longer be used to listen for Atom commands. Please use `atom.commands.add` instead. See the docs at https://atom.io/docs/api/latest/CommandRegistry#instance-add for details.

* Are you trying to listen for the 'core:confirm' Atom command with `jQuery::on`? `jQuery::trigger` can no longer be used to listen for Atom commands. Please use `atom.commands.add` instead. See the docs at https://atom.io/docs/api/latest/CommandRegistry#instance-add for details.

* Are you trying to listen for the 'drag:end' Atom command with `jQuery::on`? `jQuery::trigger` can no longer be used to listen for Atom commands. Please use `atom.commands.add` instead. See the docs at https://atom.io/docs/api/latest/CommandRegistry#instance-add for details.

* Are you trying to listen for the 'view-tail-large-files:up' Atom command with `jQuery::on`? `jQuery::trigger` can no longer be used to listen for Atom commands. Please use `atom.commands.add` instead. See the docs at https://atom.io/docs/api/latest/CommandRegistry#instance-add for details.

> atom.services is no longer available. To register service providers and consumers, use the `providedServices` and `consumedServices` fields in your package's package.json.

> atom.workspaceView is no longer available. In most cases you will not need the view. See the Workspace docs for alternatives: https://atom.io/docs/api/latest/Workspace. If you do need the view, please use `atom.views.getView(atom.workspace)`, which returns an HTMLElement.

* Call .dispose() on the Disposable returned from ::addOpener instead

* Call ::getActiveTextEditor instead

* Call GrammarRegistry::onDidAddGrammar instead

* Call KeymapManager::onDidMatchBinding instead

* Call Workspace::addOpener instead

* Config::getInt is no longer necessary. Use ::get instead. Make sure the config option you are accessing has specified an `integer` schema. See the schema section of https://atom.io/docs/api/latest/Config for more info.

* Config::getPositiveInt is no longer necessary. Use ::get instead. Make sure the config option you are accessing has specified an `integer` schema with `minimum: 1`. See the schema section of https://atom.io/docs/api/latest/Config for more info.

* Config::observe no longer takes a `callNow` option. Use ::onDidChange instead. Note that ::onDidChange passes its callback different arguments. See https://atom.io/docs/api/latest/Config

> Config::unobserve no longer does anything. Call `.dispose()` on the object returned by Config::observe instead.

* Decorations of `type: 'gutter'` have been renamed to `type: 'line-number'`.

* If you would like your pane item with class `AskStackResultView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `AskStackResultView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `AtomUngitView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `AtomUngitView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `CompareFilesView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `CompareFilesView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `CoreView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `CoreView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `CucumberRunnerView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `CucumberRunnerView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `DependencyView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `DependencyView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `EmpTmpManagementView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `EmpTmpManagementView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `ErrorsView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `ErrorsView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `GitLogView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `GitLogView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `HTMLEditor` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `HTMLEditor` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `Page` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `Page` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `PepperHtmlPreviewView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `PepperHtmlPreviewView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `PostWindow` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `PostWindow` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `RecentProjectsView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `RecentProjectsView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `RSpecView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `RSpecView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `Viewer` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `Viewer` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `WebBrowserPreviewView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `WebBrowserPreviewView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* If you would like your pane item with class `WebEditorView` to support modified behavior, please implement a `::onDidChangeModified()` method. If not, ignore this message. `::on` methods for items are no longer supported.

* If you would like your pane item with class `WebEditorView` to support title change behavior, please implement a `::onDidChangeTitle()` method. `::on` methods for items are no longer supported. If not, ignore this message.

* Marker::on is deprecated. Use documented event subscription methods instead.

* Open-ended transactions are deprecated. Use checkpoints instead.

* Pane item with class `AtomUngitView` should implement `::getURI` instead of `::getUri`.

* Pane item with class `CoreView` should implement `::getURI` instead of `::getUri`.

* Pane item with class `CucumberRunnerView` should implement `::getURI` instead of `::getUri`.

* Pane item with class `ErrorsView` should implement `::getURI` instead of `::getUri`.

* Pane item with class `PepperHtmlPreviewView` should implement `::getURI` instead of `::getUri`.

* Pane item with class `GitLogView` should implement `::getURI` instead of `::getUri`.

* Pane item with class `RecentProjectsView` should implement `::getURI` instead of `::getUri`.

* Passing a scope descriptor as the first argument to Config::get is deprecated. Pass a `scope` in an options hash as the final argument instead.

* Please remove from your code. ::redraw no longer does anything

* Please require `GitRepository` instead of `Git`: `{GitRepository} = require 'atom'`

* Please require `react-atom-fork` instead: `React = require 'react-atom-fork'`. Add `"react-atom-fork": "^0.11"` to your package dependencies.

* Please require `reactionary-atom-fork` instead: `Reactionary = require 'reactionary-atom-fork'`. Add `"reactionary-atom-fork": "^0.9"` to your package dependencies.

* Please use Workspace::addBottomPanel() instead

* Please use Workspace::addRightPanel() instead

* Please use Workspace::addTopPanel() instead

* Project::on is deprecated. Use documented event subscription methods instead.

> Requiring `$$$` from `atom` is no longer supported. Please require `atom-space-pen-views` instead: `{$$$} = require 'atom-space-pen-views'` Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

> Requiring `$$` from `atom` is no longer supported. Please require `atom-space-pen-views` instead: `{$$} = require 'atom-space-pen-views'` Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

> Requiring `$` from `atom` is no longer supported. If you are using `space-pen`, please require `$` from `atom-space-pen-views`. Otherwise require `jquery` instead: `{$} = require 'atom-space-pen-views'` or `$ = require 'jquery'` Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies. Or add `"jquery": "^2"` to your package dependencies.

> Requiring `EditorView` from `atom` is no longer supported. Please require `TextEditorView` from `atom-space-pen-view` instead: `{TextEditorView} = require 'atom-space-pen-views'` Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

> Requiring `ScrollView` from `atom` is no longer supported. Please require `ScrollView` from `atom-space-pen-view` instead: `{ScrollView} = require 'atom-space-pen-views'` Note that the API has changed slightly! Please read the docs at https://github.com/atom/atom-space-pen-views Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

> Requiring `SelectListView` from `atom` is no longer supported. Please require `SelectListView` from `atom-space-pen-view` instead: `{SelectListView} = require 'atom-space-pen-views'` Note that the API has changed slightly! Please read the docs at https://github.com/atom/atom-space-pen-views Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

> Requiring `TextEditorView` from `atom` is no longer supported. Please require `TextEditorView` from `atom-space-pen-view` instead: `{TextEditorView} = require 'atom-space-pen-views'` Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

> Requiring `View` from `atom` is no longer supported. Please require `atom-space-pen-views` instead: `{View} = require 'atom-space-pen-views'` Add `"atom-space-pen-views": "^2.0.3"` to your package dependencies.

* Store package settings files in the `settings/` directory instead of `scoped-properties/`

* Store package style sheets in the `styles/` directory instead of `stylesheets/` in the `<BLANK>` package

* Subscribe to TextEditor events instead.

* Subscribing via ::on is deprecated. Use documented event subscription methods instead.

* TextBuffer::on is deprecated. Use event subscription methods instead.

* TextEditor::on is deprecated. Use documented event subscription methods instead.

* The `changeFocus` option has been renamed to `activatePane`

> The atom.syntax global is deprecated. Use atom.grammars instead.

* The atom.workspaceView.statusBar global is deprecated. The global was previously being assigned by the status-bar package, but Atom packages should never assign globals. In the future, this problem will be solved by an inter-package communication API available on `atom.services`. For now, you can get a reference to the `status-bar` element via `document.querySelector('status-bar')`.

* The context menu CSON format has changed. Please see https://atom.io/docs/api/latest/ContextMenuManager#context-menu-cson-format for more info.

* This is going away. Use atom.config.set("editor.fontSize", 12) instead

* This is going away. Use atom.config.set("editor.showIndentGuide", true|false) instead

* This is going away. Use atom.config.set("editor.showInvisibles", true|false) instead

* This is now a view method. Call TextEditorElement::getFirstVisibleScreenRow instead.

* This is now a view method. Call TextEditorElement::getLastVisibleScreenRow instead.

* This method is deprecated on the model layer. Use `TextEditorElement::pixelPositionForBufferPosition` instead

* This method is deprecated on the model layer. Use `TextEditorElement::pixelPositionForScreenPosition` instead

* Use ::addLeftTile({item, priority}) instead.

* Use ::addRightTile({item, priority}) instead.

* Use ::dispose to cancel subscriptions instead of ::off

* Use ::get(keyPath) instead

* Use ::getActivePane() instead of the ::activePane property

* Use ::getActivePaneItem() instead of the ::activePaneItem property

* Use ::getDirectories instead

* Use ::getOriginURL instead.

* Use ::getPaths instead

* Use ::getRepositories instead

* Use ::paneForURI instead.

* Use ::scopeDescriptorForBufferPosition instead. The return value has changed! It now returns a `ScopeDescriptor`

* Use ::setPaths instead

* Use ::unset instead.

* Use `::activateItemForURI` instead.

* Use `::getURI` instead

* Use `::itemForURI` instead.

* Use `::onDidActivateInitialPackages` instead.

* Use `::onDidChangeActiveThemes` instead.

* Use `activationCommands` instead of `activationEvents` in your package.json Commands should be grouped by selector as follows: ```json "activationCommands": { "atom-workspace": ["foo:bar", "foo:baz"], "atom-text-editor": ["foo:quux"] } ```

* Use `editor.getCursorScreenPosition().row` instead

* Use `Project::getDirectories()[0]?.resolve()` instead

* Use a config schema instead. See the configuration section of https://atom.io/docs/latest/hacking-atom-package-word-count and https://atom.io/docs/api/latest/Config for more details

* Use atom.config.getAll instead.

* Use atom.workspace.scan instead of atom.project.scan

* Use Atom::onDidBeep instead

* Use config.set('editor.showInvisibles', showInvisibles) instead

* Use Config::getAll instead

* Use Cursor::getScopeDescriptor() instead

* Use Cursor::onDidChangePosition instead

* Use Cursor::onDidDestroy instead

* Use Decoration::setProperties instead

* Use decorations instead: http://blog.atom.io/2014/07/24/decorations.html

* Use Directory::onDidChange instead

* Use editor.getLastCursor().getScopeDescriptor() instead

* Use editor.lineTextForBufferRow(row).length instead

* Use GitRepository::onDidChangeStatus instead

* Use GitRepository::onDidChangeStatuses instead

* Use Marker::onDidChange instead

* Use PackageManager::onDidActivateInitialPackages instead

* Use Pane::onDidAddItem instead

* Use Pane::onDidChangeActiveItem instead

* Use Pane::onDidDestroy instead

* Use Pane::onDidMoveItem instead

* Use Pane::onDidRemoveItem instead

* Use PaneView::destroyItem instead

* Use Project::onDidChangePaths instead

* Use Project::open instead

* Use Range::traverse instead

* Use Selection::onDidChangeRange instead. Call ::getScreenRange() yourself in your callback if you need the range.

* Use TextBuffer::onDidChange instead

* Use TextBuffer::onDidConflict instead

* Use TextBuffer::onDidDestroy instead

* Use TextBuffer::onDidReload instead.

* Use TextBuffer::onDidSave instead. A TextBuffer instance is no longer provided as a callback argument.

* Use TextBuffer::onDidStopChanging instead. If you need the modified status, call TextBuffer::isModified yourself in your callback.

* Use TextBuffer::onWillSave instead. A TextBuffer instance is no longer provided as a callback argument.

* Use TextEditor::getLastCursor() instead

* Use TextEditor::getLastSelection() instead

* Use TextEditor::getLastVisibleScreenRow instead. You can get the editor via editorView.getModel()

* Use TextEditor::lineTextForBufferRow(bufferRow) instead

* Use TextEditor::moveDown() instead

* Use TextEditor::moveLeft() instead

* Use TextEditor::moveRight() instead

* Use TextEditor::moveToBeginningOfLine() instead

* Use TextEditor::moveToBeginningOfWord() instead

* Use TextEditor::moveToEndOfLine() instead

* Use TextEditor::moveToFirstCharacterOfLine() instead

* Use TextEditor::moveToTop() instead

* Use TextEditor::moveUp() instead

* Use TextEditor::onDidChangeCursorPosition instead

* Use TextEditor::onDidChangeGrammar instead

* Use TextEditor::onDidChangeModified instead

* Use TextEditor::onDidChangePath instead

* Use TextEditor::onDidChangeScrollTop instead

* Use TextEditor::onDidChangeSelectionRange instead

* Use TextEditor::onDidChangeTitle instead

* Use TextEditor::onDidDestroy instead

* Use TextEditor::onDidStopChanging instead

* Use TextEditor::scrollToBufferPosition instead. You can get the editor via editorView.getModel()

* Use TextEditor::scrollToCursorPosition instead. You can get the editor via editorView.getModel()

* Use TextEditor::selectLinesContainingCursors instead

* Use TextEditor::selectWordsContainingCursors instead

* Use TextEditor::setPlaceholderText instead. eg. editorView.getModel().setPlaceholderText(text)

* Use TextEditor::setSoftWrapped instead

* Use TextEditor::setSoftWrapped instead. You can get the editor via editorView.getModel()

* Use TextEditorElement::getFirstVisibleScreenRow instead.

* Use TextEditorElement::pixelPositionForBufferPosition instead. You can get the editor via editorView.getModel()

* Use TextEditorElement::pixelPositionForScreenPosition instead. You can get the editor via editorView.getModel()

* Use TextEditorView::getPaneView() instead

* Use ThemeManager::onDidChangeActiveThemes instead

* Use version ^1.0.0 of the status-bar Service API.

* Use Workspace::addOpener instead

* Use Workspace::getActivePaneItem instead

* Use Workspace::getTextEditors instead

* Use Workspace::observeTextEditors instead

* Use Workspace::onDidAddTextEditor instead

* Use Workspace::onDidAddTextEditor or Workspace::observeTextEditors instead.

* Use Workspace::onDidChangeActivePaneItem instead

* Use WorkspaceView::eachPaneView instead

* Use WorkspaceView::getActivePaneView instead

* Use WorkspaceView::getPaneViews instead
