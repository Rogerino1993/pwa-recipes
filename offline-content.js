(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{410:function(e,n,a){"use strict";a.r(n),a.d(n,"init",(function(){return i})),a.d(n,"removePageFromOfflineContent",(function(){return s}));var t=a(5),r=a.n(t),o=(a(411),a(412),a(413),a(30)),c=a(136),i=function(){var e,n,a;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return window.removePageFromOfflineContent=s,e=document.querySelector(".offline-content-title"),n=document.querySelector(".offline-content"),a=["/cart-abandon-notification/","/offline-requests/","/push-examples/"].map((function(e){var a,t,c,i;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.a.awrap(Object(o.a)(e));case 2:return(a=s.sent)&&(t=Object(o.h)(a),c=Object(o.g)(a.url),i='<paper-icon-item id="'.concat(t,'" class="offline-available-page">\n                    <paper-icon-button class="offline-available-pages-icon" tabIndex="-1" icon="offline-pin"></paper-icon-button>\n                    <div class="avatar" style="background-image: url(').concat(e,'favicon/android-chrome-192x192.png)" slot="item-icon"></div>\n                    <a href="').concat(e,'" aria-label="Visit this cached page" style="max-width: 72%;">\n                        <paper-item-body two-line>\n                            <div>').concat(e,"</div>\n                            <div secondary>").concat(c,'</div>\n                        </paper-item-body>\n                    </a>\n                    <paper-icon-button class="cache-delete-button" onclick=\'window.removePageFromOfflineContent("').concat(e,'", "').concat(t,'")\' icon="delete" alt="Remove page from the cache" aria-label="Remove this page from the cache"></paper-icon-button>\n                </paper-icon-item>'),n.innerHTML+=i),s.abrupt("return",Promise.resolve(e));case 5:case"end":return s.stop()}}))})),t.next=7,r.a.awrap(Promise.all(a));case 7:t.sent,document.querySelectorAll(".offline-available-page").length?e.innerHTML="Offline available pages":(e.innerHTML="No offline pages available 🤷‍♂",n.remove());case 9:case"end":return t.stop()}}))},s=function(e,n){var a,t,i;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.a.awrap(Object(o.e)(e));case 2:return a=s.sent,s.next=5,r.a.awrap(navigator.serviceWorker.getRegistration(e));case 5:if(t=s.sent,i=!1,!t){s.next=11;break}return s.next=10,r.a.awrap(t.unregister());case 10:i=s.sent;case 11:if(i){s.next=15;break}return console.warn("There was an error while unregistering the service worker at ".concat(e," - registration: ").concat(t)),Object(c.a)("There was an error while removing this page 😕 Try again later."),s.abrupt("return");case 15:if(a){s.next=19;break}return console.warn("There was an error while removing ".concat(e," from the cache!")),Object(c.a)("There was an error while removing this page 😕 Try again later."),s.abrupt("return");case 19:Object(o.f)(document.getElementById(n)),Object(c.a)("<strong>".concat(e,'</strong> is no longer available offline! <div style="flex: 1"></div>'));case 21:case"end":return s.stop()}}))}}}]);