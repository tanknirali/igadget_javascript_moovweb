module.exports = function() {
  $this.addClass("mw-category");
  $("#Wrapper .Left").prepend("<h2>Misc</h2>");
	var left = $("#Wrapper .Left");
	
	left.children($("#SideCategoryShopByPrice")).attr("data-ur-set","toggler");
	$("#SideCategoryShopByPrice h2").attr("data-ur-toggler-component","button");
	$("#SideCategoryShopByPrice h2").append("<div class='mw_indicator'></div>");	
	$("#SideCategoryShopByPrice .BlockContent").attr("data-ur-toggler-component","content");
	$("#SideCategoryShopByPrice .BlockContent ul li a").append("<div class='mw-arrow'></div>");

	left.children($("#SideShopByBrand")).attr("data-ur-set","toggler");
	$("#SideShopByBrand h2").attr("data-ur-toggler-component","button");
	$("#SideShopByBrand h2").append("<div class='mw_indicator'></div>");	
	$("#SideShopByBrand .BlockContent").attr("data-ur-toggler-component","content");
	$("#SideShopByBrand .BlockContent ul li a").append("<div class='mw-arrow'></div>");

	

  	$("#Wrapper .Content #CategoryBreadcrumb").remove();

  	$("#Wrapper .Content #CategoryHeading .BlockContent h2").remove();

  	$("#CategoryHeading .BlockContent .FloatRight form").attr("id","frmSort");
  	
	
	// var frmtext = $("#frmSort").clone().children().remove().end().text();
	// console.log(frmtext);
	
	//$("#frmSort").prepend("<span class='spantext'>Sort by:</span>");

	scoped$("#CategoryContent form", function() {
		scoped$(".CompareButton").remove();
	});

	scoped$("#CategoryContent form .ProductList li", function() {
		scoped$(".ProductCompareButton").remove();
	});
	

};