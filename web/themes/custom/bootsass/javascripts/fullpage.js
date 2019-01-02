(function ($) {
  'use strict';

  Drupal.behaviors.fourHidden = {
    attach: function(context, settings) {
      $('div.simple-ch').hide();
      $('div.community-ch').hide();
      $('div.every-ch').hide();
      $('div.global-ch').hide();
    }
  };

    Drupal.behaviors.revealSimple = {
        attach: function(context, settings) {
            $('div.simple').mouseover(function() {
                $('div.simple-ch').stop().slideDown('slow');
            });
            $('div.simple').mouseout(function(){
                $('div.simple-ch').stop().slideUp('slow');
            });
        }
    };

    Drupal.behaviors.revealGlobal = {
        attach: function(context, settings) {
            $('div.global').mouseover(function() {
                $('div.global-ch').stop().slideDown('slow');
            });
            $('div.global').mouseout(function(){
                $('div.global-ch').stop().slideUp('slow');
            });
        }
    };

    Drupal.behaviors.revealCommunity = {
        attach: function(context, settings) {
            $('div.community').mouseover(function() {
                $('div.community-ch').stop().slideDown('slow');
            });
            $('div.community').mouseout(function(){
                $('div.community-ch').stop().slideUp('slow');
            });
        }
    };

    Drupal.behaviors.revealEvery = {
        attach: function(context, settings) {
            $('div.every').mouseover(function() {
                $('div.every-ch').stop().slideDown('slow');
            });
            $('div.every').mouseout(function(){
                $('div.every-ch').stop().slideUp('slow');
            });
        }
    };

}(jQuery));
