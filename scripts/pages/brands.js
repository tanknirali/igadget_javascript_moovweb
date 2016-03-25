module.exports = function() {
	$this.addClass("mw-brands");
	$("#Wrapper .Left #SideShopByBrand").attr("data-ur-set","toggler");
	var shopBrand = $("#Wrapper .Left #SideShopByBrand");
	shopBrand.children($("h2")).attr("data-ur-toggler-component", "button");
	shopBrand.children($("h2")).append("<div class='mw_indicator'></div>");

	shopBrand.children($(".BlockContent")).attr("data-ur-toggler-component","content");

	scoped$(".Content #BrandContent .BlockContent form", function() {
		scoped$(".CompareButton").remove();
	});
	
	scoped$("#BrandContent form .ProductList li", function() {
		scoped$(".ProductCompareButton").remove();
	});
};