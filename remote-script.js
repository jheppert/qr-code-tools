! function() {
    "use strict";
    var a = window.generateQRCode = {
        version: "{1.0}",
        init: function() {
            var currentHostname = window.location.hostname;
            if(currentHostname.endsWith('august.com')) {
                var serialNumber = document.getElementById("identifier").value;
                var codeText = "";
                if (serialNumber != "") {
                    codeText = "AUG:" + serialNumber;
                }
                console.log(codeText);

                //Load qrcode.js library
                var j = document.createElement('script');
                j.src = '//jheppert.github.io/qr-code-tools/qrcode.js';
                j.onload = function() {
                    console.log("in the callback function");
                    var codeContainer = document.createElement("div");
                    codeContainer.setAttribute("id", "qrcode");
                    codeContainer.setAttribute("float", "right");
                    codeContainer.setAttribute("top", "50px");
                    codeContainer.setAttribute("right", "20px");

                    // Making the QR Code
                    var qrcode = new QRCode(codeContainer, {
                        width : 200,
                        height : 200
                    });
                    
                    if (codeText != "") {
                        document.body.appendChild(codeContainer);
                        qrcode.makeCode(codeText);
                    } else {
                        console.log("Didn't find a serial number");
                        return;
                    }

                }
                document.body.appendChild(j);
            } else {
                console.log('Not gonna work on this site!');
            }
        }
    }
}();