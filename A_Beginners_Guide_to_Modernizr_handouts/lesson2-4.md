![](headings/2.4.png)

# Default Classes

Sometimes the default classes set by Modernizr might not be ideal for your situation. For example, you may have existing CSS that might use fairly generic classes that might be out of your control, like `video`, `checked`, `detail`. Those are all quite generic names, and could potentially clash with your styles and cause layout issues.

# Modernizr Prefix

Luckily, Modernizr has a little feature where we can add a class name prefix to all our tests. Let's go back to the download page on modernizr.com. If we scroll down the left hand column just a little bit, we can add a prefix to all future test names. For example, try "modernizr".

You'll notice now that all Modernizr applied classes start with the `modernizr` prefix that we specified in the input. For example, `flexbox` becomes `modernizrflexbox`, and the unsupported version becomes `modernizrno-flexbox`. This is probably not what you expected, and seems a little hard to read.

Unless you really need to add a CSS prefix, then it's recommended that you don't add one. If you get CSS naming clashes or weird things happening with Modernizr, now you know how you can add a prefix to your Modernizr class names to avoid that scenario.