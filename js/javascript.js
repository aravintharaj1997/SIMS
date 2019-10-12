$(function() {
   $('.down').click (function() {
     $('html, body').animate({scrollTop: $('.container').offset().top }, 'slow');
     return false;
   });
 });
