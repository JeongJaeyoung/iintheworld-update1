$(function () {
    $('.group').mouseenter(function () {
      $('.sub-menu').removeClass('hide');
    });
  
    $('.sub-menu').mouseenter(function () {
      $('.sub-menu').removeClass('hide');
    });
  
    $('.group').mouseleave(function () {
      $('.sub-menu').addClass('hide');
    });
  
  
    $('.sub-menu').mouseleave(function () {
      $('.sub-menu').addClass('hide');
    });
  });

  // NAVIGATION - TOPIC BUTTON
$(function () {
  $(".sample-class .btn-menu").on("click", function () {
      $(".sample-class").toggleClass("menuon");
  });
});

