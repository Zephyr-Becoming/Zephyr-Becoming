(function(){var r=document.documentElement,k='tb-fs',t='tb-theme';
try{var f=localStorage.getItem(k);if(f)r.style.setProperty('--fs',f+'px');var h=localStorage.getItem(t);if(h)r.setAttribute('data-theme',h)}catch(e){}
window.fs=function(d){var c=parseInt(getComputedStyle(document.body).fontSize)||18;c=Math.max(14,Math.min(28,c+d));r.style.setProperty('--fs',c+'px');try{localStorage.setItem(k,c)}catch(e){}};
window.th=function(){var c=r.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');var n=c=='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem(t,n)}catch(e){}};
})();
