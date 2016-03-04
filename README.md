# knockout-init
Module for initializing knockout observables.

# Usage
```html
<div data-bind="init: { key: foo, value: 'bar' }"></div>
```

```js
var foo = ko.observable(null);
foo.subscribe(function (val) {
  // val === "bar" --> true
});
```

# Installation

This is how I use it with a Webpack bundled project. Your setup may be different.

```sh
$ npm install knockout-init --save-dev
```

```js
import ko from "knockout";
import init from "knockout-init";

ko.bindingHandlers.init = init(ko);
```
