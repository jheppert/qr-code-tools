javascript: (function() {
    function loadScript(a, b) {
        var c = document.createElement('script'),
            d = document.getElementsByTagName('head')[0],
            e = !1;
        c.type = 'text/javascript', c.src = a, c.onload = c.onreadystatechange = function() {
            e || this.readyState && 'loaded' != this.readyState && 'complete' != this.readyState || (e = !0, b())
        }, d.appendChild(c)
    }
    loadScript('//jheppert.github.io/qr-code-tools/remote-script.js?' + new Date().getMilliseconds(), function() {
        editDeskArticle.init()
    });

})();