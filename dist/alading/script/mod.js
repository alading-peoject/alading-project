define("alading:app/script/mod",function(e,t,n){var e,r;!function(t){function n(t,n){function r(){clearTimeout(o)}if(!(t in l)){l[t]=!0;var a=document.createElement("script");if(n){var o=setTimeout(n,e.timeout);a.onerror=function(){clearTimeout(o),n()},"onload"in a?a.onload=r:a.onreadystatechange=function(){"loaded"!=this.readyState&&"complete"!=this.readyState||r()}}return a.type="text/javascript",a.src=t,i.appendChild(a),a}}function a(e,t,r){var a=o[e]||(o[e]=[]);a.push(t);var i,s=p[e]||p[e+".js"]||{},c=s.pkg;i=c?f[c].url:s.url||e,n(i,r&&function(){r(e)})}if(!e){var i=document.getElementsByTagName("head")[0],o={},s={},c={},l={},p={},f={};r=function(e,t){e=e.replace(/\.js$/i,""),s[e]=t;var n=o[e];if(n){for(var r=0,a=n.length;a>r;r++)n[r]();delete o[e]}},e=function(t){if(t&&t.splice)return e.async.apply(this,arguments);t=e.alias(t);var n=c[t];if(n)return n.exports;var r=s[t];if(!r)throw"[ModJS] Cannot find module `"+t+"`";n=c[t]={exports:{}};var a="function"==typeof r?r.apply(n,[e,n.exports,n]):r;return a&&(n.exports=a),n.exports},e.async=function(n,r,i){function o(t){for(var n=0,r=t.length;r>n;n++){var u=e.alias(t[n]);if(u in s){var d=p[u]||p[u+".js"];d&&"deps"in d&&o(d.deps)}else if(!(u in l)){l[u]=!0,f++,a(u,c,i);var d=p[u]||p[u+".js"];d&&"deps"in d&&o(d.deps)}}}function c(){if(0==f--){for(var a=[],i=0,o=n.length;o>i;i++)a[i]=e(n[i]);r&&r.apply(t,a)}}"string"==typeof n&&(n=[n]);var l={},f=0;o(n),c()},e.resourceMap=function(e){var t,n;n=e.res;for(t in n)n.hasOwnProperty(t)&&(p[t]=n[t]);n=e.pkg;for(t in n)n.hasOwnProperty(t)&&(f[t]=n[t])},e.loadJs=function(e){n(e)},e.loadCss=function(e){if(e.content){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e.content:t.innerHTML=e.content,i.appendChild(t)}else if(e.url){var n=document.createElement("link");n.href=e.url,n.rel="stylesheet",n.type="text/css",i.appendChild(n)}},e.alias=function(e){return e.replace(/\.js$/i,"")},e.timeout=5e3}}(this)});