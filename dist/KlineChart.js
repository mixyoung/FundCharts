/*!
 * KlineChart
 * @version: 0.9.11
 * @author: Wayne(michealwayne@163.com)
 * @time: 2018~2022
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";function r(t){return Object.prototype.toString.call(t).replace(/\[object\s|\]/g,"")}function o(t){return"Object"===r(t)}function i(t){if(!t)return!1;for(var e in t)return!1;return!0}function a(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n);return t}function c(t){var e=t.toLowerCase();if(e&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)){if(4===e.length){for(var n="#",r=1;r<4;r++)n+=e.slice(r,r+1).concat(e.slice(r,r+1));e=n}var o=[];for(r=1;r<7;r+=2)o.push(parseInt("0x"+e.slice(r,r+2),16));return o}return[]}Object.defineProperty(e,"__esModule",{value:!0}),e.getExtremum=e.max=e.min=e.throwError=e.getLightColor=e.isTransparentColor=e.getColorRgba=e.getColorRgbArr=e.cloneArray=e.cloneObjDeep=e.each=e.isEmptyObj=e.isFunction=e.isObject=e.isString=e.isUndefined=e.isArray=e.type=void 0,e.type=r,e.isArray=function(t){return"Array"===r(t)},e.isUndefined=function(t){return void 0===t},e.isString=function(t){return"String"===r(t)},e.isObject=o,e.isFunction=function(t){return"Function"===r(t)},e.isEmptyObj=i,e.each=a,e.cloneObjDeep=function t(e,n){if(!o(e)||!o(n))return!1;for(var r in e)!o(n[r])||i(n[r])?n[r]=n[r]||e[r]:t(e[r],n[r]);return n},e.cloneArray=function(t,e){return a(t,(function(t,n){e[n]=t})),e},e.getColorRgbArr=c,e.getColorRgba=function(t,e){void 0===e&&(e=1);var n=c(t).join(","),r=""!==n;return"rgba("+(r?n:"0,0,0")+","+(r?e:0)+")"},e.isTransparentColor=function(t){return!!t&&t.replace(" ","").indexOf("0)")>-1},e.getLightColor=function(t,e){return void 0===e&&(e=0),c(t).map((function(t){var n=~~(t+t*e);return n>255?255:n}))},e.throwError=function(t,e,n){throw void 0===e&&(e=""),void 0===n&&(n=""),new Error("Error!"+t+".(FundCharts-"+e+" "+n+")")},e.min=function(t){return t.reduce((function(t,e){return Math.min(t,e)}))},e.max=function(t){return t.reduce((function(t,e){return Math.max(t,e)}))},e.getExtremum=function(t){for(var e=t[0],n=e,r=Math.max,o=Math.min,i=1,a=t.length;i<a;i++)e=r(e,t[i]),n=o(n,t[i]);return{max:e,min:n}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setContext=e.retinaScale=e.clearArc=e.drawPoint=e.drawDashLine=e.drawLine=void 0;var r=n(4),o=n(0);e.drawLine=function(t,e,n,r,o){t.beginPath(),t.moveTo(e,n),t.lineTo(r,o),t.closePath(),t.stroke()},e.drawDashLine=function(t,e,n,r,o,i){i=i||5;var a,c,s=~~((a=r-e,c=o-n,Math.sqrt(Math.pow(a,2)+Math.pow(c,2)))/i);t.beginPath();for(var u=0;u<s;u++)t[1&u?"lineTo":"moveTo"](e+(r-e)/s*u,n+(o-n)/s*u);t.closePath(),t.stroke()},e.drawPoint=function(t,e,n,r,o,i,a){t.beginPath(),t.strokeStyle=o||"#fff",t.lineWidth=void 0!==a?a:1,t.arc(e,n,i,0,2*Math.PI,!0),t.closePath(),t.fillStyle=r,t.fill(),a&&t.stroke()},e.clearArc=function(t,e,n,r){var o=.1;!function e(n,r,i){var a=i-o,c=Math.sqrt(i*i-a*a),s=n-a,u=r-c,f=2*a,l=2*c;o<=i&&(t.clearRect(s,u,f,l),o+=.1,e(n,r,i))}(e,n,r)},e.retinaScale=function(t,e){var n=window.devicePixelRatio||1;if(1===n)return!1;var r=t.width,o=t.height;return t.width=r*n,t.height=o*n,e.scale(n,n),t.style.width=r+"px",t.style.height=o+"px",n},e.setContext=function(t,e,n){(!t||e?t.$el:t.opts.Canvas||n)||o.throwError("no chart object to set context","setContext");var i,a=t.opts,c=a.width||500,s=a.height||500;if(e){var u=t.$el;if(u.style.webkitUserSelect="none",u.style.userSelect="none",o.isFunction(u.getContext))i=u;else{(i=document.createElement("canvas")).id=a.id+"Canvas";var f=a.width||r.getStyle(u,"width"),l=a.height||r.getStyle(u,"height");i.width=f,i.height=l,u.appendChild(i)}}else if(n){var h="undefined"==typeof wx?null:wx;if(!h||!o.isFunction(h.createCanvasContext))return o.throwError("no param {Object} Ctx","setContext"),!1;var d=h.createCanvasContext(a.id);i={info:"Weapp native canvas",width:c,height:s,getContext:function(){return d},draw:function(e){if(e)return d.draw(!0);h.drawCanvas({canvasId:a.id,actions:t.ctx.getActions()})}}}else{var p=a.Canvas;a.Canvas||o.throwError("no param {Object} Canvas","setContext"),i=p.createCanvas(c,s),a.handleOut&&a.handleOut(i)}t.canvas=i,t.ctx=i.getContext("2d"),t._chart={width:i.width,height:i.height}}},function(t,e,n){"use strict";e.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.__extends=function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},e.__rest=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},e.__decorate=function(t,e,n,o){var i,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(a<3?i(c):a>3?i(e,n,c):i(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},e.__param=function(t,e){return function(n,r){e(n,r,t)}},e.__metadata=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},e.__awaiter=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function c(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((r=r.apply(t,e||[])).next())}))},e.__generator=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},e.__createBinding=function(t,e,n,r){void 0===r&&(r=n);t[r]=e[n]},e.__exportStar=function(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||(e[n]=t[n])},e.__values=a,e.__read=c,e.__spread=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(c(arguments[e]));return t},e.__spreadArrays=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r},e.__await=s,e.__asyncGenerator=function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||c(t,e)}))})}function c(t,e){try{(n=o[t](e)).value instanceof s?Promise.resolve(n.value.v).then(u,f):l(i[0][2],n)}catch(t){l(i[0][3],t)}var n}function u(t){c("next",t)}function f(t){c("throw",t)}function l(t,e){t(e),i.shift(),i.length&&c(i[0][0],i[0][1])}},e.__asyncDelegator=function(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:s(t[r](e)),done:"return"===r}:o?o(e):e}:o}},e.__asyncValues=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=a(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}},e.__makeTemplateObject=function(t,e){Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e;return t},e.__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},e.__importDefault=function(t){return t&&t.__esModule?t:{default:t}},e.__classPrivateFieldGet=function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)},e.__classPrivateFieldSet=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var i=function(){return e.__assign=i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function a(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function s(t){return this instanceof s?(this.v=t,this):new s(t)}e.__assign=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(1),i=n(5),a=i.default.inBrowser,c=i.default.inWeapp,s=function(){function t(t){this.$el=null,this.drawer=null,this.canvas=null,this.ctx=null;var e=t.id,n=t.colors,o=t.data,c=t.datas;if(e&&(o||c)){a&&(this.$el=document.getElementById(e)),n&&(t.colors=n.concat(i.default.colors));var s=r.cloneObjDeep(i.default,t);o&&(s.datas=[o],delete s.data),this.opts=s}else r.throwError("no container id or datas in options","setConfig")}return t.prototype.update=function(t){t&&(t.data&&(t.datas=[t.data],delete t.data),this.opts=r.cloneObjDeep(this.opts,t)),this.drawer.draw(!0,this.opts.noAnimation)},t.prototype.destory=function(){this.drawer.removeEvents(),this.drawer.removeDatas()},t.prototype.initContext=function(){o.setContext(this,a,c),a&&(this.pixelRatio=o.retinaScale(this.canvas,this.ctx))},t}();e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getStyle=void 0,e.getStyle=function(t,e){var n,r=t.currentStyle?t.currentStyle[e]:null===(n=document.defaultView)||void 0===n?void 0:n.getComputedStyle(t,null).getPropertyValue(e),o=r&&r.match(/^(\d+)(\.\d+)?px$/);return o?+o[1]:void 0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="undefined"!=typeof wx&&void 0!==wx.getSystemInfo,o=r?2:1,i={id:"",inBrowser:"undefined"!=typeof window&&!r,inWeapp:r,backgroundColor:"rgba(0,0,0,0)",colors:["#fe5d4e","#43c2f7","#707ad9","#ffa61b","#64d290","#cf27bd"],duration:600,events:["touchstart","touchmove"],hoverLineColor:"#999",hoverHighlight:.5,grid:{yTickLength:5},bar:{margin:60/o},chartTop:0,chartLeft:50/o,chartRight:15,dash:{color:"#e2e2e2",length:3/o},font:{color:"#666",fontFamily:"Arial",fontSize:{x:"11px",y:"10px"}}};e.default=i},function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.animation=void 0,"undefined"!=typeof window&&(r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame);var o=function(){return void 0!==r?(o=function(){return r},r):function(t,e){setTimeout((function(){t(+new Date)}),e)}};e.animation=function(t){var e=t.duration||600,n=t.onProcess||function(){},r=t.onAnimationFinish||function(){},i=o(),a=null;i((function t(o){if(null===o)return n(1),r(),!1;if(null===a&&(a=o),o-a<e){var c=(o-a)/e;s=c,c=(s/=.5)<1?.5*Math.pow(s,3):.5*(Math.pow(s-2,3)+2),n(c),i(t,23)}else n(1),r();var s;return!0}),23)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDistance=e.getAngle=e.getRange=void 0,e.getRange=function(t){return t?t>2?4*Math.ceil(t/4):1.2*t:1},e.getAngle=function(t,e,n,r){var o=Math.atan2(n-t,e-r);return o<0?2*Math.PI+o:o},e.getDistance=function(t,e,n,r){return Math.sqrt(Math.pow(t-n,2)+Math.pow(e-r,2))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(1),i=n(6),a=function(){function t(t){this.yaxis={min:0,max:0,range:0,unit:0},this.xaxis={min:0,max:0,range:0,unit:0},this.xRate=0,this.xBasic=0,this.yRate=0,this.yBasic=0,this.drawPoint=o.drawPoint,this.chartjs=t}return t.prototype.getBasicData=function(t){var e,n,o=this.chartjs.opts,i=t||o.datas,a=o.range;return a?((r.isUndefined(a.min)||r.isUndefined(a.max))&&r.throwError('param range need params "min" and "max"',"setConfig"),e=a.min,n=a.max):i&&i.length&&r.each(i,(function(t){var o=r.getExtremum(t),i=o.max,a=o.min;e=void 0!==e&&e<a?e:a,n=n&&n>i?n:i})),[e||0,n||0]},t.prototype.clearCtn=function(t){var e=this.chartjs,n=e.opts,o=n.backgroundColor,i=e.ctx,a=e._chart.width,c=e._chart.height;i.beginPath();var s=(r.isTransparentColor(o)?i.clearRect:i.rect).bind(i);t?s(n.chartLeft-4,n.chartTop-5,a+1,c-16-n.chartTop):s(0,0,1e5,1e5),i.fillStyle=o,i.fill(),i.closePath()},t.prototype.drawDashs=function(t){var e=this.chartjs,n=e.opts,r=n.grid,i=n.dash,a=i.isSolid,c=n.dash.color,s=r.showGrid,u=r.xTickLength,f=r.yTickLength,l=e.ctx;l.save();var h=e._chart.width-n.chartRight+2,d=(e._chart.height-n.chartTop-30)/(f-1),p=(h-2-n.chartLeft)/(u-1),v=(f-1)*d+n.chartTop+5.5;if(!n.noDash){l.strokeStyle=c,l.beginPath(),l.lineWidth=1;for(var y=a?o.drawLine:o.drawDashLine,w=a?h-2:h,g=0;g<f;g++){var m=t||g*d+5+n.chartTop;y(l,n.chartLeft,m,w,m,i.length)}if(u){var x=n.chartTop+5;for(g=0;g<u;g++){var b=g*p+n.chartLeft-.5;y(l,b,v,b,x,i.length)}}}if(s){r.color&&(l.strokeStyle=r.color);var _=n.chartLeft-.5,j=e.drawer.zeroY||v;o.drawLine(l,_,n.chartTop,_,v),o.drawLine(l,_,j,h-2,j),l.stroke()}l.strokeStyle=c,l.restore()},t.prototype.drawTexts=function(t,e){var n=this.chartjs,r=n.opts,o=r.grid.yTickLength,i=r.font,a=n.ctx,c=r.xaxis,s=n._chart,u=s.width,f=s.height;if(r.handleTextX&&(t=r.handleTextX),r.handleTextY&&(e=r.handleTextY),a.lineWidth=1,a.textAlign="right",a.textBaseline="middle",a.font=i.fontSize.x+" "+i.fontFamily,a.fillStyle=i.color,t)t(a,c);else{var l=f-10;a.fillText(c[c.length-1],u-r.chartRight,l),a.textAlign="left",a.fillText(c[0],r.chartLeft,l)}a.font=i.fontSize.y+" "+i.fontFamily,a.textAlign="right";var h=this.yaxis;if(e)e(a,h);else for(var d=r.chartLeft-5,p=r.yaxisfunc||function(t){return t.toFixed(2)},v=0;v<o;v++){var y=h.min+v*h.unit;a.fillText(p(y),d,this.yRate*y+this.yBasic)}},t.prototype.drawHover=function(t,e){},t.prototype.setEvents=function(){var t=this,e=this.chartjs.canvas,n=this.chartjs.opts,r=n.inBrowser,o=n.events;if(!o||!r)return!1;var i={};o.forEach((function(n){var r=function(e){var r=~n.indexOf("touch")?e.touches[0]:e,o=r.target;return t.drawHover(r.clientX-o.offsetLeft,r.pageY-o.offsetTop),!1};e.addEventListener(n,r,!1),i[n]=r})),this.chartjs.opts.eventsCallbacks=i},t.prototype.removeEvents=function(){var t=this.chartjs.canvas,e=this.chartjs.opts,n=e.inBrowser,r=e.events,o=e.eventsCallbacks;return!(!r||!n)&&(r.forEach((function(e){var n=o[e];t.removeEventListener(e,n),o[e]=null})),this.chartjs.opts.eventsCallbacks=null,!0)},t.prototype.removeDatas=function(){var t=this.chartjs.opts;for(var e in t)t[e]=null;for(var e in this.chartjs)this.chartjs[e]=null;this.chartjs=null},t.prototype.setAnimation=function(t){var e=this.chartjs.opts,n=e.duration,r=e.onFinish;i.animation({duration:n,onProcess:t,onAnimationFinish:r})},t}();e.default=a},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=n(3),i=n(13),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.init=function(){this.initContext(),this.drawer=new i.default(this),this.drawer.init()},e}(o.default);e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=n(0),i=n(7),a=n(1),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.setDataset=function(){var t=this.chartjs,e=t.opts,n=e.grid.yTickLength,r=e.datas,a=[];o.each(r,(function(t){a.push.apply(a,t)}));var c,s,u=this.getBasicData([a]),f=u[0],l=u[1];e.range?(c=f,s=l-f):(c=(s=i.getRange(l-f))>2?Math.floor(f):f)+s<l&&(c=f),this.yaxis={min:c,max:c+s,range:s,unit:s/(n-1)};var h=this.yRate=(30-t._chart.height+e.chartTop)/s,d=this.yBasic=5-this.yaxis.max*h+e.chartTop,p=r.length;p=p>1?p:2,this.xaxis={min:0,max:p-1,range:p,unit:1};var v=this.xBasic=e.chartLeft+10,y=this.xRate=(t._chart.width-e.chartLeft-e.chartRight-20)/(p-1),w=[];1===r.length&&(r[1]=r[0]),o.each(r,(function(t,e){w.push({x:e*y+v,ymin:t[2]*h+d,ystart:t[0]*h+d,yend:t[1]*h+d,ymax:t[3]*h+d,value:t})})),t.dataset=w,e.barWidth||(e.barWidth=p<10?20:~~(.6*this.xRate),e.barWidth<1&&(e.barWidth=1))},e.prototype.drawUnit=function(t,e,n,r,o){var i,c,s,u=!1;e.yend<e.ystart?(o&&(u=!0),i=n[0],c=e.ystart,s=e.yend):(i=n[4],c=e.yend,s=e.ystart),t.fillStyle=t.strokeStyle=i,a.drawLine(t,e.x,e.ymin,e.x,c),a.drawLine(t,e.x,e.ymax,e.x,s),t.beginPath(),t[u?"rect":"fillRect"](e.x-r/2,s,r,c-s),t.closePath(),t.stroke()},e.prototype.drawLine=function(t){void 0===t&&(t=1);var e=this.chartjs,n=e.opts,r=e.ctx,o=e.dataset;r.lineWidth=1;for(var i=0,a=t*o.length;i<a;i++){var c=o[i];this.drawUnit(r,c,n.colors,n.barWidth,n.upHollow)}r.save()},e.prototype.draw=function(t,e){var n=this,r=this.chartjs.opts;this.clearCtn(!t),this.drawDashs(),t&&(this.setDataset(),this.drawTexts()),e||!r.inBrowser&&!r.inWeapp?(this.drawLine(1),r.onFinish&&r.onFinish()):this.setAnimation((function(t){n.clearCtn(!0),n.drawDashs(),n.drawLine(t),r.onAnimation&&r.onAnimation.call(n,t),r.inWeapp&&n.chartjs.ctx.draw(!0)}))},e.prototype.drawHover=function(t,e){var n=this.chartjs,r=n.opts;this.draw(r.inWeapp||null,!0);var o=n.ctx;if(t>n._chart.width-r.chartRight||t<r.chartLeft||e<r.chartTop||e>n._chart.height-(35-r.chartTop))return!1;var i=Math.round((t-this.xBasic)/this.xRate);if(!n.dataset[i])return!1;var c=Math.round(n.dataset[i].x)+.3;return o.save(),o.strokeStyle=r.hoverLineColor,o.lineWidth=.5,a.drawLine(o,r.chartLeft+.3,e,n._chart.width-14.7,e),a.drawLine(o,c,6+r.chartTop,c,n._chart.height-25),r.hover&&r.hover.call(n,i,[r.datas[i]],r.xaxis[i],t,e),o.restore(),r.inWeapp&&n.canvas.draw(!0),i},e.prototype.init=function(){var t=this.chartjs.opts,e=t.noAnimation,n=t.inWeapp;this.draw(!0,e),this.setEvents(),n&&this.chartjs.canvas.draw()},e}(n(8).default);e.default=c}])}));