module.exports = function() {
    // body.append(
    //     $(tag("footer", {class: "mw-footer"}, "Powered by Moovweb"), function() {
    //         // Move stuff here
    //     })
    // );
    // This injects a snippet of code used locally with gulp live-reloading
    // Note: assert statements are ignored in production.

    // fns.assert(true, function(){
    //   if (fns.layer('live-reload'))
    //     require("/sections/browsersync.js")();
    // });
    // $("p").replaceWith(function(n){
    //         return "<div>This element has index " + n + ".</div>";
    // });
    $("#Footer").append("<div class='mw_footer'></div>");
    $("#Footer p").remove();
    var footer = $("#Footer .mw_footer");
    footer.append("<div class='mw_currency'></div><div class='mw_copy'></div><div class='mw_moovweb'></div>");
    $("#Footer .mw_currency").append("<span>All prices are in </span><span title='Default Currency'>USD</span>");
    $("#Footer .mw_copy").append("<span>Copyright 2016 iGadgetCommerce.</span>");
    $("#Footer .mw_moovweb").append("<span class='mw_powered'>powered by:</span><div class='sprites-moovweb'></div>");
};