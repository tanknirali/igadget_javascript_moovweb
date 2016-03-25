var mappings = [
    [/shop-ipod/,
         "/pages/shopipod.js"],
    [/^\/$|^\/\?/,
        "/pages/home.js"],
    [/shop-misc/,
        "/pages/category.js"],
    [/brands/,
        "/pages/brands.js"],
    [/shop-mac/,
         "/pages/shopmac.js"],
    [/sample-product/,
         "/pages/product.js"],
    [/shop-iphone/,
         "/pages/iphonecategory.js"],
];

module.exports = function() {
    var status = env["status"], path = env["path"];
    if (status == "200") {
        var match = false;
        for (var i = 0; i < mappings.length; i++) {
            if (mappings[i][0].test(path)) {
                match = true;
                console.log("--> Importing " + mappings[i][1] + " in mappings.js");
                require(mappings[i][1])();
                break;
            }
        }

        if (!match) {
            console.log("--> No match in mappings. Perfect Proxying.");
            fns.perfectProxy();
        }
    }
    else {
        require("/pages/error.js")();
    }
};