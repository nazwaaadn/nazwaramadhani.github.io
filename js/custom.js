// Project slider with 2 cards per slide and custom controls
$(document).ready(function(){
  var $projectSlider = $('.project-slider');
  var $dotsContainer = $('.project-slider-dots');
  if ($projectSlider.length) {
    $projectSlider.owlCarousel({
      items: 1,
      margin: 0,
      loop: false,
      dots: false,
      nav: false,
      smartSpeed: 400,
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        992: { items: 1 }
      }
    });

    // Generate dots
    var totalSlides = $projectSlider.find('.owl-item').length;
    var dotHtml = '';
    for (var i = 0; i < totalSlides; i++) {
      dotHtml += '<span class="project-dot" data-slide="'+i+'"></span>';
    }
    $dotsContainer.html(dotHtml);

    function updateDots(index) {
      $dotsContainer.find('.project-dot').removeClass('active');
      $dotsContainer.find('.project-dot').eq(index).addClass('active');
    }

    // Initial dot
    updateDots(0);

    $projectSlider.on('changed.owl.carousel', function(event) {
      updateDots(event.item.index);
    });

    $('.project-dot').click(function(){
      var slide = $(this).data('slide');
      $projectSlider.trigger('to.owl.carousel', [slide, 400]);
    });

    $('.project-prev').click(function(){
      $projectSlider.trigger('prev.owl.carousel');
    });
    $('.project-next').click(function(){
      $projectSlider.trigger('next.owl.carousel');
    });
  }
});
(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
