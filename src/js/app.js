$(document).ready(function () {
  //slick slider
  $(".mv_wrap").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: false,
    dots: true,
  });
  $(".news_wrap>div>ul").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  });
  ///////////////   Responsive web width.callback()//////////////////////
  $(window)
    .resize(function () {
      //////////////DeskTop Size/////////////////
      if (window.innerWidth > 1024) {
        $(window).scroll(function () {
          const currentScrollValue = document.documentElement.scrollTop;
          if (currentScrollValue > 100) {
            //   header transparent to blue
            headerOver100();
          } else {
            headerUnder100();
          }
        });
      }
    })
    .resize();

  //   if form submit
  $(".franchise_form").submit(function (e) {
    e.preventDefault();
    $(".submit_form").show(500);
  });
  ///////////// ASIDE //////////////////
  /**************aside bar *******************/
  $(".franchise").hide();
  $(".aside_btn").on("click", function () {
    $(".franchise").fadeToggle(500);
    $(".aside_guide").hide(200);
  });
  $(".gnb>li:last-child").on("click", function () {
    $(".franchise").fadeToggle(500);
    $(".aside_guide").hide(200);
  });
  //////////   form handler ///////////

  // add valid class after submit form => use inValid style in css
  $("input").on("invalid", function () {
    $(".franchise_form").addClass("valid");
  });
  //   name invalid kr_lang_check
  const replaceKr = /[ㄱ-ㅎㅏ-ㅣ]/gi;
  $("#name").on("blur", function () {
    let thisValue = $(this).val();
    if (thisValue.length > 0) {
      if (thisValue.match(replaceKr)) {
        thisValue = thisValue.replace(/[ㄱ-ㅎㅏ-ㅣ]/gi, "");
      }
      $(this).val(thisValue);
    }
  });
  //   number value_check
  const replaceInt = /[^0-9]/gi;
  $("#number")
    .on("blur", function () {
      let thisValue = $(this).val();
      if (thisValue.length > 0) {
        if (thisValue.match(replaceInt)) {
          thisValue = thisValue.replace(/[^0-9]/gi, "");
        }
        $(this).val(thisValue);
      }
    })
    .on("keyup", function () {
      $(this).val(
        $(this)
          .val()
          .replace(/[^0-9]/gi, "")
      );
    });
  //footer copyright section year change
  const year = new Date().getFullYear();
  $(".footer_year").text(`${year}`);

  /******************* function section ******************/
  const headerOver100 = () => {
    $("header").css("backgroundColor", "#ffffff");
    $("header").css("height", "100px");
    $("header").css("boxShadow", "#536c8f 0px 0px 5px 2px");
    $(".gnb>li:not(li:last-child)").css("fontWeight", "400");
    $(".gnb>li:last-child").css("color", "#386aae");
    $(".header_wrap").css("height", "100px");
  };
  const headerUnder100 = () => {
    $("header").css("backgroundColor", "transparent");
    $("header").css("height", "140px");
    $("header").css("boxShadow", "none");
    $(".gnb>li").css("fontWeight", "700");
    $(".gnb>li:last-child").css("color", "#305488");
    $(".header_wrap").css("height", "140px");
  };
});
