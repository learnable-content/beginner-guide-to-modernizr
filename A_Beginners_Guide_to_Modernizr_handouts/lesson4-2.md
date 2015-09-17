![](headings/4.2.png)

# Progressive Enhancement

One of the key points of progressive enhancement is having a functioning site without JavaScript. Modernizr can help with that.

You're probably asking, so how does a JavaScript library help when there is no JavaScript? That's a good question. You may notice in all our demos that the `html` element contains an initial class of `no-js`. When Modernizr runs, it replaces it with the `js` class. Essentially, it gives you a hook to know if JS is enabled or not.

# Disabling JavaScript

Another good question would be, who would disable JavaScript? It's less about actually disabling JavaScript and more about being able to function while your JavaScript is loading .A lot of websites will delay the loading of JavaScript to improve the page load performance. If the user wants to interact with something on the page, at that stage then the website would have to make sure when the user interacts it actually works.

Let's go through the scenario of having a search input that will return results, and works when JS is enabled or disabled.

# Demo

We use both the `js` and `no-js` classes for demonstration purposes:

```css
#js {
  background: green;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
}

.no-js #js {
  background: red;
}
```

If I search for something with JavaScript enabled, the results will appear as soon as I hit Enter, just below the search box. This is controlled by JavaScript completely. It will attach to the submit event of the form, and then hijack that and display results.

```js
$(function(){
  
  // When js is enabled we react to the form submit
  $('form').on('submit', function(event) {
    // This stops the form from doing a GET to the search.html
    event.preventDefault();
    
    if($('input').val() !== '') {
      $('.Results').removeClass('u-isHidden');
    }
  });
  
});
```

```html
<script src="script.js"></script>
```

Turn off JS via browser's development tools and observe the result.

This is a very simple example. When building websites you have to think is what happens if JavaScript is slow or it fails to load completely. The user should still be able to accomplish important tasks on your website.