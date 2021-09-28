/*!
 * FundCharts
 * @description: web/weapp/nodejs canvas charts library.
 * @version: 0.9.7
 * @author: Micheal Wayne(michealwayne@163.com)
 * @time: 2018~2020
 */
exports.FundCharts=function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=12)}([function(t,e,r){"use strict";function n(t){return Object.prototype.toString.call(t).replace(/\[object\s|\]/g,"")}function a(t){return"Object"===n(t)}function i(t,e){for(var r=0,n=t.length;r<n;r++)e(t[r],r)}e.__esModule=!0,e.type=n,e.isArray=function(t){return"Array"===n(t)},e.isString=function(t){return"String"===n(t)},e.isObject=a,e.isFunction=function(t){return"Function"===n(t)},e.each=i,e.cloneObjDeep=function t(e,r){if(!a(e)||!a(r))return!1;for(var n in e)!a(r[n])||o[n]?r[n]=r[n]||e[n]:t(e[n],r[n]);return r},e.isEmptyObj=o,e.getColorRgbArr=s,e.getColorRgba=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"rgba("+s(t).join(",")+","+e+")"},e.Lighting=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return s(t).map(function(t){return(t+=t*e)>255?255:t})},e.throwError=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";throw new Error("Error!"+t+".(FundCharts-"+e+" "+r+")")},e.min=function(t){return t.reduce(function(t,e){return Math.min(t,e)})},e.max=function(t){return t.reduce(function(t,e){return Math.max(t,e)})},e.getExtremum=function(t){for(var e=t[0],r=e,n=Math.max,a=Math.min,i=1,o=t.length;i<o;i++)e=n(e,t[i]),r=a(r,t[i]);return{_max:e,_min:r}};e.cloneArray=function(t,e){return i(t,function(t,r){e[r]=t}),e};function o(t){if(!t)return!1;for(var e in t)return!1;return!0}function s(t){var e=t.toLowerCase();if(e&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)){if(4===e.length){for(var r="#",n=1;n<4;n++)r+=e.slice(n,n+1).concat(e.slice(n,n+1));e=r}for(var a=[],i=1;i<7;i+=2)a.push(parseInt("0x"+e.slice(i,i+2)));return a}return e}},function(t,e,r){"use strict";e.__esModule=!0,e.drawLine=function(t,e,r,n,a){t.beginPath(),t.moveTo(e,r),t.lineTo(n,a),t.closePath(),t.stroke()},e.drawDashLine=function(t,e,r,n,a,i){i=i||5;var o=(s=n-e,c=a-r,~~(Math.sqrt(Math.pow(s,2)+Math.pow(c,2))/i));var s,c;t.beginPath();for(var h=0;h<o;h++)t[1&h?"lineTo":"moveTo"](e+(n-e)/o*h,r+(a-r)/o*h);t.closePath(),t.stroke()},e.drawPoint=function(t,e,r,n,a,i,o){t.beginPath(),t.strokeStyle=a||"#fff",t.lineWidth=void 0!==o?o:1,t.arc(e,r,i,0,2*Math.PI,!0),t.closePath(),t.fillStyle=n,t.fill(),o&&t.stroke()},e.clearArc=function(t,e,r,n){var a=.1;!function e(r,n,i){var o=i-a,s=Math.sqrt(i*i-o*o);var c=r-o,h=n-s;var u=2*o,l=2*s;a<=i&&(t.clearRect(c,h,u,l),a+=.1,e(r,n,i))}(e,r,n)},e.retinaScale=function(t,e){var r=window.devicePixelRatio||1;if(1===r)return!1;var n=t.width,a=t.height;return t.width=n*r,t.height=a*r,e.scale(r,r),t.style.width=n+"px",t.style.height=a+"px",r},e.setContext=function(t,e,r){(!t||e?t.$el:t.opts.Canvas||r)||(0,a.throwError)("no chart object to set context","setContext");var i=t.opts,o=void 0,s=i.width||500,c=i.height||500;if(e){var h=t.$el;if(h.style.webkitUserSelect="none",h.style.userSelect="none",(0,a.isFunction)(h.getContext))o=h;else{(o=document.createElement("canvas")).id=i.id+"Canvas";var u=i.width||(0,n.getStyle)(h,"width"),l=i.height||(0,n.getStyle)(h,"height");o.width=u,o.height=l,h.appendChild(o)}}else if(r){wx&&(0,a.isFunction)(wx.createCanvasContext)||(0,a.throwError)("no param {Object} Ctx","setContext");var d=wx.createCanvasContext(i.id);o={info:"Weapp native canvas",width:s,height:c,getContext:function(){return d},draw:function(e){if(e)return d.draw(!0);wx.drawCanvas({canvasId:i.id,actions:t.ctx.getActions()})}}}else{var f=i.Canvas;i.Canvas||(0,a.throwError)("no param {Object} Canvas","setContext"),o=f.createCanvas(s,c),i.handleOut&&i.handleOut(o)}t.canvas=o,t.ctx=o.getContext("2d"),t._chart={width:o.width,height:o.height}};var n=r(14),a=r(0)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getRange=function(t){return t?t>2?4*Math.ceil(t/4):1.2*t:1},e.getAngle=function(t,e,r,n){var a=Math.atan2(r-t,e-n);return a<0?2*Math.PI+a:a},e.getDistance=function(t,e,r,n){return Math.sqrt(Math.pow(t-r,2)+Math.pow(e-n,2))}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),a=r(1),i=r(5),o=function(){function t(t){this.yaxis={min:0,max:0,range:0,unit:0},this.xaxis={min:0,max:0,range:0,unit:0},this.xRate=0,this.xBasic=0,this.yRate=0,this.yBasic=0,this.drawPoint=a.drawPoint,this.chartjs=t}return t.prototype.getBasicData=function(t){var e,r,a=this.chartjs.opts,i=t||a.datas,o=a.range;return o?(void 0!==o.min&&void 0!==o.max||n.throwError('param range need params "min" and "max"',"setConfig"),e=o.min,r=o.max):i&&i.length&&n.each(i,function(t){var a=n.getExtremum(t),i=a._max,o=a._min;e=void 0!==e&&e<o?e:o,r=r&&r>i?r:i}),[e||0,r||0]},t.prototype.clearCtn=function(t){var e=this.chartjs,r=e.opts,n=r.backgroundColor,a=e.ctx,i=e._chart.width,o=e._chart.height;a.beginPath();var s=(~n.replace(" ","").indexOf("0)")?a.clearRect:a.rect).bind(a);t?s(r.chartLeft-4,r.chartTop-5,i+1,o-16-r.chartTop):s(0,0,1e5,1e5),a.fillStyle=n,a.fill(),a.closePath()},t.prototype.drawDashs=function(t){var e=this.chartjs,r=e.opts,n=r.grid,i=r.dash,o=i.isSolid,s=r.dash.color,c=n.showGrid,h=n.xTickLength,u=n.yTickLength,l=e.ctx;l.save();var d=e._chart.width-r.chartRight+2,f=(e._chart.height-r.chartTop-30)/(u-1),p=(d-2-r.chartLeft)/(h-1),v=(u-1)*f+r.chartTop+5.5;if(!r.noDash){l.strokeStyle=s,l.beginPath(),l.lineWidth=1;for(var y=o?a.drawLine:a.drawDashLine,x=o?d-2:d,g=0;g<u;g++){var w=t||g*f+5+r.chartTop;y(l,r.chartLeft,w,x,w,i.length)}if(h){var _=r.chartTop+5;for(g=0;g<h;g++){var m=g*p+r.chartLeft-.5;y(l,m,v,m,_,i.length)}}}if(c){n.color&&(l.strokeStyle=n.color);var b=r.chartLeft-.5,j=e.drawer.zeroY||v;a.drawLine(l,b,r.chartTop,b,v),a.drawLine(l,b,j,d-2,j),l.stroke()}l.strokeStyle=s,l.restore()},t.prototype.drawTexts=function(t,e){var r=this.chartjs,n=r.opts,a=n.grid.yTickLength,i=n.font,o=r.ctx,s=n.xaxis,c=r._chart.width,h=r._chart.height;if(n.handleTextX&&(t=n.handleTextX),n.handleTextY&&(e=n.handleTextY),o.lineWidth=1,o.textAlign="right",o.textBaseline="middle",o.font=i.fontSize.x+" "+i.fontFamily,o.fillStyle=i.color,t)t(o,s);else{var u=h-10;o.fillText(s[s.length-1],c-n.chartRight,u),o.textAlign="left",o.fillText(s[0],n.chartLeft,u)}o.font=i.fontSize.y+" "+i.fontFamily,o.textAlign="right";var l=this.yaxis;if(e)e(o,l);else for(var d=n.chartLeft-5,f=n.yaxisfunc||function(t){return t.toFixed(2)},p=0;p<a;p++){var v=l.min+p*l.unit;o.fillText(f(v),d,this.yRate*v+this.yBasic)}},t.prototype.drawHover=function(t,e){},t.prototype.setEvents=function(){var t=this,e=this.chartjs.canvas,r=this.chartjs.opts,n=r.events;if(!n||!r.inBrowser)return!1;n.forEach(function(r){e.addEventListener(r,function(e){var n=~r.indexOf("touch")?e.touches[0]:e,a=n.clientX,i=n.pageY-n.target.offsetTop;return t.drawHover(a,i),!1},!1)})},t.prototype.setAnimation=function(t){var e=this.chartjs.opts;i.Animation({duration:e.duration,onProcess:t,onAnimationFinish:e.onFinish})},t}();e.default=o},function(t,e,r){"use strict";var n,a=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.zeroY=0,e}return a(e,t),e.prototype.setDataset=function(){var t,e=this.chartjs,r=e.opts,n=r.datas,a=r.grid.yTickLength,i=this.getBasicData(),o=i[0],s=i[1],c=r.range;c?t=c.max-c.min:o<0?(o=~~o,-(s=Math.ceil(s))<o?o=-s:s=-o,t=2*s):((t=s-o)||(o=0,t=1),t=t>5?5*Math.ceil(t/5):Math.ceil(1.2*t)),this.yaxis={min:o,max:o+t,range:t,unit:t/(a-1)};var h=e._chart.width,u=e._chart.height,l=this.yRate=(30-u+r.chartTop)/this.yaxis.range,d=this.yBasic=5-this.yaxis.max*l+r.chartTop;this.zeroY=o<0?d:u-24;var f=e.pixelRatio||1,p=n[0].length,v=r.chartLeft+r.chartRight,y=r.barMargin||r.barWidth&&e.pixelRatio*~~((h-v)/p-r.barWidth*(r.isStack?1:n.length))||p>=10&&40-(p-10)*f||r.bar.margin;y=y<0?0:y/f,this.xaxis={min:0,max:p-1,range:p,unit:1};var x=e.barWidth=r.barWidth||~~((h-v)/p-y);e.datasets=n.map(function(t){return t.map(function(t,e){return{x:e*x+(e+.5)*y+r.chartLeft,y:t*l+d,value:t}})})},e.prototype.rotateContext=function(t,e,r,n,a){t.save(),t.translate(e,r),t.rotate(n*Math.PI/180),t.fillText(a,0,0),t.restore()},e.prototype.drawBars=function(t,e){void 0===t&&(t=1);var r=this.chartjs,n=r.opts,a=n.isStack?0:1,o=n.singleColorful,s=r.ctx,c=r.datasets,h=r.oldDataset,u=r.barWidth/(n.isStack?1:c.length),l=this.zeroY;s.beginPath(),s.lineWidth=0,s.strokeStyle=n.backgroundColor,i.each(c,function(r,c){var d=h&&h[c];i.each(r,function(r,h){var f=i.Lighting(r.y>l&&n.negativeColor||n.colors[o?h:c]||n.colors[c],h===e?n.hoverHighlight:0),p=r.x+a*u*c;s.fillStyle="rgb("+f.join(",")+")",d?s.fillRect(p,l,u,(r.y-d[h].y)*t+(d[h].y-l)):s.fillRect(p,l,u,(r.y-l)*t)}),s.stroke()}),s.save(),1===t&&(r.oldDataset=null)},e.prototype.drawXaxisTexts=function(t,e){var r=this,n=this.chartjs,a=n._chart.height-10,o=n.barWidth,s=e.length,c=n.datasets[0],h=s>30?90:s>10?3*s:0;t.textAlign="center",i.each(c,function(n,i){var s=e[i];s&&(h?r.rotateContext(t,n.x+o,a,h,s):t.fillText(s,n.x+o,a))})},e.prototype.draw=function(t,e,r){var n=this,a=this.chartjs,o=a.opts,s=a.datasets;this.clearCtn(!t),this.drawDashs(),t&&(s&&(a.oldDataset=i.cloneArray([],s)),this.setDataset(),this.drawTexts(this.drawXaxisTexts.bind(this))),r||(e||!o.inBrowser&&!o.inWeapp?(this.drawBars(1),o.onFinish&&o.onFinish()):this.setAnimation(function(t){n.clearCtn(!0),n.drawDashs(),n.drawBars(t),o.onAnimation&&o.onAnimation.call(n,t),o.inWeapp&&a.ctx.draw(!0)}))},e.prototype.drawHover=function(t,e){var r=this.chartjs,n=r.opts;if(r.oldDataset)return!1;if(t>r._chart.width-n.chartRight||t<n.chartLeft)return!1;for(var a=-1,o=Math.abs(r.barWidth),s=r.datasets.length,c=r.datasets[0],h=[],u=0,l=c.length;u<l;u++){var d=c[u];if(t>=d.x&&t<=d.x+o*s){a=u;break}}return!(a<0)&&(i.each(r.datasets,function(t){h.push(t[a].value)}),this.draw(!1,!0,!0),this.drawBars(1,a),n.hover&&n.hover.call(r,a,h,n.xaxis[a],t,e),n.inWeapp&&r.canvas.draw(!0),a)},e.prototype.init=function(){var t=this.chartjs.opts;this.draw(!0,t.noAnimation),!t.inBrowser||t.inWeapp||t.noHoverEvent||this.setEvents(),t.inWeapp&&this.chartjs.canvas.draw()},e}(r(3).default);e.default=o},function(t,e,r){"use strict";e.__esModule=!0,e.Animation=function(t){var e=23,r=t.duration||600,n=t.onProcess||function(){},o=t.onAnimationFinish||function(){},s=a(),c=null;s(function t(a){if(null===a)return n(1),o(),!1;null===c&&(c=a);if(a-c<r){var h=(a-c)/r;h=i(h),n(h),s(t,e)}else n(1),o()},e)};var n=void 0;"undefined"!=typeof window&&(n=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame);var a=function(){return void 0!==n?(a=function(){return n},n):function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}},i=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}},function(t,e,r){"use strict";var n,a=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),o=r(2),s=r(1),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.setDataset=function(){var t=this.chartjs,e=t.opts,r=e.grid.yTickLength,n=e.datas,a=[];i.each(n,function(t){a.push.apply(a,t)});var s,c,h=this.getBasicData([a]),u=h[0],l=h[1];e.range?(s=u,c=l-u):(s=(c=o.getRange(l-u))>2?Math.floor(u):u)+c<l&&(s=u),this.yaxis={min:s,max:s+c,range:c,unit:c/(r-1)};var d=this.yRate=(30-t._chart.height+e.chartTop)/c,f=this.yBasic=5-this.yaxis.max*d+e.chartTop,p=n.length;p=p>1?p:2,this.xaxis={min:0,max:p-1,range:p,unit:1};var v=this.xBasic=e.chartLeft+10,y=this.xRate=(t._chart.width-e.chartLeft-e.chartRight-20)/(p-1),x=[];1===n.length&&(n[1]=n[0]),i.each(n,function(t,e){x.push({x:e*y+v,ymin:t[2]*d+f,ystart:t[0]*d+f,yend:t[1]*d+f,ymax:t[3]*d+f,value:t})}),t.dataset=x,e.barWidth||(e.barWidth=p<10?"20":~~(.6*this.xRate),e.barWidth<1&&(e.barWidth=1))},e.prototype.drawUnit=function(t,e,r,n,a){var i,o,c,h=!1;e.yend<e.ystart?(a&&(h=!0),i=r[0],o=e.ystart,c=e.yend):(i=r[4],o=e.yend,c=e.ystart),t.fillStyle=t.strokeStyle=i,s.drawLine(t,e.x,e.ymin,e.x,o),s.drawLine(t,e.x,e.ymax,e.x,c),t.beginPath(),t[h?"rect":"fillRect"](e.x-n/2,c,n,o-c),t.closePath(),t.stroke()},e.prototype.drawLine=function(t){void 0===t&&(t=1);var e=this.chartjs,r=e.opts,n=e.ctx,a=e.dataset;n.lineWidth=1;for(var i=0,o=t*a.length;i<o;i++){var s=a[i];this.drawUnit(n,s,r.colors,r.barWidth,r.upHollow)}n.save()},e.prototype.draw=function(t,e){var r=this,n=this.chartjs.opts;this.clearCtn(!t),this.drawDashs(),t&&(this.setDataset(),this.drawTexts()),e||!n.inBrowser&&!n.inWeapp?(this.drawLine(1),n.onFinish&&n.onFinish()):this.setAnimation(function(t){r.clearCtn(!0),r.drawDashs(),r.drawLine(t),n.onAnimation&&n.onAnimation.call(r,t),n.inWeapp&&r.chartjs.ctx.draw(!0)})},e.prototype.drawHover=function(t,e){var r=this.chartjs,n=r.opts;this.draw(n.inWeapp||null,!0);var a=r.ctx;if(t>r._chart.width-n.chartRight||t<n.chartLeft||e<n.chartTop||e>r._chart.height-(35-n.chartTop))return!1;var i=Math.round((t-this.xBasic)/this.xRate);if(!r.dataset[i])return!1;var o=Math.round(r.dataset[i].x)+.3;return a.save(),a.strokeStyle=n.hoverLineColor,a.lineWidth=.5,s.drawLine(a,n.chartLeft+.3,e,r._chart.width-14.7,e),s.drawLine(a,o,6+n.chartTop,o,r._chart.height-25),n.hover&&n.hover.call(r,i,[n.datas[i]],n.xaxis[i],t,e),a.restore(),n.inWeapp&&r.canvas.draw(!0),i},e.prototype.init=function(){var t=this.chartjs.opts;this.draw(!0,t.noAnimation),this.setEvents(),t.inWeapp&&this.chartjs.canvas.draw()},e}(r(3).default);e.default=c},function(t,e,r){"use strict";var n,a=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),o=r(2),s=r(1),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.setDataset=function(){var t,e,r=this.chartjs,n=r.opts,a=n.grid.yTickLength,s=n.datas,c=this.getBasicData(),h=c[0],u=c[1];n.range?(t=h,e=u-h):(t=(e=o.getRange(u-h))>2?Math.floor(h):h)+e<u&&(t=h),this.yaxis={min:t,max:t+e,range:e,unit:e/(a-1)};var l=this.yRate=(30-r._chart.height+n.chartTop)/e,d=this.yBasic=5-this.yaxis.max*l+n.chartTop,f=s[0].length;f=f>1?f:2,this.xaxis={min:0,max:f-1,range:f,unit:1};var p=this.xBasic=n.chartLeft,v=this.xRate=(r._chart.width-n.chartLeft-n.chartRight)/(f-1),y=[];i.each(s,function(t){var e=[];1===t.length&&(t[1]=t[0]),i.each(t,function(t,r){e.push({x:Math.ceil(r*v+p),y:t*l+d,value:t})}),y.push(e)}),r.datasets=y},e.prototype.drawLine=function(t){void 0===t&&(t=1);var e=this.chartjs,r=e.datasets,n=e.opts,a=e.ctx;a.lineWidth=1;var o=e._chart.height-24,s=e.oldDatasets,c=s&&s[0].length,h=c&&1!==t?function(e,r,n){var i=e.x,o=e.y,s=n[r]||n[c-1];a.lineTo((i-s.x)*t+s.x,n[r]?(o-s.y)*t+s.y:o)}:function(t){a.lineTo(t.x,t.y)};i.each(r,function(e,u){a.save();var l=r[u][0],d=c?e:e.slice(0,~~(t*e.length)),f=(d=d.filter(function(t){return void 0!==t.value&&t})).length;if(!f)return!1;var p,v,y,x=n.curveLine?function(e,r){return function(e,r,n){r=r||e;var i=(e.x+r.x)/2,s=o*(1-t)+(e.y+r.y)*t/2;a.quadraticCurveTo(e.x,e.y,i,s)}(e,d[r+1],s&&s[u])}:function(t,e){return h(t,e,s&&s[u])};if(n.allGradient||0===u&&!n.noGradient){if(a.beginPath(),a.lineWidth=0,a.strokeStyle=n.backgroundColor,a.moveTo(n.chartLeft,o),a.lineTo(l.x+.5,o*(1-t)+l.y*t),i.each(d,x),s&&s[0]){var g=s[0].filter(function(t){return void 0!==t.value&&t}),w=g[f-1]||g[g.length-1]||d[f-1],_=(d[f-1].x-w.x)*t+w.x;a.lineTo(_,(d[f-1].y-w.y)*t+w.y),a.lineTo(_,o)}else a.lineTo(d[f-1].x+.5,o);a.closePath(),a.stroke(),p=n.colors[u],v=a.createLinearGradient(0,0,0,170),y=i.getColorRgbArr(p).join(","),v.addColorStop(0,"rgba("+y+", 0.3)"),v.addColorStop(.8,"rgba("+y+", 0.1)"),v.addColorStop(1,"rgba("+y+", 0.05)"),a.fillStyle=v,a.fill()}a.lineWidth=n.lineWidths&&n.lineWidths[u]||1,a.strokeStyle=n.colors[u],a.beginPath(),s&&s[u]?a.moveTo(l.x,(l.y-s[u][0].y)*t+s[u][0].y):a.moveTo(l.x,l.y),i.each(d,x),a.stroke(),a.restore()}),a.save(),1===t&&(e.oldDatasets=null)},e.prototype.drawHover=function(t,e){var r=this,n=this.chartjs,a=n.opts;if(a.curveLine||n.oldDatasets)return!1;this.draw(a.inWeapp||null,!0);var o=n.ctx,c=n._chart.width-a.chartRight;t=t<a.chartLeft?a.chartLeft:t>c?c:t;var h=Math.round((t-this.xBasic)/this.xRate),u=[],l=0,d=[],f=n.datasets;return i.each(f,function(t,e){var n=t[h];!a.hideHoverPoints&&n&&d.unshift(function(){r.drawPoint(o,n.x,n.y-1,a.colors[e],a.pointStyle,4,1)}),l=n.x,u.push(n.value)}),a.noHoverLine||(l+=.3,o.lineWidth=.5,o.strokeStyle=a.hoverLineColor,s.drawLine(o,l,6+a.chartTop,l,n._chart.height-25)),d.length&&i.each(d,function(t){return t()}),a.hover&&a.hover.call(n,h,u,a.xaxis[h],t,e),o.restore(),a.inWeapp&&n.canvas.draw(!0),h},e.prototype.draw=function(t,e){var r=this,n=this.chartjs,a=n.opts,o=n.datasets;this.clearCtn(!t),this.drawDashs(),t&&(o&&(n.oldDatasets=i.cloneArray([],o)),this.setDataset(),this.drawTexts()),e||a.curveLine||!a.inBrowser&&!a.inWeapp?(this.drawLine(),a.onFinish&&a.onFinish()):this.setAnimation(function(t){r.clearCtn(!0),r.drawDashs(),r.drawLine(t),a.onAnimation&&a.onAnimation.call(r,t),a.inWeapp&&n.ctx.draw(!0)})},e.prototype.init=function(){var t=this.chartjs.opts;this.draw(!0,t.noAnimation),this.setEvents(),t.inWeapp&&this.chartjs.canvas.draw()},e}(r(3).default);e.default=c},function(t,e,r){"use strict";var n,a=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),s=r(2),c=r(1),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.origin=null,e.centerArr=null,e}return a(e,t),e.prototype.drawPie=function(t,e,r){void 0===t&&(t=.6),void 0===e&&(e=1),t=t>.9?.9:t;var n=this.chartjs,a=n.opts,s=a.origin||{},h=a.widthRates,u=n.drawer,l=a.backgroundColor,d=a.colors,f=a.datas,p=n.oldDataset;this.clearCtn();var v=n.ctx,y=n._chart,x=y.width,g=y.height,w=a.radius||g/2-20,_=w*t,m=i({x:x/2,y:w+20},s),b=m.x,j=m.y;this.origin=m,u.radius=w,u.radiusWhite=_;var P=a.startAngle||-.5*Math.PI,O=P;v.save(),v.lineWidth=a.lineWidth,v.strokeStyle=l;var A=[];o.each(f,function(t,n){var i=r===n;O+=2*Math.PI*(1!==e&&p?(f[n]-p[n])*e+p[n]:f[n]*e),i&&a.hoverRate&&(v.fillStyle=i?o.getColorRgba(d[n],.6):d[n],v.beginPath(),v.moveTo(b,j),v.arc(b,j,w*(h&&h[n]||1)*a.hoverRate,P,O,!1),v.closePath(),v.fill()),v.fillStyle=i?o.getColorRgba(d[n],.8):d[n],v.beginPath(),v.moveTo(b,j),v.arc(b,j,w*(h&&h[n]||1),P,O,!1),v.closePath(),v.fill(),a.lineWidth&&(v.lineJoin="round",v.stroke()),1===e&&A.push((O+P)/2),P=O}),~l.indexOf(",0)")?c.clearArc(v,b,j,_):c.drawPoint(v,b,j,l,"",_,0),1===e&&(this.centerArr=A,n.oldDataset=null,n.dataset=f)},e.prototype.draw=function(t,e){var r=this,n=this.chartjs,a=n.opts;t&&(n.oldDataset=o.cloneArray([],n.dataset)),e||!a.inBrowser&&!a.inWeapp?(this.drawPie(a.annularRate,1),a.onFinish&&a.onFinish()):this.setAnimation(function(t){r.drawPie(a.annularRate,t),a.onAnimation&&a.onAnimation.call(r,t),a.inWeapp&&r.chartjs.ctx.draw(!0)}),a.inWeapp&&this.chartjs.canvas.draw()},e.prototype.drawHover=function(t,e){var r=this.chartjs,n=r.opts,a=n.datas,i=this.origin;if(r.oldDataset)return!1;for(var o,c=s.getAngle(i.x,i.y,t,e),h=c/(2*Math.PI),u=0,l=0,d=a.length;l<d;l++)if(h<(u+=a[l])){o=l;break}return!(void 0===o||s.getDistance(t,e,i.x,i.y)>r.drawer.radius+5)&&(this.drawPie(n.annularRate,1,o),n.inWeapp&&r.canvas.draw(!0),n.hover&&n.hover.call(r,o,[a[o||0]],c,t,e),o)},e.prototype.init=function(){var t=this.chartjs.opts;this.draw(!1,t.noAnimation),this.setEvents(),t.inWeapp&&this.chartjs.canvas.draw()},e}(r(9).default);e.default=h},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(5),a=function(){function t(t){this.chartjs=t}return t.prototype.clearCtn=function(){var t=this.chartjs.ctx,e=this.chartjs.opts.backgroundColor;t.beginPath(),t[~e.replace(" ","").indexOf(",0)")?"clearRect":"rect"](0,0,1e5,1e5),t.fillStyle=e,t.fill(),t.closePath()},t.prototype.drawHover=function(t,e){},t.prototype.setEvents=function(){var t=this,e=this.chartjs.canvas,r=this.chartjs.opts,n=r.events;if(!n||!r.inBrowser)return!1;n.forEach(function(r){e.addEventListener(r,function(e){var n=~r.indexOf("touch")?e.touches[0]:e,a=n.clientX,i=n.pageY-n.target.offsetTop;return t.drawHover(a,i),!1},!1)})},t.prototype.setAnimation=function(t){var e=this.chartjs.opts;n.Animation({duration:e.duration,onProcess:t,onAnimationFinish:e.onFinish})},t}();e.default=a},function(t,e,r){"use strict";var n,a=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),s=r(1),c=r(2),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.radius=0,e.origin=null,e.sideArr=[],e}return a(e,t),e.prototype.setDataset=function(t){var e=this.chartjs,r=e.opts,n=r.origin||{},a=r.datas,s=0;o.each(a,function(t){var e=o.max(t);e>s&&(s=e)}),e.rangeMax=Math.ceil(1*s/(r.maxRate||.9));var c=e._chart,h=c.width,u=c.height;if(this.radius=r.radius||u/2-10,this.origin=i({x:h/2,y:u/2},n),t)return e.oldDataset=o.cloneArray([],e.dataset),!1;this.sideArr=function(t){for(var e=[],r=2*Math.PI/t,n=0;n<t;n++)e.push({x:Math.sin(r*n),y:Math.cos(r*n)});return e}(e.side=a[0].length)},e.prototype.drawRadar=function(t,e){void 0===t&&(t=1);var r=this.chartjs,n=r.opts,a=n.colors;this.clearCtn();var i=r.ctx,c=this.radius,h=this.origin,u=h.x,l=h.y,d=this.sideArr,f=d[0],p=r.oldDataset,v=n.gridNumber||3;i.lineWidth=1,i.strokeStyle=n.dash.color;for(var y=function(t){var e=(t+1)/v*c;i.beginPath(),i.moveTo(u+f.x*e,l-f.y*e),o.each(d,function(t){i.lineTo(u+t.x*e,l-t.y*e)}),i.lineTo(u+f.x*e,l-f.y*e),i.closePath(),n.fillGrid?(i.fillStyle=o.getColorRgba(n.fillGrid,(v-t)/v*.8),i.fill()):i.stroke(),t+1===v&&o.each(d,function(t){s.drawLine(i,u,l,u+t.x*e,l-t.y*e)})},x=0;x<v;x++)y(x);var g=r.rangeMax,w=[],_=c*(p?1:t)/g;o.each(n.datas,function(r,c){w[c]=[],function(r,c,h){i.strokeStyle=a[c],i.fillStyle=o.getColorRgba(a[c],.4),i.beginPath(),o.each(r,function(e,r){var n=d[r],a=h&&h[r];if(n){var o=void 0,s=void 0;o=u+e*n.x*_,s=l-e*n.y*_,a&&(o=a.x+(o-a.x)*t,s=a.y+(s-a.y)*t),w[c].push({x:o,y:s}),i.lineTo(o,s)}}),i.lineTo(w[c][0].x,w[c][0].y),i.closePath(),i.stroke(),n.noFill||i.fill(),i.save();var f=n.hidePoints?0:3;o.each(w[c],function(t,r){s.drawPoint(i,t.x,t.y,a[c],n.pointStyle,e===r?5:f,e===r?1:0)}),i.restore()}(r,c,p&&p[c])}),1===t&&(r.oldDataset=null,r.dataset=w)},e.prototype.drawHover=function(t,e){var r=this.chartjs,n=r.opts,a=this.origin,i=this.sideArr.length;if(r.oldDataset||c.getDistance(t,e,a.x,a.y)>r.drawer.radius+5)return!1;var o=c.getAngle(a.x,a.y,t,e),s=Math.PI/i,h=Math.floor(o/s);(h=Math.round(h+(1&h?1:0))/2)===i&&(h=0);var u=n.datas.map(function(t){return t[h]});return this.drawRadar(1,h),n.inWeapp&&r.canvas.draw(!0),n.hover&&n.hover.call(r,h,u,o,t,e),h},e.prototype.draw=function(t,e){var r=this;this.setDataset(t);var n=this.chartjs.opts;e||!n.inBrowser&&!n.inWeapp?(this.drawRadar(1),n.onFinish&&n.onFinish()):this.setAnimation(function(t){r.drawRadar(t),n.onAnimation&&n.onAnimation.call(r,t),n.inWeapp&&r.chartjs.ctx.draw(!0)})},e.prototype.init=function(){var t=this.chartjs.opts;this.draw(!1,t.noAnimation),this.setEvents(),t.inWeapp&&this.chartjs.canvas.draw()},e}(r(9).default);e.default=h},function(t,e,r){"use strict";var n,a=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),o=r(2),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.setDataset=function(){var t,e,r=this.chartjs,n=r.opts,a=n.range,s=n.grid.yTickLength,c=n.datas,h=null,u=null;if(a)h={x:a.x[0],y:a.y[0]},t=(u={x:a.x[1],y:a.y[1]}).x-h.x,e=u.y-h.y;else{var l=[],d=[];i.each(c,function(t){i.each(t,function(t){l.push(t[0]),d.push(t[1])})});var f=i.getExtremum(l),p=i.getExtremum(d);h={x:f._min,y:p._min},u={x:f._max,y:p._max},l=[],d=[],t=o.getRange(u.x-h.x),h.x=t>2?Math.floor(h.x):h.x,h.x+t<u.x&&(h.x=h.x),e=o.getRange(u.y-h.y),h.y=e>2?Math.floor(h.y):h.y,h.y+e<u.y&&(h.y=h.y)}n.xaxisfunc?n.xaxis=[n.xaxisfunc(h.x),n.xaxisfunc(u.x)]:n.xaxis=[h.x.toFixed(2),u.x.toFixed(2)],this.yaxis={min:h.y,max:h.y+e,range:e,unit:e/(s-1)};var v=this.yRate=(30-r._chart.height+n.chartTop)/e,y=this.yBasic=5-this.yaxis.max*v+n.chartTop;this.xaxis={min:h.x,max:h.x+t,range:t,unit:t/4};var x=this.xRate=(r._chart.width-65)/t,g=this.xBasic=50;r.datasets=c.map(function(t){return t.map(function(t){return{x:t[0]*x+g,y:t[1]*v+y,value:t}})})},e.prototype.drawPoints=function(t){var e=this;void 0===t&&(t=1);var r=this.chartjs,n=r.opts,a=n.borderRate||.8,o=r.datasets;i.each(o,function(s,c){var h=i.getColorRgba(n.colors[c],.3),u=(n.pointWidths&&n.pointWidths[c]||6-4*c/o.length)*t,l=u*a;i.each(s,function(t){e.drawPoint(r.ctx,t.x,t.y,n.colors[c],h,u,l)})})},e.prototype.draw=function(t,e){var r=this,n=this.chartjs.opts;this.clearCtn(!t),this.drawDashs(),t&&(this.setDataset(),this.drawTexts()),e||!n.inBrowser&&!n.inWeapp?(this.drawPoints(),n.onFinish&&n.onFinish()):this.setAnimation(function(t){r.clearCtn(!0),r.drawDashs(),r.drawPoints(t),n.onAnimation&&n.onAnimation.call(r,t),n.inWeapp&&r.chartjs.ctx.draw(!0)})},e.prototype.init=function(){var t=this.chartjs.opts;this.draw(!0,t.noAnimation),t.inWeapp&&this.chartjs.canvas.draw()},e}(r(3).default);e.default=s},function(t,e,r){"use strict";var n,a=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=r(13),o={version:"0.9.7"};["line","bar","scatter","kline","pie","radar"].forEach(function(t){Object.defineProperty(o,t,{configurable:!1,enumerable:!0,get:function(){var e=r(16)("./"+t).default;return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return a(r,t),r.prototype.init=function(t){t||this._init(),this.drawer=new e(this),t||this.drawer.init()},r}(i.default)}})}),t.exports=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),a=r(1),i=r(15),o=i.default.inBrowser,s=i.default.inWeapp,c=function(){function t(t){this.$el=null,this.drawer=null,this.canvas=null,this.ctx=null;var e=t.id,r=t.colors,a=t.data,s=t.datas;e&&(a||s)||n.throwError("no container id or datas in options","setConfig"),o&&(this.$el=document.getElementById(e)),r&&(t.colors=r.concat(i.default.colors)),t=n.cloneObjDeep(i.default,t),a&&(t.datas=[a],delete t.data),this.opts=t}return t.prototype.update=function(t){t&&(t.data&&(t.datas=[t.data],delete t.data),this.opts=n.cloneObjDeep(this.opts,t)),this.drawer.draw(!0,this.opts.noAnimation)},t.prototype._init=function(){a.setContext(this,o,s),o&&(this.pixelRatio=a.retinaScale(this.canvas,this.ctx))},t}();e.default=c},function(t,e,r){"use strict";e.__esModule=!0,e.getStyle=function(t,e){var r=t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e),n=r&&r.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof wx&&void 0!==wx.getSystemInfo,a=n?2:1,i={inBrowser:"undefined"!=typeof window&&!n,inWeapp:n,backgroundColor:"rgba(0,0,0,0)",colors:["#fe5d4e","#43c2f7","#707ad9","#ffa61b","#64d290","#cf27bd"],duration:600,events:["touchstart","touchmove"],hoverLineColor:"#999",hoverHighlight:.5,grid:{yTickLength:5},bar:{margin:60/a},chartTop:0,chartLeft:50/a,chartRight:15,dash:{color:"#e2e2e2",length:3/a},font:{color:"#666",fontFamily:"Arial",fontSize:{x:"11px",y:"10px"}}};e.default=i},function(t,e,r){var n={"./bar":4,"./bar.ts":4,"./kline":6,"./kline.ts":6,"./line":7,"./line.ts":7,"./pie":8,"./pie.ts":8,"./radar":10,"./radar.ts":10,"./scatter":11,"./scatter.ts":11};function a(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=16}]);