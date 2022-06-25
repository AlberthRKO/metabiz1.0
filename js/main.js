/*------------------------------------
 *Author:FortunaTheme
 *Template:Rivo
 *Version:1.1
 *-------------------------------------
 */
(function ($) {
  "use strict";

  jQuery(document).on("ready", function () {
    // AOS.init();

    /*
     * -----------------------------------------------------------------
     *---------------------------Preloader and Anchor Tag---------------
     * -----------------------------------------------------------------
     */

    var themeWindow = $(window);
    var pagebody = $("html, body");
    themeWindow.on("load", function () {
      var preloader = jQuery(".preloader");
      var preloaderArea = jQuery(".preloader-area");
      preloader.fadeOut();
      preloaderArea.delay(200).fadeOut("slow");
      themeWindow.scrollTop(0);
    });

    var anchor = $('a[href="#"]');
    anchor.on("click", function () {
      e.preventDefault();
    });

    /*
     * -----------------------------------------------------------------
     *-------------------single-page-nav-plugin------------------------
     * -----------------------------------------------------------------
     */

    // Prevent console.log from generating errors in IE for the purposes of the demo
    if (!window.console)
      console = {
        log: function () {},
      };

    // The actual plugin
    if ($(".welcome-area").is("#welcome-area")) {
      var singleNav = jQuery(".single-page-nav");
      singleNav.singlePageNav({
        offset: singleNav.outerHeight(),
        filter: ":not(.external)",
        updateHash: false,
      });

      /*
       * -----------------------------------------------------------------
       *-------------------------Skill------------------------------------
       * -----------------------------------------------------------------
       */

      var skill = $(".about");

      var width1 = $(".prog1").data("progress");
      var progBar1 = $(".prog1");
      skill.waypoint(
        function () {
          progBar1.css({
            width: width1,
            transition: "2s ease-in",
          });
        },
        {
          offset: width1,
        }
      );

      var width2 = $(".prog2").data("progress");
      var progBar2 = $(".prog2");
      skill.waypoint(
        function () {
          progBar2.css({
            width: width2,
            transition: "2s ease-in",
          });
        },
        {
          offset: width2,
        }
      );

      var width3 = $(".prog3").data("progress");
      var progBar3 = $(".prog3");
      skill.waypoint(
        function () {
          progBar3.css({
            width: width3,
            transition: "2s ease-in",
          });
        },
        {
          offset: width3,
        }
      );

      /*
       * -----------------------------------------------------------------
       *-------------------------------Mixit Up---------------------------
       * -----------------------------------------------------------------
       */

      var portfolioContent = $(".portfolio-content");

      portfolioContent.mixItUp();

      /*
       * -----------------------------------------------------------------
       *-----------------------------lightbox-----------------------------
       * -----------------------------------------------------------------
       */

      lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
        showImageNumberLabel: false,
      });

      /*
       * -----------------------------------------------------------------
       *-----------------------------Ajax Chimp---------------------------
       * -----------------------------------------------------------------
       */

      var chimpForm = $("#mc-form");

      chimpForm.ajaxChimp({
        url: "https://tahsinscreation.us17.list-manage.com/subscribe/post?u=8d43c37bb4dbc0d0b8078d874&amp;id=c638bf1e04",
      });

      /*
       * -----------------------------------------------------------------
       *----------------------Contact form ajax---------------------------
       * -----------------------------------------------------------------
       */

      var contactSubmit = $("#contact-submit");

      contactSubmit.on("click", function (e) {
        e.preventDefault();
        var name = $("#form-name").val();
        var email = $("#form-email").val();
        var subject = $("#form-subject").val();
        var message = $("#form-message").val();
        var form = new Array({
          name: name,
          email: email,
          subject: subject,
          message: message,
        });
        $.ajax({
          type: "POST",
          url: "contact.php",
          data: {
            action: "contact",
            form: form,
          },
        }).done(function (data) {
          var conResult = $("#contact .result");
          conResult.html(data);
          $(".contact-form-area")[0].reset();
        });
      });

      /*
       * -----------------------------------------------------------------
       *--------------------Owl Carousel For Testimonial------------------
       * -----------------------------------------------------------------
       */

      var testimonial = $("#client-testimonial #owl-demo-testimonial");

      testimonial.owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        items: 2,
        autoPlay: 3000,
        responsive: {
          // breakpoint from 0 up
          0: {
            items: 1,
          },
          // breakpoint from 480 up
          600: {
            items: 1,
          },
          // breakpoint from 768 up
          900: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
        pauseOnHover: true,
        nav: true,
        dots: false,
        navText: [
          "<i class='fa fa-lg fa-angle-left' style='color:#0408F9'></i><i class='fa fa-lg fa-angle-left' style='color:#0482F9'></i><i class='fa fa-lg fa-angle-left' style='color:#04F2F9'></i>",
          "<i class='fa fa-lg fa-angle-right' style='color:#0408F9'></i><i class='fa fa-lg fa-angle-right' style='color:#0482F9'></i><i class='fa fa-lg fa-angle-right' style='color:#04F2F9'></i>",
        ],
      });

      var blog = $("#blog #owl-demo-blog");

      blog.owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        items: 1,
        loop: true,
        autoPlay: 3000,
        responsive: {
          // breakpoint from 0 up
          0: {
            items: 1,
          },
          // breakpoint from 480 up
          600: {
            items: 1,
          },
          // breakpoint from 768 up
          900: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
        pauseOnHover: true,
        nav: true,
        dots: false,
        navText: [
          "<i class='fa fa-lg fa-angle-left' style='color:#0408F9'></i><i class='fa fa-lg fa-angle-left' style='color:#0482F9'></i><i class='fa fa-lg fa-angle-left' style='color:#04F2F9'></i>",
          "<i class='fa fa-lg fa-angle-right' style='color:#0408F9'></i><i class='fa fa-lg fa-angle-right' style='color:#0482F9'></i><i class='fa fa-lg fa-angle-right' style='color:#04F2F9'></i>",
        ],
      });

      /*
       * -----------------------------------------------------------------
       *-----------------------------Typed Js-----------------------------
       * -----------------------------------------------------------------
       */

      if ($(".welcome-area").is(".animated-text")) {
        var typed = new Typed("#typed", {
          stringsElement: "#typed-strings",
          typeSpeed: 60,
          backSpeed: 30,
          backDelay: 2000,
          startDelay: 1000,
          loop: true,
        });
      }
    }
    /*
     * -----------------------------------------------------------------
     *----------------------- Pagepiling.js------------------------------
     * -----------------------------------------------------------------
     */

    var $isAnimatedSecond = $(".second .is-animated"),
      $isAnimatedSecondSingle = $(".second .is-animated__single"),
      $isAnimatedThird = $(".third .is-animated"),
      $isAnimatedThirdSingle = $(".third .is-animated__single"),
      $isAnimatedFourth = $(".fourth .is-animated"),
      $isAnimatedFourthSingle = $(".fourth .is-animated__single");

    var pagepiling = $("#pagepiling");

    AOS.init({
      easing: "ease-out-back",
    });
    pagepiling.pagepiling({
      menu: "#mainMenu, #mainMenu2",
      direction: "vertical",
      verticalCentered: true,
      sectionsColor: [],
      anchors: [
        "home",
        "work",
        "about",
        "objetivo",
        "metamask",
        "resume",
        "service",
        "client-testimonial",
        "portfolio",
        "blog",
        "contact",
      ],

      scrollingSpeed: 700,
      easing: "swing",
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: {
        textColor: "#000",
        bulletsColor: "red",
        position: "right",
      },
      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: ".section",
      animateAnchor: true,

      //events
      afterRender: function () {
        // AOS.init();
      },
      afterLoad: function (anchorLink, index) {},

      onLeave: function (index, nextIndex, direction) {
        $(".animado1").hide(0);
        $(".animado1").removeClass("aos-init").removeClass("aos-animate");
        $(".animado2").hide(0);
        $(".animado2").removeClass("aos-init").removeClass("aos-animate");
        $(".animado3").hide(0);
        $(".animado3").removeClass("aos-init").removeClass("aos-animate");
        $(".animado4").hide(0);
        $(".animado4").removeClass("aos-init").removeClass("aos-animate");
        $(".animado5").hide(0);
        $(".animado5").removeClass("aos-init").removeClass("aos-animate");
        $(".animado6").hide(0);
        $(".animado6").removeClass("aos-init").removeClass("aos-animate");
        $(".animado7").hide(0);
        $(".animado7").removeClass("aos-init").removeClass("aos-animate");
        $(".animado8").hide(0);
        $(".animado8").removeClass("aos-init").removeClass("aos-animate");
        $(".animado9").hide(0);
        $(".animado9").removeClass("aos-init").removeClass("aos-animate");
        $(".animado10").hide(0);
        $(".animado10").removeClass("aos-init").removeClass("aos-animate");
        $(".animado11").hide(0);
        $(".animado11").removeClass("aos-init").removeClass("aos-animate");
        if (nextIndex == 1) {
          $(".animado1").show(0);
          AOS.init({
            easing: "ease-in-out-back",
            duration: 1500,
            once: true,
            mirror: true,
            anchorPlacement: "top-center",
            offset: -1500,
          });
        }
        if (nextIndex == 2) {
          $(".animado2").show(0);
          AOS.init({
            easing: "ease-in-out-back",
            duration: 1500,
            once: true,
            mirror: true,
            anchorPlacement: "top-center",
            offset: -1500,
          });
        }
        if (nextIndex == 3) {
          $(".animado3").show(0);
          AOS.init({
            easing: "ease-in-out-back",
            duration: 1500,
            once: true,
            mirror: true,
            anchorPlacement: "top-center",
            offset: -1500,
          });
        }
        if (nextIndex == 4) {
          $(".animado4").show(0);
          AOS.init({
            easing: "ease-in-out-back",
            duration: 1500,
            once: true,
            mirror: true,
            anchorPlacement: "top-center",
            offset: -1500,
          });
        }
        if (nextIndex == 5) {
          $(".animado5").show(0);
          AOS.init({
            easing: "ease-in-out-back",
            duration: 1500,
            once: true,
            mirror: true,
            anchorPlacement: "top-center",
            offset: -1500,
          });
        }
        if (nextIndex == 6) {
          $(".animado6").show(0);
          AOS.init({
            easing: "ease-in-out-back",
            duration: 1500,
            once: true,
            mirror: true,
            anchorPlacement: "top-center",
            offset: -1500,
          });
        }
        if (nextIndex == 7) {
          $(".animado7").show(0);
          AOS.init({
            easing: "ease-in-out-back",
            duration: 1500,
            once: true,
            mirror: true,
            anchorPlacement: "top-center",
            offset: -1500,
          });
        }
        if (nextIndex == 8) {
          $(".animado8").show(0);
          AOS.init({
            easing: "ease-in-out-back",
            duration: 1500,
            once: true,
            mirror: true,
            anchorPlacement: "top-center",
            offset: -1500,
          });
        }
        if (nextIndex == 9) {
          $(".animado9").show(0);
          AOS.init({
            easing: "ease-in-out-back",
            duration: 1500,
            once: true,
            mirror: true,
            anchorPlacement: "top-center",
            offset: -1500,
          });
        }
        if (nextIndex == 10) {
          $(".animado10").show(0);
          AOS.init({
            easing: "ease-in-out-back",
            duration: 1500,
            once: true,
            mirror: true,
            anchorPlacement: "top-center",
            offset: -1500,
          });
        }
        if (nextIndex == 11) {
          $(".animado11").show(0);
          AOS.init({
            easing: "ease-in-out-back",
            duration: 1500,
            once: true,
            mirror: true,
            anchorPlacement: "top-center",
            offset: -1500,
          });
        }
      },
    });

    var menues = $(".header-info-area li a");

    // manejador de click sobre todos los elementos
    menues.click(function () {
      console.log("asdsad");
      // eliminamos active de todos los elementos
      //  menues.removeClass("active");
      // activamos el elemento clicado.
      $(".menuMovil").removeClass("header-info-bar-on");
      $(".menuMovil").addClass("header-info-bar-off");
    });

    // Iniciando script venobox.. colocamos el elemnto disparador
    $(".venobox-video").venobox({
      overlayClose: true /* aser que no se cierre con los alrededores */,
      bgcolor: "#000" /* color del contenedor del video */,
      //border:'10px',
      //closeBackground:'#000',
      //closeColor:'#fff'
      // overlayColor:'rgba(0,0,0,1.0)' /* color de fondo  */
      share: [],
      spinner: "cube-grid",
      titleattr: "Clinica Dental",
      titleColor: "#fff",
    });

    // AOS.init();
    var swiperMeta = new Swiper("#swiperBeneficios", {
      speed: 400,
      grabCursor: true,
      loop: true,

      // Componente Navigation
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // Componente pagination
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },

      //Componente keyboard
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      //Componente Thumbs
      // thumbs: {
      //   swiper: {
      //     el: "#swiperBeneficiosNav",
      //     slidesPerView: 3,
      //     watchOverflow: true,
      //   },
      // },
    });

    /*
     * -----------------------------------------------------------------
     *----------------------- header info bar---------------------------
     * -----------------------------------------------------------------
     */

    var headerInfo = $("#header-info-btn");

    headerInfo.animatedModal({
      modalTarget: "header-info-bar",
      animatedIn: "fadeInRight",
      animatedOut: "fadeOutRight",
    });

    /*
     * -----------------------------------------------------------------
     *--------------------MagnificPopup---------------------------------
     * -----------------------------------------------------------------
     */

    var videoPlay = $(".video-play");
    videoPlay.magnificPopup({
      type: "iframe",
      closeBtnInside: false,
      closeOnContentClick: true,
      tLoading: "", // remove text from preloader
    });

    /*
     * -----------------------------------------------------------------
     *-------------------------Vanta.js---------------------------------
     * -----------------------------------------------------------------
     */

    if ($(".vanta-bg").is(".bird")) {
      VANTA.BIRDS({
        el: "#welcome-vanta-area",
        backgroundColor: 0xc0baa6,
        color1: 0x0,
        color2: 0x0,
        colorMode: "lerp",
        wingSpan: 14.0,
        separation: 59.0,
        cohesion: 17.0,
        quantity: 3.0,
        backgroundAlpha: 0.0,
      });
    }
    if ($(".vanta-bg").is(".fog")) {
      VANTA.FOG({
        el: "#welcome-vanta-area",
        highlightColor: 0x9ec8e6,
        midtoneColor: 0x979acf,
        baseColor: 0x141414,
        blurFactor: 0.61,
        speed: 2.6,
      });
    }

    if ($(".vanta-bg").is(".waves")) {
      VANTA.WAVES({
        el: "#welcome-vanta-area",
        color: 0x19303e,
        zoom: 1.22,
      });
    }

    if ($(".vanta-bg").is(".cloud")) {
      VANTA.CLOUDS({
        el: "#welcome-vanta-area",
        skyColor: 0x1a1d34,
        cloudColor: 0x5e697a,
        cloudShadowColor: 0xb1020,
      });
    }
  });
})(jQuery);
