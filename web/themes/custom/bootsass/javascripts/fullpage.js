(function ($) {
  'use strict';

// This lot is for rollovers on the 4 sidebar Action fields

//   Drupal.behaviors.fourHidden = {
//     attach: function(context, settings) {
//       $('div.simple-ch').hide();
//       $('div.community-ch').hide();
//       $('div.every-ch').hide();
//       $('div.global-ch').hide();
//     }
//   };

//     Drupal.behaviors.revealSimple = {
//         attach: function(context, settings) {
//             $('div.simple').mouseover(function() {
//                 $('div.simple-ch').stop().slideDown('slow');
//             });
//             $('div.simple').mouseout(function(){
//                 $('div.simple-ch').stop().slideUp('slow');
//             });
//         }
//     };

//     Drupal.behaviors.revealGlobal = {
//         attach: function(context, settings) {
//             $('div.global').mouseover(function() {
//                 $('div.global-ch').stop().slideDown('slow');
//             });
//             $('div.global').mouseout(function(){
//                 $('div.global-ch').stop().slideUp('slow');
//             });
//         }
//     };

//     Drupal.behaviors.revealCommunity = {
//         attach: function(context, settings) {
//             $('div.community').mouseover(function() {
//                 $('div.community-ch').stop().slideDown('slow');
//             });
//             $('div.community').mouseout(function(){
//                 $('div.community-ch').stop().slideUp('slow');
//             });
//         }
//     };

//     Drupal.behaviors.revealEvery = {
//         attach: function(context, settings) {
//             $('div.every').mouseover(function() {
//                 $('div.every-ch').stop().slideDown('slow');
//             });
//             $('div.every').mouseout(function(){
//                 $('div.every-ch').stop().slideUp('slow');
//             });
//         }
//     };


// This is for jumping out the details of an embedded source on the main page

    // $("#embedded-reference").click(function () {
    //     $(".summary, .author, .link").toggleClass("initial");
    //     $("#embedded-reference").toggleClass("embedded");
    // });

//   $(".source-container").click(function () {
//     // $(".summary, .author, .link").toggleClass("initial");
//     // $(this).find('.summary').toggleClass("show");
//     //   $(this).find('.author').toggleClass("show");
//     //   $(this).find('.link').toggleClass("show");
//       $(this).children('.popup-container').toggleClass("show");
//   });

    // ok
    // $(".popup").click(function () {
    //     $(this).children(".myPopup").toggleClass("show");
    // });

    $(".popup").click(function () {
        $(this).children(".myPopup").addClass("show").delay(5000).queue(function(next) {
            $(this).removeClass("show");
            next();
        });
    });


}(jQuery));
