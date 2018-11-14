(function ($) {
  'use strict';

  Drupal.behaviors.awesome = {
    attach: function(context, settings) {
      $('myClass', context).once('awesome').append('<p>Hello world</p>');
    }
  };

}(jQuery));
