/*!
 * 
 * @description FundCharts Tooltips.
 * @version 0.9.9
 * @author Wayne(michealwayne@163.com)
 * @time 2018~2021
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FundChartsToolTips=e():t.FundChartsToolTips=e()}(window,(function(){return function(t){var e={};function o(i){if(e[i])return e[i].exports;var l=e[i]={i:i,l:!1,exports:{}};return t[i].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)o.d(i,l,function(e){return t[e]}.bind(null,l));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=2)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof wx&&void 0!==wx.getSystemInfoSync;e.default={isWeapp:i,dpr:(i?wx.getSystemInfoSync().pixelRatio:window.devicePixelRatio)||1,circularAngle:2*Math.PI,width:70,height:20,font:"10px Arial",pieFont:"bold 22px Arial",labelFont:"bold 12px Arial",textAlign:"center",colors:{color:"#fff",backgroundColor:"#bdbdbd",valColor:"#eee"}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.drawPoint=e.drawTriangle=e.handleArguments=e.handleWeappDraw=e.getLimitedVal=e.handleShowValTipsStr=e.isString=e.isFunction=e.isUndefined=e.half=e.emptyFunc=void 0;var i=o(0),l=i.default.isWeapp,r=i.default.circularAngle;function a(t){return void 0===t}function n(t){return"function"==typeof t}function d(t){return"string"==typeof t}e.emptyFunc=function(){return""},e.half=function(t){return~~(t/2)},e.isUndefined=a,e.isFunction=n,e.isString=d,e.handleShowValTipsStr=function(t,e,o){return n(t)?t(e):d(t)?t:a(o)?e:o},e.getLimitedVal=function(t,e,o){return t<e?e:t>o?o:t},e.handleWeappDraw=l?function(t){return n(t.draw)&&t.draw(!0)}:e.emptyFunc,e.handleArguments=function(t){return function(e,o,i,l,r){if(!this.ctx)throw Error("canvas `ctx` is not find. Please check `this` point.(FundChartsToolTip)");t.call(this,{xData:i,yDatas:o,xPos:l,yPos:r,index:e})}},e.drawTriangle=function(t,e){return 3===(null==e?void 0:e.length)&&(t.beginPath(),t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y),t.lineTo(e[2].x,e[2].y),t.closePath(),t.fill(),!0)},e.drawPoint=function(t){var e=t.ctx,o=t.x,i=t.y,l=t.color,n=t.strokeColor,d=t.width,s=t.strokeWidth;e.beginPath(),e.lineWidth=0,e.strokeStyle=n||"#fff",e.lineWidth=a(s)?1:s,e.arc(o,i,d,0,r,!0),e.closePath(),e.fillStyle=l,e.fill(),s&&e.stroke()}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(3),l=o(4);t.exports={BasicToolTip:i.BasicToolTip,ArrowToolTip:i.ArrowToolTip,KlineToolTip:i.KlineToolTip,PieCenterToolTip:l.PieCenterToolTip,PieLabelToolTip:l.PieLabelToolTip,LabelsToolTip:l.LabelsToolTip}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.KlineToolTip=e.ArrowToolTip=e.BasicToolTip=void 0;var i=o(1),l=o(0),r=l.default.colors;e.BasicToolTip=i.handleArguments((function(t){var e=t.xData,o=t.yDatas,a=t.xPos,n=this.ctx,d=this.opts,s=d.toolTip||{},h=s.width,f=void 0===h?l.default.width:h,c=s.height,u=void 0===c?l.default.height:c,p=s.font,T=void 0===p?l.default.font:p,v=s.color,x=void 0===v?r.color:v,y=s.textAlign,g=void 0===y?l.default.textAlign:y,w=s.backgroundColor,b=void 0===w?r.backgroundColor:w,P=s.showTip;n.save(),n.beginPath(),n.fillStyle=b;var S=a-i.half(f),m=this._chart.width-d.chartRight-f;S=i.getLimitedVal(S,d.chartLeft,m),n.fillRect(S,d.chartTop+5,f,u),n.fillStyle=x,n.font=T,n.textAlign=g;var A=i.isFunction(P)&&P(e,o)||P||e+":"+o.map((function(t){return t.toFixed(2)})).join(",");n.fillText(A,S+i.half(f),d.chartTop+15),n.closePath(),n.stroke(),n.restore(),i.handleWeappDraw(n)})),e.ArrowToolTip=i.handleArguments((function(t){var e=t.xData,o=t.yDatas,a=t.xPos,n=t.index,d=this.ctx,s=this.opts,h=s.toolTip||{},f=h.width,c=void 0===f?l.default.width:f,u=h.height,p=void 0===u?l.default.height:u,T=h.font,v=void 0===T?l.default.font:T,x=h.color,y=void 0===x?r.color:x,g=h.textAlign,w=void 0===g?l.default.textAlign:g,b=h.backgroundColor,P=void 0===b?r.backgroundColor:b,S=h.top,m=void 0===S?12:S,A=h.showTip;d.save(),d.beginPath();var F=this._chart,C=this.datasets,k=this.barWidth;d.strokeStyle=P,d.fillStyle=P;var L=a-i.half(c),_=F.width-s.chartRight-c;L=i.getLimitedVal(L,s.chartLeft,_);var W=C[0][n].x,D=C[0][n].y;k&&(W+=i.half(this.barWidth),D=Math.min.apply(null,C.map((function(t){return t[n].y}))));var j=D+(this.drawer.zeroY&&D>this.drawer.zeroY?m:-(p+m)),M=!0;j<s.chartTop&&(M=!1,j=s.chartTop);var V=j+p;k&&this.drawer.zeroY&&j>this.drawer.zeroY&&(V=j),j+p>F.height-25&&(M=!1,j=F.height-25-p),d.fillRect(L,j,c,p),M&&i.drawTriangle(d,[{x:Math.max(W-3,L),y:V},{x:Math.min(W+3,L+c),y:V},{x:W,y:V+5*(V>j?1:-1)}]),d.fillStyle=y,d.font=v,d.textAlign=w;var R=i.isFunction(A)&&A(e,o)||A||e+":"+o.map((function(t){return t.toFixed(2)})).join(",");d.fillText(R,L+i.half(c),j+10),d.closePath(),d.stroke(),d.restore(),i.handleWeappDraw(d)})),e.KlineToolTip=i.handleArguments((function(t){var e=t.xData,o=t.xPos,a=t.yPos;o=Math.abs(o),a=Math.abs(a);var n=this.ctx,d=this.opts,s=d.toolTip||{},h=s.xWidth,f=void 0===h?l.default.width:h,c=s.xHeight,u=void 0===c?15:c,p=s.yWidth,T=void 0===p?40:p,v=s.yHeight,x=void 0===v?15:v,y=s.font,g=void 0===y?l.default.font:y,w=s.color,b=void 0===w?r.color:w,P=s.textAlign,S=void 0===P?l.default.textAlign:P,m=s.backgroundColor,A=void 0===m?r.backgroundColor:m,F=s.showTip,C=s.showValTip;n.save(),n.beginPath();var k=this._chart;n.strokeStyle=A,n.fillStyle=A;var L=o-i.half(f),_=i.half(x),W=k.width-d.chartRight-f,D=k.height-40;L=i.getLimitedVal(L,d.chartLeft,W),_=i.getLimitedVal(L,d.chartTop,D),n.fillRect(L,D,f,u),n.fillRect(d.chartLeft,_,T,x),n.fillStyle=b,n.font=g,n.textAlign=S,n.fillText(i.isFunction(F)&&F(e)||F||e,L+i.half(f),D+8);var j=((a-this.drawer.yBasic)/this.drawer.yRate).toFixed(2);n.fillText(i.handleShowValTipsStr(C,j),d.chartLeft+i.half(T),_+8),n.closePath(),n.stroke(),n.restore(),i.handleWeappDraw(n)}))},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LabelsToolTip=e.PieLabelToolTip=e.PieCenterToolTip=void 0;var i=o(1),l=o(0),r=l.default.colors;e.PieCenterToolTip=i.handleArguments((function(t){var e=t.yDatas,o=t.index,a=this.ctx,n=this.opts,d=(this.drawer||{}).origin,s=n.toolTip||{},h=s.font,f=void 0===h?l.default.pieFont:h,c=s.color,u=s.valColor,p=void 0===u?r.valColor:u,T=s.textAlign,v=void 0===T?l.default.textAlign:T,x=s.valY,y=void 0===x?d.y:x,g=s.showTip,w=s.showValTip;a.save(),a.fillStyle=c||n.colors[o],a.font=f,a.textAlign=v;var b=i.isFunction(g)&&g(o)||g||"";a.fillText(b,d.x,y-10),a.fillStyle=p;var P=i.isFunction(w)&&w(e[0])||w||(100*e[0]).toFixed(1);a.fillText(P,d.x,y+15),a.restore(),i.handleWeappDraw(a)})),e.PieLabelToolTip=i.handleArguments((function(t){var e=t.yDatas,o=t.index,a=this.ctx,n=this.opts,d=n.toolTip||{},s=d.font,h=void 0===s?l.default.labelFont:s,f=d.color,c=d.valColor,u=void 0===c?r.valColor:c,p=d.textAlign,T=void 0===p?l.default.textAlign:p,v=d.showTip,x=d.showValTip;a.save();var y=this.drawer,g=y.origin,w=y.radius,b=y.centerArr,P=Math.sin(b[o])*w,S=Math.cos(b[o])*w;n.widthRates&&(P*=n.widthRates[o]||1,S*=n.widthRates[o]||1);var m=n.chartLeft,A=this._chart.width-m;a.beginPath(),a.moveTo(g.x+S,g.y+P),a.lineTo(g.x+1.2*S,g.y+1.2*P),a.lineTo(S>0?A-20:m+20,g.y+1.2*P),a.strokeStyle=a.fillStyle=n.colors[o],a.lineWidth=1,a.stroke(),a.font=h,a.textAlign=T,a.textBaseline="middle",a.fillStyle=f||n.colors[o];var F=i.isFunction(v)&&v(o)||v||"";a.fillText(F,S>0?A:m,g.y+1.2*P-10),a.fillStyle=u;var C=i.handleShowValTipsStr(x,e[0],(100*e[0]).toFixed(2));a.fillText(C,S>0?A:m,g.y+1.2*P+5),a.closePath(),a.restore(),i.handleWeappDraw(a)})),e.LabelsToolTip=i.handleArguments((function(t){var e=t.yDatas,o=t.index,a=this.ctx,n=this.opts,d=n.toolTip||{},s=d.font,h=void 0===s?l.default.labelFont:s,f=d.color,c=d.valColor,u=void 0===c?r.valColor:c,p=d.valY,T=d.valX,v=d.showTip,x=d.showValTip;a.save();var y=this.side,g=this.drawer.origin,w=this.dataset,b=this._chart.width,P=T;P||(P=g.x>b/2?n.chartLeft+20:b-n.chartRight-70);var S=p||g.y,m={ctx:a,x:P,y:0,color:"",strokeColor:"",width:4,strokeWidth:1};y?w.forEach((function(t,e){m.y=S-4+15*e,m.color=m.strokeColor=n.colors[e],i.drawPoint(m)})):(m.y=S-4,m.color=m.strokeColor=n.colors[o],i.drawPoint(m)),a.font=h;var A=i.isFunction(v)&&v(o)||v||"";if(y)w.forEach((function(t,o){a.fillStyle=f||n.colors[o],a.fillText(A,P+10,S+15*o);var l=i.handleShowValTipsStr(x,e[0],(1*e[0]).toFixed(2));a.fillStyle=u,a.fillText(l,P+a.measureText(A).width+15,S+15*o)}));else{a.fillStyle=f||n.colors[o],a.fillText(A,P+10,S);var F=i.handleShowValTipsStr(x,e[0],(100*e[0]).toFixed(2));a.fillText(F,P+a.measureText(A).width+15,S)}a.restore(),i.handleWeappDraw(a)}))}])}));