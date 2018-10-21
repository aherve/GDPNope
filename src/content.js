(function(d, script) {
  script = d.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = chrome.runtime.getURL('src/nope.js');
  d.getElementsByTagName('head')[0].appendChild(script);

}(document));
