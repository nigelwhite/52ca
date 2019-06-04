jQuery(document).ready(function($){
     var masonryContainer = $(".myIsotopeContainer"),
  filtersMasonry = $(".myIsotopeFilter .filter");
  filtersMasonry.prepend( "<li class=\"active\"><a class=\"button\" href=\"#\" data-filter=\"*\"> All </a></li>" );
    
    $(".myIsotopeContainer").isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
    });
    
    $('ul.filter a').click(function(){
        
      $("ul.filter a").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr('data-filter');
      $(".myIsotopeContainer").isotope({
             filter: selector,
             animationOptions: {
                 duration: 750,
                 easing: 'linear',
                 queue: false,
             }
        });
       return false;
    });
      });