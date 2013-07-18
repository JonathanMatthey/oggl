require.config({
    baseUrl: '../scripts',
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'jquery.lazyload': '../bower_components/jquery.lazyload/jquery.lazyload'

    },
    shim: {
      'jquery.lazyload': {
          //These script dependencies should be loaded before loading
          //backbone.js
          deps: ['jquery'],
          //Once loaded, use the global 'Backbone' as the
          //module value.
          exports: 'Lazyload'
      }
    }
});

require(['jquery', 'app', 'jquery.lazyload'], function ($, app) {
  'use strict';
  // use app here

  var touchEvent = (Modernizr.touch) ? "touchstart" : "click";
  var mouseenterEvent = (Modernizr.touch) ? "touchstart" : "mouseenter";

  $("#gallery").addClass('slide-up');

  $("#photo_nav li").on(touchEvent, function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var targetCategory = $target.data('category');
    $target.siblings('.selected').removeClass('selected');
    $target.addClass('selected');
    console.log(targetCategory);
    $('#gallery').removeClass('slide-up');
    setTimeout(function(){
      $('#gallery').removeClass('category-my-collection category-captured category-curated');
      $("#gallery").addClass("category-" + targetCategory);
      setTimeout(function(){
        $("#gallery").addClass("slide-up");
      }, 100);
    }, 400);

  });

  $("#logo").on(mouseenterEvent, function(event){
    event.preventDefault();
    $("#popup").toggleClass("slide-out");
  });

  $("#popup").mouseleave(function(event){
    event.preventDefault();
    $("#popup").removeClass("slide-out");
  });

  // $("#photo_details").mouseleave(function(event){
  //   event.preventDefault();
  //   $("#photo_details").removeClass('show-social-btns show-film-lens');
  // });

  // $(".btn-social").on(touchEvent, function(event){
  //   event.preventDefault();
  //   $("#photo_details").removeClass('show-film-lens').toggleClass('show-social-btns');
  // });

  // $(".btn-gear").on(touchEvent, function(event){
  //   event.preventDefault();
  //   $("#photo_details").removeClass('show-social-btns').toggleClass('show-film-lens');
  // });

  $(".layout-toggles a.btn-grid").on(touchEvent, function(event){
    event.preventDefault();
    $(".layout-toggles .selected").removeClass('selected');
    $(event.currentTarget).addClass('selected');
    $("#gallery").removeClass('column').addClass('grid');
  });

  $(".layout-toggles a.btn-column").on(touchEvent, function(event){
    event.preventDefault();
    $(".layout-toggles .selected").removeClass('selected');
    $(event.currentTarget).addClass('selected');
    $("#gallery").removeClass('grid').addClass('column');
  });

  //
  // AJAX load photo page
  //
  // $("#gallery a").on('click', function(event){
  //   event.preventDefault();
  //   var targetHref = $(event.currentTarget).attr('href');
  //   $('.container').addClass('photo');
  //   $("#content").fadeOut(300, function(){
  //       $("#content").load(window.location.href + targetHref + " #content", function(data){
  //         window.history.pushState("photo", "Oggle - Photo Details", "/photo.html");
  //         $("#content").fadeIn(300, function(){
  //         });
  //       });
  //   });
  // });

  $(".photo-wrapper").addClass('fade-arrows-out');
  $(".photo-wrapper").on(touchEvent, function(event){
    $(".photo-wrapper").removeClass('fade-arrows-out');
    setTimeout(function(){
      $(".photo-wrapper").addClass('fade-arrows-out');
    },200);
  });

  $("img.lazy").lazyload({ threshold : 100 });

});
