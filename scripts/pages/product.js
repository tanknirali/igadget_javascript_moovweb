module.exports = function() {
  $this.addClass("mw-product");
  $("#Wrapper .Left").remove();
  scoped$(".Content", function() {
    scoped$("#ImageScrollPrev").remove();
    scoped$("#ImageScrollNext").remove();
    scoped$(".ProductThumb").attr("style","width: 240px; height: 302px;");
    scoped$(".ProductThumbImage").removeAttr("style");
    scoped$(".ProductThumbImage").attr("style","height: 220px;");
    scoped$(".ProductThumbImage").find("a").removeAttr("onclick");
    scoped$(".ProductThumbImage").find("a").attr("style","outline-style: none; text-decoration: none; cursor: pointer;");
    scoped$(".ImageCarouselBox .ProductTinyImageList ul li").removeAttr("onclick");

  });
};