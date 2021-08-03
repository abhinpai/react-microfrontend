"use strict";(self.webpackChunkhero_component=self.webpackChunkhero_component||[]).push([[595],{595:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(985),i=n.n(r),a=n(379),o=n.n(a),c=n(795),s=n.n(c),u=n(569),l=n.n(u),f=n(565),d=n.n(f),p=n(216),h=n.n(p),m=n(589),v=n.n(m),g=n(995),b={};b.styleTagTransform=v(),b.setAttributes=d(),b.insert=l().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=h(),o()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;var x=({img:e,name:t,description:n})=>i().createElement("article",{className:"character"},i().createElement("img",{src:e,alt:t,loading:"lazy"}),i().createElement("div",null,i().createElement("h1",null,t),i().createElement("p",null,n)))},995:function(e,t,n){var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,".character{height:200px;width:200px;background-color:#000;min-height:200px;border-radius:10px;margin:1rem;position:relative;width:500px;max-width:500px;padding:2rem;color:white;cursor:pointer}.character:hover{transform:scale(1.1);transition:400ms ease-in}.character ::after{content:'';position:absolute;right:0;top:0;width:240px;height:100%;background:radial-gradient(ellipse 100% 100% at right center, transparent 80%, #000)}.character img{height:inherit;width:240px;position:absolute;right:0;top:0;height:100%;object-fit:cover}.character div{width:360px}.character div h1{font-family:'Marvel', sans-serif;font-size:40px}.character div p{width:300px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical}\n",""]),t.Z=i},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:function(e){var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var d=n(f),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(t[d].references++,t[d].updater(p)):t.push({identifier:f,updater:i(p,r),references:1}),o.push(f)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=n(a[o]);t[c].references--}for(var s=r(e,i),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:function(e){var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);