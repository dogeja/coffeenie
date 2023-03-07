$(document).ready(function () {
  // mouse event
  const mouseCursor = $("#mouseEvent");
  const moveCursor = (e) => {
    // 세로스크롤 접근시 가로스크롤 생성 방지
    if (e.pageX < $(window).innerWidth() - 5) {
      mouseCursor.css({
        left: e.pageX,
        top: e.pageY,
      });
    }
  };

  $("article").on("mousemove", moveCursor);

  // define section area
  const mouseEnter = () => {
    mouseCursor.addClass("hover");
  };
  const mouseLeave = () => {
    mouseCursor.removeClass("hover");
  };
  $("#about>div").on("mouseenter", mouseEnter);
  $("#about>div").on("mouseleave", mouseLeave);
});
