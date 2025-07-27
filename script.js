document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.innerWidth > 991 && window.scrollY >50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  });
  document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
      if(window.scrollY > 400){
        this.document.getElementsById('back-to-top').fadeIn('slow');
      }
      else{
        this.document.getElementsById('back-to-top').fadeOut('slow');
      }
    })})
 window.addEventListener('scroll', reveal);
    function reveal(){
      var reveals=document.querySelectorAll('.reveal');
      for(i=0;i<reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=50;
        if(revealtop < windowheight-revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }
    (function($){
    var portfolioIsotope = $('.product-container').isotope({
      itemSelector: '.product-item',
      layoutMode: 'fitRows'
  });
  $('#product-flters li').on('click', function () {
      $("#product-flters li").removeClass('active');
      $(this).addClass('active');
      portfolioIsotope.isotope({filter: $(this).data('filter')});
  });
})(jQuery);

new WOW().init();

function moveContact(e) {
  window.location.href="#contactus";
  e.preventDefault();
  e.stopPropagation(); 
  }
