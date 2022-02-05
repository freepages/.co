(function() {
  'use strict';
  let html = document.documentElement, navUserAgent = window.navigator.userAgent, webkit = navUserAgent.match(/WebKit/i);
  function iosUserAgent(name) {
    let iOS = navUserAgent.match(/iP|ad|od|hone/i);
    if (iOS) { name = ['ios']; }
    if (iOS && webkit &&  navUserAgent.match(/CriOS/i)) name.push('chrome');
    if (iOS && webkit &&  navUserAgent.match(/FxiOS/i)) name.push('firefox');
    if (iOS && webkit &&  navUserAgent.match(/OPiOS/i)) name.push('opera');
    if (iOS && webkit && !navUserAgent.match(/CriOS/i) && !navUserAgent.match(/FxiOS/i)) name.push('safari');
    try {
      if (iOS && webkit && navigator.brave.isBrave()) {
        name = ['ios brave'];
      }
    } catch(err){};
    if (name) return name.join(' '); else return null;
  }
  if (iosUserAgent()) {
    let names = iosUserAgent().split(' ');
    for (let i = 0; i < names.length; i++) {
      html.classList.add(names[i]);
    }
  }
}());
