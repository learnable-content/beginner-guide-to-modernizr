![](headings/3.4.png)

# Modernizr.mq

`Modernizr.mq` allows you to test certain media queries supported, but most media queries are very dependent on the current browser state. For certain feature tests of Modernizr, internally we actually use `Modernizr.mq` for the touch and 3D transform feature test, but those two media queries aren't dependent in the viewport state. That is why we're using in touch and 3D transform tests. For media queries relying on the browser width, orientation or other dynamic factors, then you need something like `Modernizr.mq` to run in the context of your code at certain points.

# Demo

```js
$('#mq').on('click', function() {
  
  isSupported(Modernizr.mq('(orientation:portrait)'), this);
  
});

// Utility method to change button class
function isSupported(condition, btn) {
  if(condition) {
    $(btn)
      .attr('class', '')
      .addClass('Button');
  } else {
    $(btn)
      .attr('class', '')
      .addClass('Button Button--wrong');
  }
}
```

I'm using jQuery here to simplify the code. First, I attach a click event to the element with the `mq` id, which is the button. This function then calls `console.log` to output the results of `Modernizr.mq` so we can see how the current state of the report can affect the results.

Test it out!