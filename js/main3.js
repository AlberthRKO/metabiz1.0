(function ($) {
  "use strict";

  jQuery(document).on("ready", function () {
    // AOS.init();

    /*
     * -----------------------------------------------------------------
     *---------------------------Preloader and Anchor Tag---------------
     * -----------------------------------------------------------------
     */
    /*  const preloader = document.querySelector("#preloaderfinal");
        if (preloader) {
          window.addEventListener("load", () => {
            preloader.remove();
          });
        } */
    /* $(".translate").click(function () {
          let lang = $(this).attr("id");
          console.log(lang);
        }); */

    var themeWindow = $(window);
    var pagebody = $("html, body");
    themeWindow.on("load", function () {
      var preloader = jQuery(".preloader");
      var preloaderArea = jQuery(".preloader-area");
      preloader.fadeOut();
      preloaderArea.delay(200).fadeOut("slow");
      themeWindow.scrollTop(0);
    });

    /* var anchor = $('a[href="#"]');
        anchor.on("click", function () {
          e.preventDefault();
        }); */

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
    }
    /*
     * -----------------------------------------------------------------
     *----------------------- Pagepiling.js------------------------------
     * -----------------------------------------------------------------
     */

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
        "login",
        "register",
        "vision",
        "mission",
        "metamask",
        "roadmap",
        "services",
        "started",
        "ecosystem",
        // "plans",
        "counter",
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
        /*       $(".animado11").hide(0);
            $(".animado11").removeClass("aos-init").removeClass("aos-animate"); */
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
        /*  if (nextIndex == 11) {
              $(".animado11").show(0);
              AOS.init({
                easing: "ease-in-out-back",
                duration: 1500,
                once: true,
                mirror: true,
                anchorPlacement: "top-center",
                offset: -1500,
              });
            } */
      },
    });
  });
})(jQuery);
