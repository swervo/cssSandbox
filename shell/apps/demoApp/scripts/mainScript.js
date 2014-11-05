/* global domLib */

"use strict";

var demoApp = {
    init: function() {
        this.connectUp();
    },

    connectUp: function() {
        var body = document.getElementsByTagName("body")[0];
        body.addEventListener("click", function(e) {
            console.log("A click on " + e.target.innerText);
        });
    }
};

domLib.addLoadEvent(function() {
    demoApp.init();
});