/* global domLib */

"use strict";

var screenProportions = {

    init: function() {
        this.resolutions = ["QVGA", "HVGA", "iP5", "nHD", "VGA", "WVGA", "SVGA", "XGA"];
        this.screenFrame = domLib.byId("screenFrame");
        this.deviceScreen = domLib.byId("deviceScreen");
        this.connectUp();
        this.orientation = "portrait";
        this.setScreenSize("HVGA");
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
            if (this.urlArgs[2] && this.resolutions.indexOf(this.urlArgs[2])) {
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
        this.screenFrame.className = "screenFrame" + " " + this.orientation + " " + this.screenSize;
        this.deviceScreen.contentWindow.postMessage(
            "frameResize",
            "http://www.papersnail.co.uk"
        );
    }

};

domLib.addLoadEvent(function() {
    screenProportions.init();
});
