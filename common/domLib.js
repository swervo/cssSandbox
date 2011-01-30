(function(aWindow) {
    var domLib = {};

    domLib.byId = function(aId) {
        return document.getElementById(aId);
    };

    domLib.bind = function(context, func) {
        return function() {
            return func.apply(context, arguments);
        };
    };

    domLib.addLoadEvent = function(aFunc, context) {
        var oldOnload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = aFunc;
        } else {
            window.onload = function() {
                oldOnload();
                aFunc();
            }
        }
    };
    
    // adapted from http://snook.ca/archives/javascript/testing_for_a_v
    domLib.objConverter = function (a) {
        var o = {};
        for(var i = 0; i < a.length; i++) {
            o[a[i]] = "";
        }
        return o;
    };

    aWindow.domLib = domLib;

})(window);