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