! function() {
    "use strict";
    var a = window.generateQRCode = {
        version: "{1.0}",
        init: function() {
            var currentHostname = window.location.hostname;
            if(currentHostname.endsWith('august.com')) {
                console.log('Sweet');
                var serialNumber = document.getElementById("identifier").value;
                console.log(serialNumber);
            } else {
                console.log('Not gonna work on this site!');
            }
        }
    }
}();