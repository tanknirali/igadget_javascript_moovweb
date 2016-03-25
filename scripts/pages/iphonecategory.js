module.exports = function() {
  	$this.addClass("mw-category");

  	$("#Wrapper .Left").prepend("<h2>Shop iphone</h2>");
  	$("#Wrapper .Left #SideShopByBrand").attr("data-ur-set","toggler");
	$("#SideShopByBrand h2").attr("data-ur-toggler-component","button");
	$("#SideShopByBrand h2").append("<div class='mw_indicator'></div>");	
	$("#SideShopByBrand .BlockContent").attr("data-ur-toggler-component","content");

	$("#Wrapper .Content #CategoryBreadcrumb").remove();
	$("#Wrapper .Content #CategoryHeading .BlockContent h2").remove(); 
	scoped$("#CategoryContent form", function() {
		scoped$(".CompareButton").remove();
	});

	scoped$("#CategoryContent form .ProductList li", function() {
		scoped$(".ProductCompareButton").remove();
	});
};