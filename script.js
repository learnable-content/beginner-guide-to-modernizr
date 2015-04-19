/*
 * Using jQuery to attach a click event to the
 * buttons.
 */

$('#prefixed').on('click', function() {

  $('#prefixedResult').text(
    // Passing a single argument is for CSS
    // e.g. Modernizr.prefixed('borderRadius')
    Modernizr.prefixed(
      $('#prefixedValue').val()
    )
  );

});

$('#prefixedCSS').on('click', function() {

  $('#prefixedCSSResult').text(
    // Only accepts a single argument
    // e.g. Modernizr.prefixed('border-radius')
    Modernizr.prefixedCSS(
      $('#prefixedCSSValue').val()
    )
  );

});
