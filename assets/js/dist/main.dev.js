"use strict";

$(document).ready(function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  if ($('header').length || $('.sidebar-left').length) {
    var h = $('header');
    var sl = $('.sidebar-left');
    var hh = h.height();
    sl.css('top', 'calc(' + hh + 'px + 20px)'); // calc(hh + 20px);
  }

  Fancybox.defaults.infinite = 0;
  Fancybox.bind("[data-fancybox]", {
    infinite: false,
    preload: 0,
    dragToClose: false,
    autoplay: false
  });

  if ($('a[href^="#"]').length) {
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
      e.preventDefault();
      var target = this.hash,
          $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - $('header').height()
      });
    });
  }

  if ($('.price-all').length) {
    $('.price-all').html('Сумма вашей корзины: ' + '<b>' + $('.list-cart li .in-cart').toArray().reduce(function (summ, current) {
      return +current.innerText + summ;
    }, 0) + '</b>' + ' руб');
  }
});