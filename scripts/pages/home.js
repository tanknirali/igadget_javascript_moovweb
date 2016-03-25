module.exports = function() {
  $this.addClass("mw-home");
  $("#Wrapper .Right").remove();
  $("#Wrapper .Left").attr("style","display: none;");
  var content = $("#Wrapper .Content");
  var contentFeaturedProducts = $("#Wrapper .Content #HomeFeaturedProducts");
  contentFeaturedProducts.children(".Clear").remove();
  var contentNewProducts = $("#Wrapper .Content #HomeNewProducts");
  contentNewProducts.children(".Clear").remove();
  
  $("#Wrapper h2 span").remove();
  content.children($("#HomeFeaturedProducts")).attr("data-ur-set","carousel");
  content.children($("#HomeFeaturedProducts")).attr("data-ur-carousel-component","view_container");
  content.children($("#HomeFeaturedProducts")).attr("data-ur-fill","2");

  contentFeaturedProducts.children($(".BlockContent")).attr("data-ur-carousel-component","scroll_container");
  $("#Wrapper .Content #HomeFeaturedProducts .BlockContent").append("<div data-ur-carousel-component='button' data-ur-carousel-button-type='prev'></div>");
  $("#Wrapper .Content #HomeFeaturedProducts .BlockContent").append("<div data-ur-carousel-component='button' data-ur-carousel-button-type='next'></div>");
  //$("#Wrapper .Content #HomeFeaturedProducts .BlockContent").append("<div data-ur-carousel-component='count'></div>");
  
  $("#Wrapper .Content #HomeFeaturedProducts .BlockContent .ProductList").unwrap();
  $("#Wrapper .Content #HomeFeaturedProducts .BlockContent li").attr("data-ur-carousel-component","item");
  content.children($("#HomeFeaturedProducts")).append("<div class='mw_dots' data-ur-carousel-component='dots'></div>");

  content.children($("#HomeNewProducts")).attr("data-ur-set","carousel");
  content.children($("#HomeNewProducts")).attr("data-ur-carousel-component","view_container");
  content.children($("#HomeNewProducts")).attr("data-ur-fill","2");

  contentNewProducts.children($(".BlockContent")).attr("data-ur-carousel-component","scroll_container");
  $("#Wrapper .Content #HomeNewProducts .BlockContent").append("<div data-ur-carousel-component='button' data-ur-carousel-button-type='prev'></div>");
  $("#Wrapper .Content #HomeNewProducts .BlockContent").append("<div data-ur-carousel-component='button' data-ur-carousel-button-type='next'></div>");
 // $("#Wrapper .Content #HomeNewProducts .BlockContent").append("<div data-ur-carousel-component='count'></div>");
  
  $("#Wrapper .Content #HomeNewProducts .BlockContent .ProductList").unwrap();
  $("#Wrapper .Content #HomeNewProducts .BlockContent li").attr("data-ur-carousel-component","item");

  content.children($("#HomeNewProducts")).append("<div class='mw_dots' data-ur-carousel-component='dots'></div>");

};