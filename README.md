Brief
=====
Add class "seen" to sections when they are visible in the viewport. 


Why?
====
Animate stuff when it's scrolled into.


Usage
=====
```html
<section data-siv=""></section>
```

"seen" is added when the top of the element has a distance of more than 30% (relative to viewport height) from the bottom of the viewport. Change the default value by adding a number into your data-attribute
```html
<section data-siv="55"></section>
```
