(function ($) {
  "use strict";
  new WOW().init();

  var windows = $(window);
  var screenSize = windows.width();
  var sticky = $(".header-sticky");
  var $html = $("html");
  var $body = $("body");

  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    var headerHeight = sticky.height();

    if (screenSize >= 320) {
      if (scroll < headerHeight) {
        sticky.removeClass("is-sticky");
      } else {
        sticky.addClass("is-sticky");
      }
    }
  });

  $("#mobile-menu-trigger").on("click", function () {
    $("#mobile-menu-overlay").addClass("active");
    $body.addClass("no-overflow");
  });

  $("#mobile-menu-close-trigger").on("click", function () {
    $("#mobile-menu-overlay").removeClass("active");
    $body.removeClass("no-overflow");
  });

  /*Close When Click Outside*/
  $body.on("click", function (e) {
    var $target = e.target;
    if (
      !$($target).is(".mobile-menu-overlay__inner") &&
      !$($target).parents().is(".mobile-menu-overlay__inner") &&
      !$($target).is("#mobile-menu-trigger") &&
      !$($target).is("#mobile-menu-trigger i")
    ) {
      $("#mobile-menu-overlay").removeClass("active");
      $body.removeClass("no-overflow");
    }
  });

  var $offCanvasNav = $(".offcanvas-navigation"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu
    .parent()
    .prepend('<span class="menu-expand"><i></i></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.parent("li").removeClass("active");
        $this.siblings("ul").slideUp();
      } else {
        $this.parent("li").addClass("active");
        $this
          .closest("li")
          .siblings("li")
          .removeClass("active")
          .find("li")
          .removeClass("active");
        $this.closest("li").siblings("li").find("ul:visible").slideUp();
        $this.siblings("ul").slideDown();
      }
    }
  });

  var cururl = window.location.pathname;
  var curpage = cururl.substr(cururl.lastIndexOf("/") + 1);
  var hash = window.location.hash.substr(1);
  if ((curpage == "" || curpage == "/" || curpage == "admin") && hash == "") {
    //$("nav .navbar-nav > li:first-child").addClass("active");
  } else {
    $(".navigation-menu li").each(function () {
      $(this).removeClass("active");
    });
    if (hash != "")
      $(".navigation-menu li a[href*='" + hash + "']")
        .parents("li")
        .addClass("active");
    else
      $(".navigation-menu li a[href*='" + curpage + "']")
        .parents("li")
        .addClass("active");
  }

  $(document).ready(function () {
    var brandLogoSlider = new Swiper(".brand-logo-slider__container", {
      slidesPerView: 6,
      loop: true,
      speed: 1000,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },

      breakpoints: {
        1499: {
          slidesPerView: 6,
        },

        991: {
          slidesPerView: 4,
        },

        767: {
          slidesPerView: 3,
        },

        575: {
          slidesPerView: 2,
        },
      },
    });
  });

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  function scrollToTop() {
    var $scrollUp = $("#scroll-top"),
      $lastScrollTop = 0,
      $window = $(window);

    $window.on("scroll", function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass("show");
      } else {
        if ($window.scrollTop() > 200) {
          $scrollUp.addClass("show");
        } else {
          $scrollUp.removeClass("show");
        }
      }
      $lastScrollTop = st;
    });

    $scrollUp.on("click", function (evt) {
      $("html, body").animate({ scrollTop: 0 }, 600);
      evt.preventDefault();
    });
  }
  scrollToTop();


})(jQuery);
