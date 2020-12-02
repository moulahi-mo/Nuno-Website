// ! scroll background show

$(window).scroll(function () {
  if (scrollY > 600) {
    $("#mainNav").addClass("darken");
  } else {
    $("#mainNav").removeClass("darken");
    $("#homebtn").addClass("active");
  }
});

//  !Init Scrollspy
$("body").scrollspy({ target: "#mainNav" });

// ! Smooth Scrolling
//  $("#mainNav a").on('click', function (event) {
//    if (this.hash !== "") {
//      event.preventDefault();

//      const hash = this.hash;

//      $('html, body').animate({
//        scrollTop: $(hash).offset().top
//      }, 800, function () {

//        window.location.hash = hash;
//      });
//    }
//  });

// ! caroussel owl

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
