// var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

// // Internet Explorer 6-11
// var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
// var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// // Edge (based on chromium) detection
// var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);





if(isChrome){
    document.getElementById('predat').style.display = 'block'
} else{
    document.getElementById('predat').style.display = 'none';
}