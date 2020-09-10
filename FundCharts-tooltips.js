/*!
 * 
 * @description: FundCharts ToolTips.
 * @version: 0.9.7
 * @author: Micheal Wayne(michealwayne@163.com)
 * @time: 2018~2020
 */
!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.FundChartsToolTips=o():t.FundChartsToolTips=o()}(window,(function(){return function(t){var o={};function e(i){if(o[i])return o[i].exports;var l=o[i]={i:i,l:!1,exports:{}};return t[i].call(l.exports,l,l.exports,e),l.l=!0,l.exports}return e.m=t,e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var l in t)e.d(i,l,function(o){return t[o]}.bind(null,l));return i},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=2)}([function(t,o,e){"use strict";o.__esModule=!0;var i="undefined"!=typeof wx&&void 0!==wx.getSystemInfoSync;o.default={isWeapp:i,dpr:(i?wx.getSystemInfoSync().pixelRatio:window.devicePixelRatio)||1,width:70,height:20,font:"10px Arial",pieFont:"bold 22px Arial",labelFont:"bold 12px Arial",textAlign:"center",colors:{color:"#fff",backgroundColor:"#bdbdbd",valColor:"#eee"}}},function(t,o,e){"use strict";o.__esModule=!0,o.handleWeappDraw=void 0,o.isFunction=a,o.handleArguments=function(t){return function(o,e,i,l,r){t.call(this,{xData:i,yDatas:e,xPos:l,yPos:r,index:o})}},o.drawTriangle=function(t,o){return!(!o||3!==o.length)&&(t.beginPath(),t.moveTo(o[0].x,o[0].y),t.lineTo(o[1].x,o[1].y),t.lineTo(o[2].x,o[2].y),t.closePath(),t.fill(),!0)},o.drawPoint=function(t,o,e,i,l,r,a){t.beginPath(),t.lineWidth=0,t.strokeStyle="#fff",t.lineWidth=void 0!==a?a:1,t.arc(o,e,r,0,2*Math.PI,!0),t.closePath(),t.fillStyle=i,t.fill(),a&&t.stroke()};var i,l=e(0);var r=((i=l)&&i.__esModule?i:{default:i}).default.isWeapp;function a(t){return"function"==typeof t}o.handleWeappDraw=r?function(t){a(t.draw)&&t.draw(!0)}:function(){}},function(t,o,e){"use strict";var i=e(3),l=e(4);t.exports={BasicToolTip:i.BasicToolTip,ArrowToolTip:i.ArrowToolTip,KlineToolTip:i.KlineToolTip,PieCenterToolTip:l.PieCenterToolTip,PieLabelToolTip:l.PieLabelToolTip,LabelsToolTip:l.LabelsToolTip}},function(t,o,e){"use strict";o.__esModule=!0,o.KlineToolTip=o.ArrowToolTip=o.BasicToolTip=void 0;var i,l=e(1),r=e(0),a=(i=r)&&i.__esModule?i:{default:i};var n=a.default.colors;o.BasicToolTip=(0,l.handleArguments)((function(t){var o=t.xData,e=t.yDatas,i=t.xPos,r=this.ctx,s=this.opts,d=s.toolTip||{},h=d.width,f=void 0===h?a.default.width:h,c=d.height,u=void 0===c?a.default.height:c,p=d.font,v=void 0===p?a.default.font:p,T=d.color,x=void 0===T?n.color:T,y=d.textAlign,g=void 0===y?a.default.textAlign:y,w=d.backgroundColor,b=void 0===w?n.backgroundColor:w,P=d.showTip;r.save(),r.beginPath(),r.fillStyle=b;var m=i-~~(f/2),A=this._chart.width-s.chartRight-f;m=m<s.chartLeft?s.chartLeft:m>A?A:m,r.fillRect(m,s.chartTop+5,f,u),r.fillStyle=x,r.font=v,r.textAlign=g;var S=(0,l.isFunction)(P)&&P(o,e)||P||o+":"+e.map((function(t){return t.toFixed(2)})).join(",");r.fillText(S,m+~~(f/2),s.chartTop+15),r.closePath(),r.stroke(),r.restore(),(0,l.handleWeappDraw)(r)})),o.ArrowToolTip=(0,l.handleArguments)((function(t){var o=t.xData,e=t.yDatas,i=t.xPos,r=t.index,s=this.ctx,d=this.opts,h=d.toolTip||{},f=h.width,c=void 0===f?a.default.width:f,u=h.height,p=void 0===u?a.default.height:u,v=h.font,T=void 0===v?a.default.font:v,x=h.color,y=void 0===x?n.color:x,g=h.textAlign,w=void 0===g?a.default.textAlign:g,b=h.backgroundColor,P=void 0===b?n.backgroundColor:b,m=h.top,A=void 0===m?12:m,S=h.showTip;s.save(),s.beginPath();var F=this._chart,_=this.datasets,C=this.barWidth;s.strokeStyle=P,s.fillStyle=P;var M=i-~~(c/2),D=F.width-d.chartRight-c;M=M<d.chartLeft?d.chartLeft:M>D?D:M;var L=_[0][r].x,W=_[0][r].y;C&&(L+=~~(this.barWidth/2),W=Math.min.apply(null,_.map((function(t){return t[r].y}))));var k=W+(this.drawer.zeroY&&W>this.drawer.zeroY?A:-(p+A)),R=!0;k<d.chartTop&&(R=!1,k=d.chartTop);var j=k+p;C&&this.drawer.zeroY&&k>this.drawer.zeroY&&(j=k),k+p>F.height-25&&(R=!1,k=F.height-25-p),s.fillRect(M,k,c,p),R&&(0,l.drawTriangle)(s,[{x:Math.max(L-3,M),y:j},{x:Math.min(L+3,M+c),y:j},{x:L,y:j+5*(j>k?1:-1)}]),s.fillStyle=y,s.font=T,s.textAlign=w;var O=(0,l.isFunction)(S)&&S(o,e)||S||o+":"+e.map((function(t){return t.toFixed(2)})).join(",");s.fillText(O,M+~~(c/2),k+10),s.closePath(),s.stroke(),s.restore(),(0,l.handleWeappDraw)(s)})),o.KlineToolTip=(0,l.handleArguments)((function(t){var o=t.xData,e=t.xPos,i=t.yPos;e=Math.abs(e),i=Math.abs(i);var r=this.ctx,s=this.opts,d=s.toolTip||{},h=d.xWidth,f=void 0===h?a.default.width:h,c=d.xHeight,u=void 0===c?15:c,p=d.yWidth,v=void 0===p?40:p,T=d.yHeight,x=void 0===T?15:T,y=d.font,g=void 0===y?a.default.font:y,w=d.color,b=void 0===w?n.color:w,P=d.textAlign,m=void 0===P?a.default.textAlign:P,A=d.backgroundColor,S=void 0===A?n.backgroundColor:A,F=d.showTip,_=d.showValTip;r.save(),r.beginPath();var C=this._chart;r.strokeStyle=S,r.fillStyle=S;var M=e-~~(f/2),D=i-~~(x/2),L=C.width-s.chartRight-f,W=C.height-40;M=M<s.chartLeft?s.chartLeft:M>L?L:M,D=D<s.chartTop?s.chartTop:D>W?W:D,r.fillRect(M,W,f,u),r.fillRect(s.chartLeft,D,v,x),r.fillStyle=b,r.font=g,r.textAlign=m,r.fillText((0,l.isFunction)(F)&&F(o)||F||o,M+~~(f/2),W+8);var k=((i-this.drawer.yBasic)/this.drawer.yRate).toFixed(2);r.fillText((0,l.isFunction)(_)&&_(k)||_||k,s.chartLeft+~~(v/2),D+8),r.closePath(),r.stroke(),r.restore(),(0,l.handleWeappDraw)(r)}))},function(t,o,e){"use strict";o.__esModule=!0,o.LabelsToolTip=o.PieLabelToolTip=o.PieCenterToolTip=void 0;var i,l=e(1),r=e(0),a=(i=r)&&i.__esModule?i:{default:i};var n=a.default.colors;o.PieCenterToolTip=(0,l.handleArguments)((function(t){var o=t.yDatas,e=t.index,i=this.ctx,r=this.opts,s=r.toolTip||{},d=s.font,h=void 0===d?a.default.pieFont:d,f=s.color,c=s.valColor,u=void 0===c?n.valColor:c,p=s.textAlign,v=void 0===p?a.default.textAlign:p,T=s.valY,x=s.showTip,y=s.showValTip;i.save();var g=this.drawer.origin;T=T||g.y,i.fillStyle=f||r.colors[e],i.font=h,i.textAlign=v;var w=(0,l.isFunction)(x)&&x(e)||x||"";i.fillText(w,g.x,T-10),i.fillStyle=u;var b=(0,l.isFunction)(y)&&y(o[0])||y||(100*o[0]).toFixed(1);i.fillText(b,g.x,T+15),i.restore(),(0,l.handleWeappDraw)(i)})),o.PieLabelToolTip=(0,l.handleArguments)((function(t){var o=t.yDatas,e=t.index,i=this.ctx,r=this.opts,s=r.toolTip||{},d=s.font,h=void 0===d?a.default.labelFont:d,f=s.color,c=s.valColor,u=void 0===c?n.valColor:c,p=s.textAlign,v=void 0===p?a.default.textAlign:p,T=s.showTip,x=s.showValTip;i.save();var y=this.drawer,g=y.origin,w=y.radius,b=y.centerArr,P=Math.sin(b[e])*w,m=Math.cos(b[e])*w;r.widthRates&&(P*=r.widthRates[e]||1,m*=r.widthRates[e]||1);var A=r.chartLeft,S=this._chart.width-A;i.beginPath(),i.moveTo(g.x+m,g.y+P),i.lineTo(g.x+1.2*m,g.y+1.2*P),i.lineTo(m>0?S-20:A+20,g.y+1.2*P),i.strokeStyle=i.fillStyle=r.colors[e],i.lineWidth=1,i.stroke(),i.font=h,i.textAlign=v,i.textBaseline="middle",i.fillStyle=f||r.colors[e];var F=(0,l.isFunction)(T)&&T(e)||T||"";i.fillText(F,m>0?S:A,g.y+1.2*P-10),i.fillStyle=u;var _=(0,l.isFunction)(x)&&x(o[0])||x||(100*o[0]).toFixed(2);i.fillText(_,m>0?S:A,g.y+1.2*P+5),i.closePath(),i.restore(),(0,l.handleWeappDraw)(i)})),o.LabelsToolTip=(0,l.handleArguments)((function(t){var o=this,e=t.yDatas,i=t.index,r=this.ctx,s=this.opts,d=s.toolTip||{},h=d.font,f=void 0===h?a.default.labelFont:h,c=d.color,u=d.valColor,p=void 0===u?n.valColor:u,v=d.valY,T=d.valX,x=d.showTip,y=d.showValTip;r.save();var g=this.side,w=this.drawer.origin,b=this.dataset,P=T;P||(P=w.x>this._chart.width/2?s.chartLeft+20:this._chart.width-s.chartRight-70);var m=v||w.y;g?b.map((function(t,o){(0,l.drawPoint)(r,P,m-4+15*o,s.colors[o],s.colors[o],4,1)})):(0,l.drawPoint)(r,P,m-4,s.colors[i],s.colors[i],4,1),r.font=f;var A=(0,l.isFunction)(x)&&x(i)||x||"";if(g)b.map((function(t,i){r.fillStyle=c||s.colors[i],r.fillText(A,P+10,m+15*i);var a=(0,l.isFunction)(y)&&y(e[0])||y||(e[0]*(o.side?100:1)).toFixed(2);r.fillStyle=p,r.fillText(a,P+r.measureText(A).width+15,m+15*i)}));else{r.fillStyle=c||s.colors[i],r.fillText(A,P+10,m);var S=(0,l.isFunction)(y)&&y(e[0])||y||(e[0]*(this.side?100:1)).toFixed(2);r.fillText(S,P+r.measureText(A).width+15,m)}r.restore(),(0,l.handleWeappDraw)(r)}))}])}));