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



// ! lightbox
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// ! wypoint Anmiation

// $("section .row").each(() => {
//   var waypoint = new Waypoint({
//     element: $(this),
//     handler: function () {
//       $(this).addClass("animate__animated animate__bounceInUp animate__slower");
//     },
//     offset: 750,
//   });
//   return waypoint;
// });

// todo welcome section
var waypoint = new Waypoint({
  element: document.querySelector("#welcome"),
  handler: function () {
    $("#welcome .col-12>*").addClass(
      "animate__animated animate__bounceInUp animate__slower"
    );
  },
  offset: 'bottom-in-view'
});

// ? features
var waypoint = new Waypoint({
  element: document.querySelector("#features"),
  handler: function () {
    $("#features .row .col:nth-child(1)").addClass(
      "animate__animated animate__bounceInLeft animate__slow"
    );
    $("#features .row .col:nth-child(2)").addClass(
      "animate__animated animate__bounceInUp animate__slow"
    );
    $("#features .row .col:nth-child(3)").addClass(
      "animate__animated animate__bounceInRight animate__slow"
    );

    $("#features .row .col:nth-child(4)").addClass(
      "animate__animated animate__bounceInLeft animate__slow"
    );
    $("#features .row .col:nth-child(5)").addClass(
      "animate__animated animate__bounceInUp animate__slow"
    );
    $("#features .row .col:nth-child(6)").addClass(
      "animate__animated animate__bounceInRight animate__slow"
    );
  },
  offset: '50%'
});

// ? portfolio
var waypoint = new Waypoint({
  element: document.querySelector("#portfolio"),
  handler: function () {
    $("#portfolio .row .col:lt(2)").addClass(
      "animate__animated animate__bounceInLeft animate__slow"
    );
    $("#portfolio .row .col:gt(1)").addClass(
      "animate__animated animate__bounceInRight animate__slow"
    );
    $("#portfolio .row .col:gt(4)").addClass(
      "animate__animated animate__bounceInLeft animate__slow"
    );
    $("#portfolio .row .col:gt(6)").addClass(
      "animate__animated animate__bounceInRight animate__slow"
    );
  },
  offset: '50%'
});

// ! carousel
$(".carousel").carousel();
$(".carousel").carousel({
  interval: 2000,
});


// ! Smooth Scrolling

$(function () {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $("a").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html").animate(
          {
            scrollTop: target.offset().top,
          },
          800
        ); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference