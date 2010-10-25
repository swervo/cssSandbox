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

    aWindow.domLib = domLib;

})(window);