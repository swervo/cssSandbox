domLib.addLoadEvent(function() {
    screenProportions.init();
});

var screenProportions = {

    init: function() {
        this.deviceScreen = domLib.byId("deviceScreen");
        this.placeContent();
        this.connectUp();
        this.orientation = "portrait";
        this.setScreenSize("QVGA");
    },

    connectUp: function() {
        domLib.byId("orientation").addEventListener('click', domLib.bind(this, this.rotateScreen), false);
    },

    rotateScreen: function() {
        if (this.orientation === "portrait") {
            this.orientation = "landscape"
        } else {
            this.orientation = "portrait"
        };
        this.updateDeviceClasses();
    },

    // Change the src here to try out different apps
    placeContent: function() {
        this.urlArgs = location.href.split("?");
        // if using locally comment out the line below
        this.deviceScreen.src = this.urlArgs[1] ? this.urlArgs[1] : "apps/demoApp/index.html";
        // if using locally uncomment out the line below and replace with path to your app
        // eg. this.deviceScreen.src = "the/path/to/your/app.html"
        // this.deviceScreen.src = "apps/demoApp/index.html";
    },

    setScreenSize: function(screenSize) {
        console.log("setting screen size");
        this.screenSize = screenSize;
        this.updateDeviceClasses();
    },

    updateDeviceClasses: function() {
        this.deviceScreen.className = "screen" + " " + this.orientation + " " + this.screenSize;
    }
}
