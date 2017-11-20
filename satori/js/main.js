'use strict';

window.headerScrollTop = 0;

function setSideNav() {
  var $sideNav = $('.side-nav');

  $('[data-id]').each(function (_index, _elem) {

    var thisTitle = $(_elem).attr('data-title');
    var thisId = $(_elem).attr('id');

    var sideContent = '<a class="side-content" href="#' + thisId + '">\n    <div class="side-num">' + (_index.toString().length <= 1 ? '0' + (_index + 1) : _index + 1) + '</div>\n    <div class="sm-bold">' + thisTitle + '</div>\n    <div class="side-line">\n      <div class="side-line-bg"></div>\n    </div>\n    <div class="side-rect"></div></a>';

    $sideNav.find('.side-inner').append(sideContent);
  });
}

function hideHeaderScroll() {
  var $headerNav = $('.header-nav');
  var scrollTop = $(window).scrollTop();

  $headerNav.toggleClass('hidden', scrollTop > headerScrollTop);
  headerScrollTop = scrollTop;
}

$(document).ready(function () {

  if ($('html').hasClass('trident') === false && $('html').hasClass('mobile') === false) $("body").niceScroll();

  if ($('.side-nav').length > 0) setSideNav();

  $(document).on('mousemove', function (e) {

    var $backfaceImg = $('.intro-video .backface-img');

    if ($backfaceImg.length > 0) {

      var bfWidth = $backfaceImg.width();
      var bfHeight = $backfaceImg.height();

      $backfaceImg.css({
        left: e.pageX - bfWidth / 2,
        top: e.pageY - bfHeight / 2
      });
    }
  });

  $(document).on('click', '.goToHome', function () {
    $('body').removeClass('intro').addClass('home');
    $("body").getNiceScroll().resize();
  });

  $(document).on('click', '.burger-btn', function () {
    if ($('body').hasClass('nav-open')) {
      $('body').removeClass('nav-open');
    } else {
      $('body').addClass('nav-open');
    }

    $("body").getNiceScroll().resize();
  });

  $(document).on('click', '.side-nav .side-content', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active') === false) {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1500);
    }
  });

  $(document).on('click', '#backTop', function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  });

  $(window).scroll(function () {
    var scrollTop = $(document).scrollTop();
    var anchors = $('body').find('.anchor');
    var halfHeight = window.innerHeight / 2;
    $('.side-nav').removeClass('active');

    anchors.each(function (_index, _elem) {
      if (scrollTop > $(_elem).offset().top - halfHeight && scrollTop < $(_elem).offset().top + $(_elem).height() - halfHeight) {
        $('.side-nav .side-content[href="#' + $(_elem).attr('id') + '"]').addClass('active');
        $('.side-nav').addClass('active');
      } else {
        $('.side-nav .side-content[href="#' + $(_elem).attr('id') + '"]').removeClass('active');
      }
    });

    // Hide header on scroll down, show on scroll up
    // hideHeaderScroll()
  });

  $(document).on('mousemove', function (e) {
    var $box = $('.inner-content').eq(0);
    var boxTop = $box.offset().top;
    var boxBottom = $box.offset().top + $box.innerHeight();
    var boxLeft = $box.offset().left;
    var boxRight = $box.offset().left + $box.innerWidth();

    var extraSpace = 30;

    var wx = window.innerWidth;
    var wh = window.innerHeight;

    if (e.pageX > boxLeft && e.pageX < boxRight && e.pageY > boxTop && e.pageY < boxBottom) {
      console.log("done");
      $box.css('top', e.pageY - boxTop);
      $box.css('left', e.pageX - boxLeft);
      // $box.css('transform', `translate(${(e.pageX - boxLeft)},${(e.pageY - boxTop)})` )
    } else {
      $box.css('top', 0);
      $box.css('left', 0);
    }
  });
});