'use strict';

var drugsjs = (function (opts){
   
    function Drugsjs (opts){
        this.host = opts.host || 'localhost';
    }

    Drugsjs.load = function (url, cb){
        this.loadScript(url, cb);
    }

    Drugsjs.loadScript = function (url, callback) {
        var script = document.createElement("script")
        script.type = "text/javascript";
 
        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }
        
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    return Drugsjs;

});

