/* global domLib */

"use strict";

var screenProportions = {

    init: function() {
        this.resolutions = domLib.objConverter(
            ["QVGA", "HVGA", "iP5", "nHD", "VGA", "WVGA", "SVGA", "XGA"]
        );
        this.deviceScreen = domLib.byId("deviceScreen");
        this.connectUp();
        this.orientation = "portrait";
        this.setScreenSize("QVGA");
        this.placeContent();
    },

    connectUp: function() {
        domLib.byId("orientation").addEventListener("click", domLib.bind(this, this.rotateScreen), false);
    },

    rotateScreen: function() {
        if (this.orientation === "portrait") {
            this.orientation = "landscape";
        } else {
            this.orientation = "portrait";
        }
        this.updateDeviceClasses();
    },

    // Change the src here to try out different apps
    placeContent: function() {
        this.urlArgs = location.href.split("?");
        if (this.urlArgs[1]) {
            this.deviceScreen.src = this.urlArgs[1];
            // check the other argument is on the list
            if( this.urlArgs[2] in this.resolutions ) {
                this.setScreenSize(this.urlArgs[2]);
                domLib.byId(this.urlArgs[2]).checked = true;
            }
        } else {
            this.deviceScreen.src = "apps/demoApp/index.html";
        }
    },

    setScreenSize: function(screenSize) {
        this.screenSize = screenSize;
        this.updateDeviceClasses();
    },

    updateDeviceClasses: function() {
        this.deviceScreen.className = "screen" + " " + this.orientation + " " + this.screenSize;
    }
};

domLib.addLoadEvent(function() {
    screenProportions.init();
});
