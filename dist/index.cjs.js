"use strict";function e(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))}function t(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(u=0)),u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var n,r={};n={get exports(){return r},set exports(e){r=e}},function(e){var t=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var n,r,o=t(e).toLowerCase();return(n="application/font-woff",r="image/jpeg",{woff:n,woff2:n,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:r,jpeg:r,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[o]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){var t=3e4;return a.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise((function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=u,o.ontimeout=c,o.responseType="blob",o.timeout=t,o.open("GET",e,!0),o.send(),a.impl.options.imagePlaceholder){var i=a.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}function u(){if(4===o.readyState)if(200===o.status){var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(o.response)}else r?n(r):s("cannot fetch resource: "+e+", status: "+o.status)}function c(){r?n(r):s("timeout of "+t+"ms occured while fetching resource: "+e)}function s(e){console.error(e),n("")}}))},uid:(e=0,function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))},width:function(e){var t=n(e,"border-left-width"),r=n(e,"border-right-width");return e.scrollWidth+t+r},height:function(e){var t=n(e,"border-top-width"),r=n(e,"border-bottom-width");return e.scrollHeight+t+r}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),r=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,t,i){return u()?Promise.resolve(e):Promise.resolve(e).then(r).then((function(n){var r=Promise.resolve(e);return n.forEach((function(e){r=r.then((function(n){return o(n,e,t,i)}))})),r}));function u(){return!n(e)}},shouldProcess:n,impl:{readUrls:r,inline:o}};function n(t){return-1!==t.search(e)}function r(n){for(var r,o=[];null!==(r=e.exec(n));)o.push(r[1]);return o.filter((function(e){return!t.isDataUrl(e)}))}function o(e,n,r,o){return Promise.resolve(n).then((function(e){return r?t.resolveUrl(e,r):e})).then(o||t.getAndEncode).then((function(e){return t.dataAsUrl(e,t.mimeType(n))})).then((function(r){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+t.escape(e)+")(['\"]?\\))","g")}(n),"$1"+r+"$3")}))}}(),o=function(){return{resolveAll:function(){return e().then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(t.asArray(document.styleSheets)).then((function(e){var n=[];return e.forEach((function(e){try{t.asArray(e.cssRules||[]).forEach(n.push.bind(n))}catch(t){console.log("Error while reading CSS rules from "+e.href,t.toString())}})),n})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),i=function(){return{inlineAll:function n(o){return o instanceof Element?i(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(t.asArray(o.childNodes).map((function(e){return n(e)})))})):Promise.resolve(o);function i(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}},impl:{newImage:e}};function e(e){return{inline:function(n){return t.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(n||t.getAndEncode).then((function(n){return t.dataAsUrl(n,t.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}}}(),u={imagePlaceholder:void 0,cacheBust:!1},a={toSvg:c,toPng:function(e,t){return s(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return s(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,n){return s(e,n||{}).then(t.canvasToBlob)},toPixelData:function(e,n){return s(e,n||{}).then((function(n){return n.getContext("2d").getImageData(0,0,t.width(e),t.height(e)).data}))},impl:{fontFaces:o,images:i,util:t,inliner:r,options:{}}};function c(e,n){return function(e){void 0===e.imagePlaceholder?a.impl.options.imagePlaceholder=u.imagePlaceholder:a.impl.options.imagePlaceholder=e.imagePlaceholder,void 0===e.cacheBust?a.impl.options.cacheBust=u.cacheBust:a.impl.options.cacheBust=e.cacheBust}(n=n||{}),Promise.resolve(e).then((function(e){return l(e,n.filter,!0)})).then(f).then(h).then((function(e){return n.bgcolor&&(e.style.backgroundColor=n.bgcolor),n.width&&(e.style.width=n.width+"px"),n.height&&(e.style.height=n.height+"px"),n.style&&Object.keys(n.style).forEach((function(t){e.style[t]=n.style[t]})),e})).then((function(r){return function(e,n,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(t.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+n+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(r,n.width||t.width(e),n.height||t.height(e))}))}function s(e,n){return c(e,n).then(t.makeImage).then(t.delay(100)).then((function(r){var o=function(e){var r=document.createElement("canvas");if(r.width=n.width||t.width(e),r.height=n.height||t.height(e),n.bgcolor){var o=r.getContext("2d");o.fillStyle=n.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(e);return o.getContext("2d").drawImage(r,0,0),o}))}function l(e,n,r){return r||!n||n(e)?Promise.resolve(e).then((function(e){return e instanceof HTMLCanvasElement?t.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(r){return function(e,n,r){var o=e.childNodes;return 0===o.length?Promise.resolve(n):i(n,t.asArray(o),r).then((function(){return n}));function i(e,t,n){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return l(t,n)})).then((function(t){t&&e.appendChild(t)}))})),r}}(e,r,n)})).then((function(n){return function(e,n){return n instanceof Element?Promise.resolve().then(r).then(o).then(i).then(u).then((function(){return n})):n;function r(){function r(e,n){function r(e,n){t.asArray(e).forEach((function(t){n.setProperty(t,e.getPropertyValue(t),e.getPropertyPriority(t))}))}e.cssText?n.cssText=e.cssText:r(e,n)}r(window.getComputedStyle(e),n.style)}function o(){function r(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var u=t.uid();n.className=n.className+" "+u;var a=document.createElement("style");a.appendChild(c(u,r,o)),n.appendChild(a)}function c(e,n,r){var o="."+e+":"+n,i=r.cssText?u(r):a(r);return document.createTextNode(o+"{"+i+"}");function u(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function a(e){return t.asArray(e).map(n).join("; ")+";";function n(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}}[":before",":after"].forEach((function(e){r(e)}))}function i(){e instanceof HTMLTextAreaElement&&(n.innerHTML=e.value),e instanceof HTMLInputElement&&n.setAttribute("value",e.value)}function u(){n instanceof SVGElement&&(n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n instanceof SVGRectElement&&["width","height"].forEach((function(e){var t=n.getAttribute(e);t&&n.style.setProperty(e,t)})))}}(e,n)})):Promise.resolve()}function f(e){return o.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function h(e){return i.inlineAll(e).then((function(){return e}))}n.exports=a}();var o=r,i=function(e,t){var n="";n=e.indexOf(",")>=0?e.split(",")[1]:e;for(var r=window.atob(n),o=new ArrayBuffer(r.length),i=new Uint8Array(o),u=0;u<r.length;u++)i[u]=r.charCodeAt(u);return new Blob([o],{type:t})};function u(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var n=t.getContext("2d");return null==n||n.drawImage(e,0,0,e.width,e.height),t.toDataURL("image/png").split(",")[1]}exports.copy=function(n){return new Promise((function(r,a){return e(void 0,void 0,void 0,(function(){var c,s,l,f,h,p,d,g;return t(this,(function(m){switch(m.label){case 0:return document.hasFocus()?"string"==typeof n&&/^https?:\/\//.test(n)?((c=new Image).crossOrigin="anonymous",c.src=n+"?="+Math.random(),c.onload=function(){return e(this,void 0,void 0,(function(){var e,n,o;return t(this,(function(t){switch(t.label){case 0:e=i(u(c),"image/png"),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,navigator.clipboard.write([new ClipboardItem((o={},o["image/png"]=e,o))])];case 2:return t.sent(),r("copy success"),[3,4];case 3:return n=t.sent(),a(n),[3,4];case 4:return[2]}}))}))},[3,16]):[3,1]:[2,r("无权限")];case 1:if("string"!=typeof n)return[3,6];f=i(n,"image/png"),m.label=2;case 2:return m.trys.push([2,4,,5]),[4,navigator.clipboard.write([new ClipboardItem((p={},p["image/png"]=f,p))])];case 3:return m.sent(),r("copy success"),[3,5];case 4:return s=m.sent(),a(s),[3,5];case 5:return[3,16];case 6:if("IMG"!==n.nodeName)return[3,11];f=i(u(n),"image/png"),m.label=7;case 7:return m.trys.push([7,9,,10]),[4,navigator.clipboard.write([new ClipboardItem((d={},d["image/png"]=f,d))])];case 8:return m.sent(),r("copy success"),[3,10];case 9:return l=m.sent(),a(l),[3,10];case 10:return[3,16];case 11:return[4,o.toBlob(n)];case 12:f=m.sent(),m.label=13;case 13:return m.trys.push([13,15,,16]),[4,navigator.clipboard.write([new ClipboardItem((g={},g["image/png"]=f,g))])];case 14:return m.sent(),r("copy success"),[3,16];case 15:return h=m.sent(),a(h),[3,16];case 16:return[2]}}))}))}))};
