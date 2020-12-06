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
if (innerWidth > 568) {
  // todo welcome section
  var waypoint = new Waypoint({
    element: document.querySelector("#welcome"),
    handler: function () {
      $("#welcome .col-12>*").addClass(
        "animate__animated animate__fadeInUp animate__slower"
      );
    },
    offset: "80%",
  });

  // ? features
  var waypoint = new Waypoint({
    element: document.querySelector("#features "),
    handler: function () {
      $("#features .row .col:nth-child(1)").addClass(
        "animate__animated animate__fadeInLeft animate__slower"
      );
      $("#features .row .col:nth-child(2)").addClass(
        "animate__animated animate__fadeInUp animate__slower"
      );
      $("#features .row .col:nth-child(3)").addClass(
        "animate__animated animate__fadeInRight animate__slower"
      );
      setTimeout(() => {
        $("#features .row .col:nth-child(4)").addClass(
          "animate__animated animate__fadeInLeft animate__slower"
        );
        $("#features .row .col:nth-child(5)").addClass(
          "animate__animated animate__fadeInUp animate__slower"
        );
        $("#features .row .col:nth-child(6)").addClass(
          "animate__animated animate__fadeInRight animate__slower"
        );
      }, 1000);

      removeAnime("#features .col");
    },
    offset: "60%",
  });

  // ? build
  var waypoint = new Waypoint({
    element: document.querySelector("#built"),
    handler: function () {
      $("#built .row .col:nth-child(1)").addClass(
        "animate__animated animate__fadeInLeft animate__slower"
      );
      $("#built .row .col:nth-child(2)").addClass(
        "animate__animated animate__fadeInUp animate__slower"
      );
      $("#built .row .col:nth-child(3)").addClass(
        "animate__animated animate__fadeInRight animate__slower"
      );

      removeAnime("#built .col");
    },
    offset: "60%",
  });

  // ? portfolio
  var waypoint = new Waypoint({
    element: document.querySelector("#portfolio"),
    handler: function () {
      $("#portfolio .row .col:lt(2)").addClass(
        "animate__animated animate__fadeInLeft animate__slower"
      );
      $("#portfolio .row .col:gt(1)").addClass(
        "animate__animated animate__fadeInRight animate__slower"
      );

      setTimeout(() => {
        $("#portfolio .row .col:gt(3)").addClass(
          "animate__animated animate__fadeInLeft animate__slower"
        );
        $("#portfolio .row .col:gt(5)").addClass(
          "animate__animated animate__fadeInRight animate__slower"
        );
      }, 2000);

      removeAnime("#portfolio .col");
    },
    offset: "50%",
  });

  // * Set function counterTimer for skills animations numbers

  function timer(value) {
    let i = 0;

    $("#skills .card-title").each(function () {
      var n = Number($(this).text());

      const t = setInterval(() => {
        if (i < n) {
          $(this).text(`${i}`);

          i++;
        } else if (i >= n) {
          clearInterval(t);
        }
      }, value);
    });
  }
  // todo and of function timer

  // * skills
  var j = 0;
  var waypoint = new Waypoint({
    element: document.querySelector("#skills "),
    handler: function (down) {
      $("#skills .card:odd").addClass(
        "animate__animated animate__fadeInUp animate__slower"
      );
      $("#skills .card:even").addClass(
        "animate__animated animate__fadeInDown animate__slower"
      );
      // * setting up condition to stop counter animation after just one time itteration
      setTimeout(() => {
        j === 0 ? timer(30) : false;
        j++;
      }, 1000);

      removeAnime("#skills .card");
    },
    offset: "60%",
  });
  //* team

  var waypoint = new Waypoint({
    element: document.querySelector("#team"),
    handler: function () {
      $("#team .card:lt(2)").addClass(
        "animate__animated animate__fadeInLeft  animate__slower"
      );
      $("#team .card:gt(1)").addClass(
        "animate__animated animate__fadeInRight  animate__slower"
      );
      removeAnime("#team .card");
    },
    offset: "60%",
  });
  //* pricing

  var waypoint = new Waypoint({
    element: document.querySelector("#pricing"),
    handler() {
      $("#pricing .card:even ").addClass(
        "animate__animated animate__fadeInUp animate__slower"
      );
      $("#pricing .card:odd ").addClass(
        "animate__animated animate__fadeInDown animate__slower"
      );

      removeAnime("#pricing .card");
    },
    offset: "60%",
  });

  //*remove class after animate the page
  function removeAnime(target) {
    setTimeout(() => {
      $(target).removeClass("animate__animated");
    }, 5000);
  }
}
// else if(innerWidth<568)
// {
//    $('#features .card').addClass('animate__animated animate__fadeInUp animate__slower');
//    $('.built .card').addClass('animate__animated animate__fadeInUp animate__slower');

// }
// ! carousel
$(".carousel").carousel();
$(".carousel").carousel({
  interval: 2000,
});
