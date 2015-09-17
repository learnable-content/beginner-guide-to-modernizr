![](headings/1.1.png)

# So what is Modernizr?

**Modernizr** is what's called a **feature detection library**. It actually tests what features does the client's browser support using JavaScript directly in the browser. No matter what browser your visitors are using, you can correctly utilize the newer HTML, CSS and JavaScript features, as well as have the ability to fallback to a usable experience for those who don't.

If we boil it down, it is a JavaScript library. Modernizr doesn't actually add the missing functionality to the browsers that don't support certain features. It merely tests the browser whether or not it can be used. It's up to you as a developer to choose if you'd like to add the missing feature via **polyfill**.

The only feature we add is the ability to use HTML5 tags in older IE versions (8 and down). This is what's being coined as the **HTML5Shiv**, or **Shiv** for short. There's also a **PrintShiv**, which makes sure the page is rendered correctly when printed.