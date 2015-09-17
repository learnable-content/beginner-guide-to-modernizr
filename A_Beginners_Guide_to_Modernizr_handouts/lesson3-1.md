![](headings/3.1.png)

# Using Modernizr in JavaScript

So we've made a pass at the CSS features. Now let's explore how we can use Modernizr in your JavaScript. Like the CSS classes, Modernizr offers access to all the feature detects in your JavaScript. When the CSS class names aren't enough, the JavaScript access can be there to help in those scenarios.

When Modernizr is included in your page and you wish to use to use it in your JavaScript, you can access all the features via the Modernizr global that it is created.

Let's take a look at checking whether a feature is supported or not. I'm using jQuery to attach a click event to the button.

```js
$('#btn').on('click', function() {});
```

This is just to simplify the example. All it does is just prints out a message to the console:

```js
$('#btn').on('click', function() { alert(Modernizr.fullscreen); });
```