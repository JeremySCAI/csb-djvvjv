(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.bb5d4b08.png"},function(e,t,n){e.exports=n.p+"static/media/bud.14903a2a.png"},function(e,t,n){e.exports=n.p+"static/media/icon.fade391b.png"},function(e,t,n){e.exports=n.p+"static/media/popupemily.7e2ca13d.png"},function(e,t,n){e.exports=n.p+"static/media/manonbeach.2f05aee1.png"},function(e,t,n){e.exports=n.p+"static/media/emilyBackground.09d5abfb.jpg"},function(e,t,n){e.exports=n.p+"static/media/voice.dd736258.gif"},function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/audio.db57f379.gif"},,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),i=n.n(o),c=(n(20),n(5)),l=n(3),s=(n(21),n(8)),u=n.n(s),m=n(9),p=n.n(m),d=n(10),f=n.n(d),h=n(11),v=n.n(h),y=n(12),g=n.n(y),E=n(13),b=n.n(E),w=(n(22),n(14)),N=n.n(w),x=function(){return a.a.createElement("div",{className:"curve-bottom"},a.a.createElement("svg",{viewBox:"0 0 100 10",preserveAspectRatio:"none"},a.a.createElement("path",{d:"M0,0 Q50,10 100,0 T200,0 L100,10 L0,10",fill:"currentColor"})))},L=n(4),k=n(2);function j(){j=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),c=new B(r||[]);return a(i,"_invoke",{value:O(e,n,c)}),i}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var p="suspendedStart",d="suspendedYield",f="executing",h="completed",v={};function y(){}function g(){}function E(){}var b={};s(b,i,function(){return this});var w=Object.getPrototypeOf,N=w&&w(w(C([])));N&&N!==n&&r.call(N,i)&&(b=N);var x=E.prototype=y.prototype=Object.create(b);function L(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function k(e,t){function n(a,o,i,c){var l=m(e[a],e,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(u).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(e,r){function a(){return new t(function(t,a){n(e,r,t,a)})}return o=o?o.then(a,a):a()}})}function O(t,n,r){var a=p;return function(o,i){if(a===f)throw new Error("Generator is already running");if(a===h){if("throw"===o)throw i;return{value:e,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var l=P(c,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===p)throw a=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=f;var s=m(t,n,r);if("normal"===s.type){if(a=r.done?h:d,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a=h,r.method="throw",r.arg=s.arg)}}}function P(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=m(a,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function B(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function C(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return g.prototype=E,a(x,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:g,configurable:!0}),g.displayName=s(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,s(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},L(k.prototype),s(k.prototype,c,function(){return this}),t.AsyncIterator=k,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new k(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},L(x),s(x,l,"Generator"),s(x,i,function(){return this}),s(x,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=C,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;_(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}var O=function(e){var t=e.shouldStartPersona,n=e.onReady,a=e.onLimitReached,o=Object(r.useState)(null),i=Object(l.a)(o,2),s=i[0],u=i[1],m=Object(r.useState)(!1),p=Object(l.a)(m,2),d=p[0],f=p[1];return Object(r.useEffect)(function(){var e=document.createElement("script");e.src="https://app.sindarin.tech/PersonaClientPublic?apikey=430c62b9-d492-4ebc-8a2f-5a6aa40920fb",e.addEventListener("load",Object(c.a)(j().mark(function e(){var t;return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"430c62b9-d492-4ebc-8a2f-5a6aa40920fb",t=new window.PersonaClient("430c62b9-d492-4ebc-8a2f-5a6aa40920fb"),u(t);case 3:case"end":return e.stop()}},e)}))),document.head.appendChild(e)},[]),Object(r.useEffect)(function(){var e=function(){var e=Object(c.a)(j().mark(function e(){return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","user-"+Math.random().toString(36).substr(2,9));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();if(s&&t&&!d){f(!0);e().then(function(e){s.init(e,"Emily").then(function(){s.on("ready",function(){n()})}).catch(function(e){console.log("personaClient init error",e),/You have/gi.test(e)&&a()})})}},[s,t,n,d,a]),null},P=function(){return a.a.createElement("header",null,a.a.createElement("img",{src:u.a,alt:"company logo",id:"logo"}),a.a.createElement("div",{className:"hamburger-menu",onClick:function(){document.getElementById("navMenu").classList.toggle("active")}},a.a.createElement("div",{className:"bar"}),a.a.createElement("div",{className:"bar"}),a.a.createElement("div",{className:"bar"})),a.a.createElement("nav",{id:"navMenu"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"/jane"},"Jane")),a.a.createElement("li",null,a.a.createElement("a",{href:"/emily"},"Emily")),a.a.createElement("li",null,a.a.createElement("a",{href:"/peter"},"Peter")))))},S=function(e){var t=e.onButtonClick;return a.a.createElement("section",{className:"hero",style:{backgroundImage:"url(".concat(b.a,")")}},a.a.createElement("img",{src:p.a,alt:"bud",id:"bud"}),a.a.createElement("div",{className:"hero-text-wrapper"},a.a.createElement("div",{className:"action"},a.a.createElement("h1",null,"Discover the World with ",a.a.createElement("span",null,"Emily")),a.a.createElement("p",null,"Your voice-activated AI travel companion;"),a.a.createElement("p",null,"Speak your dream, discover the destination."),a.a.createElement("button",{className:"emily-button",onClick:function(){var e=document.querySelector(".page-content-wrapper");e&&e.classList.toggle("blurred");var n=document.getElementById("EmilyPopup");n&&("none"!==n.style.display&&n.style.display?n.style.display="none":n.style.display="block"),t()}},a.a.createElement("img",{src:f.a,alt:"Icon",id:"buttonIcon"}),"Speak to Emily"))),a.a.createElement("div",{id:"EmilyPopup",className:"popup",style:{display:"none"}},a.a.createElement("div",{className:"sound-wave"},a.a.createElement("div",{className:"wave"}),a.a.createElement("div",{className:"wave"}),a.a.createElement("div",{className:"wave"}),a.a.createElement("div",{className:"wave"}),a.a.createElement("div",{className:"wave"})),"You are now speaking to Emily.",a.a.createElement("p",{className:"microphone-note"},"(Please make sure you are using Google Chrome and you enable your microphone)")),a.a.createElement(x,null))},_=function(e){var t=e.title,n=e.description;return a.a.createElement("div",{className:"info-box"},a.a.createElement("img",{src:"./images/icon.png",alt:""}),a.a.createElement("h3",null,t),a.a.createElement("p",null,n))},B=function(){return a.a.createElement("section",{className:"info"},a.a.createElement("h1",null,"Check out the key features of Neural Voice:"),a.a.createElement("p",null,"Your voice activated Travel Agent will help your customers find their dream holiday"),a.a.createElement("div",{className:"info-flex"},a.a.createElement(_,{title:a.a.createElement(a.a.Fragment,null,a.a.createElement(L.a,{icon:k.d,size:"lg"}),"Intelligent Chat"),description:"Engage in intuitive conversations with Neural Voice."}),a.a.createElement(_,{title:a.a.createElement(a.a.Fragment,null,a.a.createElement(L.a,{icon:k.a,size:"lg"}),"Ideal Questions"),description:"AI-driven queries for personalised holiday experiences."}),a.a.createElement(_,{title:a.a.createElement(a.a.Fragment,null,a.a.createElement(L.a,{icon:k.c,size:"lg"}),"Perfect Location"),description:"Deliver destinations tailored to your customers preferences."}),a.a.createElement(_,{title:a.a.createElement(a.a.Fragment,null,a.a.createElement(L.a,{icon:k.b,size:"lg"}),"Easy Booking"),description:"Seamless hotel suggestions and booking assistance for everybody."})))},C=function(){return a.a.createElement("section",{className:"info-dump"},a.a.createElement("div",{className:"content"},a.a.createElement("h1",null,"Your AI Travel Guide: Dream, Explore, Book"),a.a.createElement("p",null,"Embark on a transformative travel journey with Neural Voice. More than an agent, it\u2019s your intuitive partner in crafting dream holidays. By engaging in dynamic conversations, it discovers not just where you want to go, but why."),a.a.createElement("p",null,"Neural Voice isn\u2019t confined to answering\u2014it asks, learns, and inspires. From serene beaches to vibrant cities, it deciphers your wanderlust, guiding you to destinations you'll adore."),a.a.createElement("p",null,"And when dreams become decisions, it effortlessly transitions you to booking, ensuring your imagined adventures become tangible itineraries. With Neural Voice, travel becomes an emotional exploration, not just a destination. Begin your journey.")),a.a.createElement("div",{className:"travel-image-box"},a.a.createElement("img",{src:g.a,alt:"Man on Beach",className:"travel-beach-image"})))},I=function(){return a.a.createElement("footer",null,a.a.createElement("div",{className:"reach"}),a.a.createElement("p",{id:"rights"},"All Rights Reserved \xa9 2023 Neural Voice"))},G=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(!1),c=Object(l.a)(i,2),s=c[0],u=c[1];return a.a.createElement("div",{className:"App"},a.a.createElement("svg",{width:"0",height:"0",style:{position:"absolute"}},a.a.createElement("defs",null,a.a.createElement("clipPath",{id:"curvedPath",clipPathUnits:"objectBoundingBox"},a.a.createElement("path",{d:"M 0,0 L 1,0 L 1,0.7 Q 0.5,1 0,0.8.5 Z"})))),a.a.createElement("div",{className:"page-content-wrapper ".concat(s?"blurred":"")},a.a.createElement(P,null),a.a.createElement(S,{onButtonClick:function(){u(!0),o(!0)}}),a.a.createElement(B,null),a.a.createElement(C,null),a.a.createElement(I,null)),s&&a.a.createElement("div",{className:"blur-overlay"}),s&&a.a.createElement("div",{id:"EmilyPopup",className:"popup"},a.a.createElement("button",{className:"close-btn",onClick:function(){return window.location.reload()}},"X"),a.a.createElement("div",{className:"popup-content-wrapper"},a.a.createElement("div",{className:"popup-content"},a.a.createElement("h2",null,"You're now chatting with ",a.a.createElement("span",null,"Emily")," ",a.a.createElement("img",{src:N.a,alt:"Voice",id:"Voice"})),a.a.createElement("p",{className:"microphone-note"},"(Please make sure you are using Google Chrome and you enable your microphone)")),a.a.createElement("img",{src:v.a,alt:"Emily",id:"PopupEmily"}))),a.a.createElement(O,{shouldStartPersona:n,onReady:function(){console.log("Persona ready!")},onLimitReached:function(){return console.log("Limit reached!")}}))};i.a.render(a.a.createElement(G,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.970b7f2d.chunk.js.map