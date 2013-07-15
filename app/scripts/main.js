require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    }
});

require(['app', 'jquery'], function (app, $) {
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

  $("#photo-details").mouseleave(function(event){
    event.preventDefault();
    $("#photo-details").removeClass('show-social-btns show-film-lens');
  });

  $(".btn-social").on(touchEvent, function(event){
    event.preventDefault();
    $("#photo-details").removeClass('show-film-lens').toggleClass('show-social-btns');
  });

  $(".btn-gear").on(touchEvent, function(event){
    event.preventDefault();
    $("#photo-details").removeClass('show-social-btns').toggleClass('show-film-lens');
  });

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

  $("#gallery a").on(touchEvent, function(event){
    event.preventDefault();
    var targetHref = $(event.currentTarget).attr('href');
    console.log(window.location.href + targetHref + " #content");
    $('.container').addClass('photo');
    $("#content").fadeOut(300, function(){
        $("#content").load(window.location.href + targetHref + " #content", function(data){
          window.history.pushState("photo", "Oggle - Photo Details", "/photo.html");
          $("#content").fadeIn(300, function(){
          });
        });
    });
  });

 //   function processAjaxData(response, urlPath){
 //     document.getElementById("content").innerHTML = response.html;
 //     document.title = response.pageTitle;
 //     window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);
 // }

});
