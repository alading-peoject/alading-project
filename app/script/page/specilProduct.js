var $ = require('../module/jquery.js');

$('.item').click(function(){
  $('.item').removeClass('active');
  $(this).addClass('active');
});
