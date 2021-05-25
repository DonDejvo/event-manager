# event-manager.js
A small plugin to manage your events efficiently!

----------

**Quick guide**

This library uses a DOM wrapper, which means that you need to call the wrapping function (*_$*) before using any of the provided features:
``` js
let elem = document.querySelector(someElement);
let wrap = _$(elem);
```
Now, let's use some methods on the returned object (*wrap*) to easily add and remove events.
First, we add a 'click' event using *.on()*:
``` js
// define a function
function hi() {
  console.log('Hi!';
}
// add a click event to the element
wrap.on('click', hi);
```
You can also add multiple functions at once by putting them into an array:
``` js
// define some functions
function hi() {
  console.log('Hi!';
}
function bye() {
  console.log('Bye!');
}
// add a click event to the element
wrap.on('click', [hi, bye]);
```
Or lets add those funtions to multiple listeners (again, in an array):
``` js
// define some functions
function hi() {
  console.log('Hi!';
}
function bye() {
  console.log('Bye!');
}
// add a multiple events to the element
wrap.on(['click', 'mousemove'], [hi, bye]);
```
Now, we can also get rid of them, using *.off()*:
``` js
// remove certain events
wrap.off('click', hi);
```
Just like with *.on()*, you can remove multiple functions at once using an array, same applies for listeners.

Now, *.off()* provides some special features for a quick removal of elements. If you leave one of the 2 parameters empty, then all parameters of the other type get removed. Example:
``` js
// remove all 'click' events
wrap.off('click');
```
or 
``` js
// remove all 'hi' functions
wrap.off(null, hi);
```
You can also acces all events and their functions using *.events*:
``` js
// get all events of a wrapped element
console.log(wrap.events); // returns an object
// ...or get certain event types
console.log(wrap.events.click) // returns an array of all applied functions
```


Last, this library uses an element wrapper, and you can use it too, because why not ;-).

Just define some custom functions you want to add to the wrapper, and refer to the actal html element by calling *this.element*:
``` js
// example function
function id() {
  // this.element refers to the html element
  alert(this.element.id)
}
DOMWrapper.define(id);
wrap.id(); // alerts the id of the element, if it has one
```


Thats all, have fun! ;D
