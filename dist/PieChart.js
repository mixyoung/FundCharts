/*!
 * 
 *   PieChart
 *   @version: 0.9.2
 *   @author: Micheal Wayne(michealwayne@163.com)
 *   @build time: 2018-11-22
 *   @update time: 2019-08-23
 * 
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e,n){"use strict";function o(t){return Object.prototype.toString.call(t).replace(/\[object\s|\]/g,"")}function r(t){return"Object"===o(t)}e.__esModule=!0,e.type=o,e.isArray=function(t){return"Array"===o(t)},e.isString=function(t){return"String"===o(t)},e.isObject=r,e.isFunction=function(t){return"Function"===o(t)},e.each=function(t,e){for(var n=0,o=t.length;n<o;n++)e(t[n],n)},e.cloneObjDeep=function t(e,n){if(!r(e)||!r(n))return!1;for(var o in e)!r(n[o])||i[o]?n[o]=n[o]||e[o]:t(e[o],n[o]);return n},e.isEmptyObj=i,e.getColorRgb=a,e.Lighting=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return a(t).map(function(t){return(t+=t*e)>255?255:t})};e.cloneArray=function(t,e){return t.map(function(t,n){e[n]=t}),e};function i(t){if(!t)return!1;for(var e in t)return!1;return!0}function a(t){var e=t.toLowerCase();if(e&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)){if(4===e.length){for(var n="#",o=1;o<4;o++)n+=e.slice(o,o+1).concat(e.slice(o,o+1));e=n}for(var r=[],i=1;i<7;i+=2)r.push(parseInt("0x"+e.slice(i,i+2)));return r}return e}},function(t,e,n){"use strict";e.__esModule=!0,e.drawLine=function(t,e,n,o,r){t.beginPath(),t.moveTo(e,n),t.lineTo(o,r),t.closePath(),t.stroke()},e.drawDashLine=function(t,e,n,o,r,i){i=i||5;var a=(c=o-e,u=r-n,Math.sqrt(Math.pow(c,2)+Math.pow(u,2))),s=Math.floor(a/i);var c,u;t.beginPath();for(var f=0;f<s;f++)t[f%2==0?"moveTo":"lineTo"](e+(o-e)/s*f,n+(r-n)/s*f);t.closePath(),t.stroke()},e.drawPoint=function(t,e,n,o,r,i,a){t.beginPath(),t.strokeStyle=r||"#fff",t.lineWidth=void 0!==a?a:1,t.arc(e,n,i,0,2*Math.PI,!0),t.closePath(),t.fillStyle=o,t.fill(),a&&t.stroke()},e.retinaScale=function(t,e){var n=window.devicePixelRatio||1;if(1===n)return!1;var o=t.height,r=t.width;return t.height=o*n,t.width=r*n,e.scale(n,n),t.style.width=r+"px",t.style.height=o+"px",n},e.setContext=function(t,e,n){if(!t||e?!t.$el:!t.opts.Canvas&&!n)throw new Error("Error!no chart object to set context.(FundCharts-setContext)");var r=void 0,i=t.opts.width||500,a=t.opts.height||500;if(e&&!n){var s=t.$el;if(s.style.webkitUserSelect="none",s.style.userSelect="none","function"==typeof s.getContext)r=s;else{(r=document.createElement("canvas")).id=t.opts.id+"Canvas";var c=t.opts.width||(0,o.getStyle)(s,"width"),u=t.opts.height||(0,o.getStyle)(s,"height");r.width=c,r.height=u,s.appendChild(r)}}else if(n){if(!wx||"function"!=typeof wx.createCanvasContext)throw new Error("Error! no param {Object} Ctx.(FundCharts-setContext, not find options)");var f=wx.createCanvasContext(t.opts.id);r={info:"Weapp native canvas",width:i,height:a,getContext:function(){return f},draw:function(e){if(e)return f.draw(!0);wx.drawCanvas({canvasId:t.opts.id,actions:t.ctx.getActions()})}}}else{var l=t.opts.Canvas;if(!t.opts.Canvas)throw new Error("Error! no param {Object} Canvas.(FundCharts-setContext, not find options)");r=l.createCanvas(i,a),t.opts.handleOut&&t.opts.handleOut(r)}t.canvas=r,t.ctx=r.getContext("2d"),t._chart={width:r.width,height:r.height}};var o=n(3)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n(1),i=n(4),a=function(){function t(t){this.$el=null,this.drawer=null,this.canvas=null,this.ctx=null;var e=t.id;if(!e)throw i.Errors.contain;i.Config.inBrowser&&!i.Config.inWeapp&&(this.$el=document.getElementById(e)),t.colors&&(t.colors=t.colors.concat(i.Config.colors)),(t=o.cloneObjDeep(i.Config,t)).data&&(t.datas=[t.data],delete t.data),this.opts=t}return t.prototype.update=function(t){if(!t)return!1;t.data&&(t.datas=[t.data],delete t.data),this.opts=o.cloneObjDeep(this.opts,t),this.drawer.draw(!0)},t.prototype._init=function(){r.setContext(this,i.Config.inBrowser,i.Config.inWeapp),i.Config.inBrowser&&!i.Config.inWeapp&&(this.pixelRatio=r.retinaScale(this.canvas,this.ctx))},t}();e.default=a},function(t,e,n){"use strict";e.__esModule=!0,e.getStyle=function(t,e){var n=t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e),o=n&&n.match(/^(\d+)(\.\d+)?px$/);return o?Number(o[1]):void 0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Errors={contain:function(){return new Error("Error!no container id in options.(FundChart)")}};var o="undefined"!=typeof wx&&void 0!==wx.getSystemInfo,r=o?2:1;e.Config={inBrowser:"undefined"!=typeof window,inWeapp:o,backgroundColor:"#fff",colors:["#fe5d4e","#43c2f7","#707ad9","#ffa61b","#64d290","#cf27bd"],events:["touchstart","touchmove"],hoverLineColor:"#999",hoverHighlight:1,bar:{margin:60/r},chartTop:0,chartLeft:50/r,chartRight:15,dash:{color:"#e2e2e2",length:3/r},font:{color:"#666",fontFamily:"Arial",fontSize:{x:"11px",y:"10px"}}}},function(t,e,n){"use strict";e.__esModule=!0,e.Animation=function(t){t.duration=t.duration||600;var e=23,n=r(),o=null;n(function r(i){if(null===i)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());null===o&&(o=i);if(i-o<t.duration){var a=(i-o)/t.duration;s=a,a=(s/=.5)<1?.5*Math.pow(s,3):.5*(Math.pow(s-2,3)+2),t.onProcess&&t.onProcess(a),n(r,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish();var s},e)};var o=void 0;"undefined"!=typeof window&&(o=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame);var r=function(){return void 0!==o?(r=function(){return o},o):function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t){this.chartjs=t}return t.prototype.clearCtn=function(){var t=this.chartjs.ctx;t.beginPath(),t.rect(0,0,1e5,1e5),t.fillStyle=this.chartjs.opts.backgroundColor,t.fill(),t.closePath()},t.prototype.getAngle=function(t,e,n,o){var r=Math.atan2(n-t,e-o);return r<0?2*Math.PI+r:r},t.prototype.drawHover=function(t,e){},t.prototype.setEvents=function(){var t=this,e=this.chartjs.canvas,n=this.chartjs.opts,o=n.events;if(!o||!n.inBrowser)return!1;o.forEach(function(n){e.addEventListener(n,function(e){var o=~n.indexOf("touch")?e.touches[0]:e,r=o.clientX,i=o.pageY-o.target.offsetTop;return t.drawHover(r,i),!1},!1)})},t}();e.default=o},,,,,,,function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),a=n(15),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.init=function(){this._init(),this.drawer=new a.default(this),this.drawer.init()},e}(i.default);e.default=s},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(5),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.origin=null,e.centerArr=null,e}return r(e,t),e.prototype.drawPie=function(t,e,n){void 0===t&&(t=.6),void 0===e&&(e=1);var o=this.chartjs,r=o.opts,a=r.widthRates,s=r.datas,c=o.oldDataset,u=r.colors;this.clearCtn();var f=o.ctx;t=t>.9?.9:t;var l=r.radius||o._chart.height/2-20,h=l*t,d=r.origin||{x:o._chart.width/2,y:l+20},p=d.x,v=d.y,w=this.chartjs.drawer;this.origin=d,w.radius=l,w.radiusWhite=h;var y=-.5*Math.PI,g=y;f.save(),f.lineWidth=r.lineWidth,f.strokeStyle=r.backgroundColor;var b=[];i.each(s,function(t,o){g+=c?2*(s[o]-c[o])*Math.PI*e+2*c[o]*Math.PI:2*s[o]*Math.PI*e,n===o&&r.hoverRate&&(f.fillStyle=o!==n?u[o]:"rgba("+i.getColorRgb(u[o]).join(",")+", 0.6)",f.beginPath(),f.moveTo(p,v),f.arc(p,v,l*(a&&a[o]||1)*r.hoverRate,y,g,!1),f.closePath(),f.fill()),f.fillStyle=o!==n?u[o]:"rgba("+i.Lighting(u[o]).join(",")+", 0.8)",f.beginPath(),f.moveTo(p,v),f.arc(p,v,l*(a&&a[o]||1),y,g,!1),f.closePath(),f.fill(),r.lineWidth&&f.stroke(),1===e&&b.push((g+y)/2),y=g}),this.centerArr=b,f.fillStyle=r.backgroundColor,f.beginPath(),f.moveTo(p,v),h>0&&f.arc(p,v,h,0,2*Math.PI,!1),f.closePath(),f.fill(),1===e&&(o.oldDataset=null,o.dataset=s)},e.prototype.draw=function(t,e){var n=this,o=this.chartjs,r=o.opts;t&&(o.oldDataset=i.cloneArray([],o.dataset)),r.noAnimation||!r.inBrowser&&!r.inWeapp?this.drawPie(r.annularRate,1):a.Animation({onProcess:function(t){n.drawPie(r.annularRate,t),r.onAnimation&&r.onAnimation.call(n,t),r.inWeapp&&n.chartjs.ctx.draw(!0)},onAnimationFinish:r.onFinish}),r.inWeapp&&this.chartjs.canvas.draw()},e.prototype.drawHover=function(t,e){var n=this.chartjs,o=n.opts,r=o.datas,i=this.origin;if(n.oldDataset)return!1;for(var a,s=this.getAngle(i.x,i.y,t,e),c=s/(2*Math.PI),u=0,f=0,l=r.length;f<l;f++)if(c<(u+=r[f])){a=f;break}return void 0!==a&&(this.drawPie(o.annularRate,1,a),o.inWeapp&&n.canvas.draw(!0),o.hover&&o.hover(a,[r[a||0]],s,t,e),a)},e.prototype.init=function(){var t=this.chartjs.opts;this.draw(!1,t.noAnimation),this.setEvents(),t.inWeapp&&this.chartjs.canvas.draw()},e}(n(7).default);e.default=s}])});