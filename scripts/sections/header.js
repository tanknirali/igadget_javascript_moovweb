module.exports = function() {
    // body.prepend(
    //     $(tag("header", {class: "mw-header"}), function() {
    //         // Move stuff here
    //     })
    // );
	  $("#AjaxLoading").attr("style","position: absolute; top: 0px; left: 112px; display: none;");
    $("#Logo").append($("#TopMenu"));
  	$("#TopMenu li").not(".CartLink, .First").remove();

    scoped$("#Header", function() {
      $this.attr("data-ur-set", "toggler");
      $this.append("<div id='mw-account-section'><div id='mw-account-content'><div class='BlockContent'><div class='AccountLogin'><h2 class='mw-h2'>Sign in to Your Account</h2><form><div class='FormContainer'><dl><dt>Email Address:</dt><dd><input type='text' id='email'/></dd><dt>Password:</dt><dd><input type='password' id='pwd'/></dd></dl><p class='Submit'><a href='https://www.igadgetcommerce.com/login.php?action=reset_password'>Forgot your password?</a><br><input type='button' id='loginbtn'/></p></div></form></div><div class='CreateAccount'><div class='mw-or'>Or</div><a href='https://www.igadgetcommerce.com/login.php?action=create_account'>Create Account</a></div></div></div></div>");
      $this.append("<div class='mw_header_bottom'><div class='mw_search'></div><div class='mw_menu_btn sprites-menu' data-ur-toggler-component='button'></div></div>");
      $this.append($("#Menu"));

      
      scoped$("#mw-account-section").attr("style", "display: none;");
      scoped$("#Menu").attr("data-ur-toggler-component", "content");
      scoped$("#Menu").append($(".Left #SideCategoryList"));
      scoped$("#Menu li").addClass("mw_bar2");
    });

  	
    $("#Header .Clear").remove();
  	
    $("#SearchForm").children($("p")).remove();

  	var searchForm = $("#SearchForm form");
  	searchForm.children($("label")).remove();
  	searchForm.children($("input[type=text]")).attr("placeholder", "Search...");
  	searchForm.children($("input[type=image]")).attr("style","opacity: 0;").wrap("div").parent().addClass("mw_search_btn");
  	
    
    
    // function toggleDiv(divId) {
    //   $("#"+divId).toggle();
    // }

    var topmenuFirst = $("#TopMenu .First");
    topmenuFirst.children($("a")).wrap("div").parent().addClass("mw_user_btn sprites-user");
    //$("#TopMenu .First a").attr("href", "javascript:toggleDiv('loginContent');");
    var topmenuCart = $("#TopMenu .CartLink");
    topmenuCart.children($("a")).wrap("div").parent().addClass("mw_cart_btn sprites-cart");
    $(".mw_user_btn").attr("id","user_btn");

    $("#Header .mw_header_bottom .mw_search").append($("#Header #SearchForm"));



};