console.log('inject');
var s = document.createElement('script');
s.src = chrome.extension.getURL('symbiote.js');
s.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);
