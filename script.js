/*
 * Using jQuery to attach a click event to the
 * button.
 */

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