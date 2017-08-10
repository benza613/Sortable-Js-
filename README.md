# Sortable

##FORKED FROM https://github.com/RubaXa/Sortable.
Sortable is a <s>minimalist</s> JavaScript library for reorderable drag-and-drop lists.

Demo: http://rubaxa.github.io/Sortable/


## Features

 * Supports touch devices and [modern](http://caniuse.com/#search=drag) browsers (including IE9)
 * Can drag from one list to another or within the same list
 * CSS animation when moving items
 * Supports drag handles *and selectable text* (better than voidberg's html5sortable)
 * Smart auto-scrolling
 * Built using native HTML5 drag and drop API
 * Supports
  * [Meteor](https://github.com/SortableJS/meteor-sortablejs)
  * AngularJS
    * [2.0+](https://github.com/SortableJS/angular-sortablejs)
    * [1.*](https://github.com/SortableJS/angular-legacy-sortablejs)
  * React
    * [ES2015+](https://github.com/SortableJS/react-sortablejs)
    * [Mixin](https://github.com/SortableJS/react-mixin-sortablejs)
  * [Knockout](https://github.com/SortableJS/knockout-sortablejs)
  * [Polymer](https://github.com/SortableJS/polymer-sortablejs)
  * [Vue](https://github.com/SortableJS/Vue.Draggable)
 * Supports any CSS library, e.g. [Bootstrap](#bs)
 * Simple API
 * [CDN](#cdn)
 * No jQuery (but there is [support](#jq))


<br/>


### Articles

 * [Sortable v1.0 — New capabilities](https://github.com/RubaXa/Sortable/wiki/Sortable-v1.0-—-New-capabilities/) (December 22, 2014)
 * [Sorting with the help of HTML5 Drag'n'Drop API](https://github.com/RubaXa/Sortable/wiki/Sorting-with-the-help-of-HTML5-Drag'n'Drop-API/) (December 23, 2013)


<br/>

### Install

Via npm

```bash
$ npm install sortablejs --save
```

Via bower:

```bash
$ bower install --save sortablejs
```

<br/>

### Usage
```html
<ul id="items">
	<li>item 1</li>
	<li>item 2</li>
	<li>item 3</li>
</ul>
```

```js
var el = document.getElementById('items');
var sortable = Sortable.create(el);
```

You can use any element for the list and its elements, not just `ul`/`li`. Here is an [example with `div`s](http://jsbin.com/qumuwe/edit?html,js,output).


---



## MIT LICENSE
Copyright 2013-2017 Lebedev Konstantin <ibnRubaXa@gmail.com>
http://rubaxa.github.io/Sortable/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

