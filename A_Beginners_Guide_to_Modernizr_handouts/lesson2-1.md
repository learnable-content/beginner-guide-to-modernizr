![](headings/2.1.png)

# Introduction

Now that we have our downloaded development copy of Modernizr, we can start using it.

When Modernizr loads, it does what's called a **feature test** for each test included. In that case it will run through all the supported features available in Modernizr. If you remember from our last lesson, we downloaded the development build which includes every feature detect that Modernizr can possibly test for. When the feature detect runs and it determines the support, Modernizr will add a class to the `html` element, which give you the ability to target styles based on what the current browser supports.

# Emoji Example

We'll start with a fun little example, **Emoji**. Everyone loves Emoji and Modernizr has a feature test to see if the current browser supports it. If so, it'll add an `emoji` class to the `html` element. If the current browser doesn't support Emoji then the class name will be prefixed with `no-`.

# Demo

The first thing we want to do is remove the padding from the unordered list the browser adds by default. We'll do that by using the `emoji` class that Modernizr will only add if the browser supports it. We'll target all `ul` tags:

```css
.emoji ul {
  padding: 0;
}
```

Now `li`:

```css
.emoji li {
  padding-left: 25px;
  position: relative;
  list-style: none;
}
```

On each list item, we'll use the `before` pseudo class. We need to add the `content` property and make it an empty string (we'll come back to this later). Also set `position` to `absolute`. If you remember we had a `position: relative`. Setting `left` to `0`, we make the emoji bullet point sit flush on the left hand side:

```css
.emoji li:before {
  content: '';
  position: absolute;
  left: 0;
  vertical-align: top;
}
```

Now coming back to that `content` property. We can use a special Unicode value which points to an emoji by using the backslash and the code that points to it.

```css
.emoji li:before {
  content: '\1F449';
  position: absolute;
  left: 0;
  vertical-align: top;
}
```

Now you can now see that we have some cool emoji pointer instead of the boring old dots. Over the power of Modernizr classes we can gracefully fall back to the default list style.