(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{184:function(e,n,t){"use strict";t.r(n),t.d(n,"navigationTabSelected",(function(){return p})),t.d(n,"animatePageEnter",(function(){return b})),t.d(n,"animatePageLeave",(function(){return m})),t.d(n,"renderHtmlForTabSelected",(function(){return v}));var a=t(14),r=t.n(a),o=t(50),i=t(183),c=t(74),s=t.e(4).then(t.bind(null,408)),l=t.e(6).then(t.bind(null,409)),u=t.e(5).then(t.bind(null,410)),f=document.querySelector("main"),d=document.querySelector("#ios-install-banner-dismiss-button"),p=function(e){var n;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.detail.item.getAttribute("data-navigate-to"),t.next=3,r.a.awrap(b(0));case 3:return v(n),t.next=6,r.a.awrap(m(90));case 6:case"end":return t.stop()}}))},b=function(e){return new Promise((function(n,t){!function e(t){t<=90?(f.style.transform="rotateX(".concat(t,"deg)"),t+=5,requestAnimationFrame(e.bind(void 0,t))):(f.style.transform="rotateX(90deg)",n(!0))}(e)}))},m=function(e){return new Promise((function(n,t){!function e(t){t>=0?(f.style.transform="rotateX(".concat(t,"deg)"),t-=5,requestAnimationFrame(e.bind(void 0,t))):(f.style.transform="rotateX(0deg)",n(!0))}(e)}))},v=function(e){var n,t,a,c,p;return r.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:b.t0=e,b.next="apps"===b.t0?3:"offline-content"===b.t0?7:"info"===b.t0?11:15;break;case 3:return b.next=5,r.a.awrap(s);case 5:return n=b.sent,b.abrupt("break",15);case 7:return b.next=9,r.a.awrap(l);case 9:return n=b.sent,b.abrupt("break",15);case 11:return b.next=13,r.a.awrap(u);case 13:return n=b.sent,b.abrupt("break",15);case 15:if(f.innerHTML=n.default,"apps"!==e){b.next=23;break}o.c||(o.d?(d.addEventListener("click",i.dismissInstallPwaButtons),(t=document.querySelector("#ios-install-banner"))&&t.focus()):document.querySelector(".install-pwa-card").hidden=!1),document.querySelectorAll(".install-pwa-button").forEach((function(e){return e.addEventListener("click",i.installPwa)})),document.querySelector(".install-pwa-dismiss-button").addEventListener("click",i.dismissInstallPwaButtons),navigator.onLine||Object(i.markOfflineAvailableContent)(),b.next=33;break;case 23:if("offline-content"!==e){b.next=33;break}return window.removePageFromOfflineContent=w,a=document.querySelector(".offline-content-title"),c=document.querySelector(".offline-content"),p=["/cart-abandon-notification/","/offline-requests/","/push-examples/"].map((function(e){var n,t,a,i;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.a.awrap(Object(o.a)(e));case 2:return(n=s.sent)&&(t=Object(o.h)(n),a=Object(o.g)(n.url),i='<paper-icon-item id="'.concat(t,'" class="offline-available-page">\n                        <paper-icon-button class="offline-available-pages-icon" tabIndex="-1" icon="offline-pin"></paper-icon-button>\n                        <div class="avatar" style="background-image: url(').concat(e,'favicon/android-chrome-192x192.png)" slot="item-icon"></div>\n                        <a href="').concat(e,'" aria-label="Visit this cached page" style="max-width: 72%;">\n                            <paper-item-body two-line>\n                                <div>').concat(e,"</div>\n                                <div secondary>").concat(a,'</div>\n                            </paper-item-body>\n                        </a>\n                        <paper-icon-button class="cache-delete-button" onclick=\'window.removePageFromOfflineContent("').concat(e,'", "').concat(t,'")\' icon="delete" alt="Remove page from the cache" aria-label="Remove this page from the cache"></paper-icon-button>\n                    </paper-icon-item>'),c.innerHTML+=i),s.abrupt("return",Promise.resolve(e));case 5:case"end":return s.stop()}}))})),b.next=31,r.a.awrap(Promise.all(p));case 31:b.sent,document.querySelectorAll(".offline-available-page").length?a.innerHTML="Offline available pages":(a.innerHTML="No offline pages available 🤷‍♂",c.remove());case 33:document.querySelector("main > h2").focus();case 34:case"end":return b.stop()}}))},w=function(e,n){var t,a,i;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.a.awrap(Object(o.e)(e));case 2:return t=s.sent,s.next=5,r.a.awrap(navigator.serviceWorker.getRegistration(e));case 5:if(a=s.sent,i=!1,!a){s.next=11;break}return s.next=10,r.a.awrap(a.unregister());case 10:i=s.sent;case 11:if(i){s.next=15;break}return console.warn("There was an error while unregistering the service worker at ".concat(e," - registration: ").concat(a)),Object(c.a)("There was an error while removing this page 😕 Try again later."),s.abrupt("return");case 15:if(t){s.next=19;break}return console.warn("There was an error while removing ".concat(e," from the cache!")),Object(c.a)("There was an error while removing this page 😕 Try again later."),s.abrupt("return");case 19:Object(o.f)(document.getElementById(n)),Object(c.a)("".concat(e," is no longer available offline!"));case 21:case"end":return s.stop()}}))}}}]);