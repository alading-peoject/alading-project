var $ = require('../jquery.js');

$('.item').click(function(){
  $('.item').removeClass('active');
  $(this).addClass('active');
});
