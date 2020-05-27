! function() {
    "use strict";
    var a = window.generateQRCode = {
        version: "{1.0}",
        init: function() {
            var currentHostname = window.location.hostname;
            if(currentHostname.endsWith('august.com')) {
                var serialNumber = document.getElementById("identifier").value;
                var codeText = "AUG:" + serialNumber;
                console.log(codeText);
                var j = document.createElement('script');
                j.src = '//jheppert.github.io/qr-code-tools/qrcode.js';
                j.onload = function() {
                    console.log("in the callback function");
                }
                document.body.appendChild(j);
            } else {
                console.log('Not gonna work on this site!');
            }
        }
    }
}();