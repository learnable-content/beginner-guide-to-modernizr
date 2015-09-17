![](headings/3.6.png)

# HTML5Shiv

If you're not familiar with the **HTML5Shiv**, it's a feature that can be included in Modernizr to add support for the HTML5 tags to old IE, through IE8 and down. It creates a bunch of elements that kick old IE into action, so they render and can be styled correctly.

# PrintShiv

The **PrintShiv** also has the normal Shiv included so you don't need both. So unless your website really needs principal falling, you should only include the HTML5Shiv if your browser requires it down. Otherwise it's unnecessary.

# Example

Our demo page has HTML5 tags. This page currently doesn't load Modernizr at all, just some simple markup installs.

Let's add Modernizr with the Shiv included:

```html
<script src="modernizr-dev.printshiv.js"></script>
```

So if you need to support old IE, the Shiv can be incredibly useful. Otherwise if you don't, then you should not include it in your custom build, because it just adds weight that you don't need.