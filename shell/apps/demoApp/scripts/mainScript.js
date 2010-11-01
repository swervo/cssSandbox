domLib.addLoadEvent(function() {
    demoApp.init();
});

var demoApp = {

    init: function() {
        this.connectUp();
    },

    connectUp: function() {
        var toArray = function (obj) {
            var array = [];
            // taken from solution offerred by CMS - http://stackoverflow.com/users/5445/cms
            // to question - http://stackoverflow.com/questions/2735067/
            // iterate backwards ensuring that length is an UInt32
            for (var i = obj.length >>> 0; i--;) {
                array[i] = obj[i];
            }
            return array;
        }
        var all = toArray(document.body.getElementsByTagName('div'));
        all.forEach(function(node) { 
            node.addEventListener('click', function(e) {
                alert("A click on " + e.target.innerText);
            })
        });
    }


}