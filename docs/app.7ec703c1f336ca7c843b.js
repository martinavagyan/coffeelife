(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{393:function(e,t,n){"use strict";n.r(t);var r,o,i,a,c=n(1),l=n(44),p=n(194),d=n(28),u=n(10),f=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(){function e(t,n){void 0===n&&(n=!1),this.id=e.generateId(),this.text=t,this.completed=n}return e.generateId=function(){return this.nextId++},e.nextId=1,f([u.observable,s("design:type",String)],e.prototype,"text",void 0),f([u.observable,s("design:type",Boolean)],e.prototype,"completed",void 0),e}(),g=function(){return(g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},y=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(){function e(e){var t=this;this.addTodo=function(e){t.todos.push(new m(e.text,e.completed))},this.editTodo=function(e,n){t.todos=t.todos.map((function(t){return t.id===e&&("boolean"==typeof n.completed&&(t.completed=n.completed),"string"==typeof n.text&&(t.text=n.text)),t}))},this.deleteTodo=function(e){t.todos=t.todos.filter((function(t){return t.id!==e}))},this.completeAll=function(){t.todos=t.todos.map((function(e){return g(g({},e),{completed:!0})}))},this.clearCompleted=function(){t.todos=t.todos.filter((function(e){return!e.completed}))},this.todos=e}return Object.defineProperty(e.prototype,"activeTodos",{get:function(){return this.todos.filter((function(e){return!e.completed}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"completedTodos",{get:function(){return this.todos.filter((function(e){return e.completed}))},enumerable:!0,configurable:!0}),y([u.observable,h("design:type",Array)],e.prototype,"todos",void 0),y([u.computed,h("design:type",Object),h("design:paramtypes",[])],e.prototype,"activeTodos",null),y([u.computed,h("design:type",Object),h("design:paramtypes",[])],e.prototype,"completedTodos",null),y([u.action,h("design:type",Object)],e.prototype,"addTodo",void 0),y([u.action,h("design:type",Object)],e.prototype,"editTodo",void 0),y([u.action,h("design:type",Object)],e.prototype,"deleteTodo",void 0),y([u.action,h("design:type",Object)],e.prototype,"completeAll",void 0),y([u.action,h("design:type",Object)],e.prototype,"clearCompleted",void 0),e}(),v=n(133),x=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),O=function(e){function t(t){var n=e.call(this)||this;return t&&(n.history=Object(v.syncHistoryWithStore)(t,n)),n}return x(t,e),t}(v.RouterStore);!function(e){e[e.ALL=0]="ALL",e[e.ACTIVE=1]="ACTIVE",e[e.COMPLETED=2]="COMPLETED"}(a||(a={}));a.ALL,a.ACTIVE,a.COMPLETED,(o={})[a.ALL]="All",o[a.ACTIVE]="Active",o[a.COMPLETED]="Completed",(i={})[a.ALL]="#",i[a.ACTIVE]="#active",i[a.COMPLETED]="#completed";var w,E,j,P,k,T,C,D=n(212),A=n(99),R=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),L=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return R(t,e),t.prototype.renderDevTool=function(){},t.prototype.render=function(){return c.createElement("div",{className:"container"},this.props.children,this.renderDevTool())},t}(c.Component),_=n(20),S=n(195),I=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},z=_.a.h1(w||(w=I(["\n  margin: 6px 0 4px;\n  font-size: 1em;\n  color: #fff;\n"],["\n  margin: 6px 0 4px;\n  font-size: 1em;\n  color: #fff;\n"]))),M=_.a.span(E||(E=I(["\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  background: ",";\n  margin-right: 6px;\n"],["\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  background: ",";\n  margin-right: 6px;\n"])),(function(e){return e.color})),B=_.a.span(j||(j=I(["\n  font-size: 1em;\n  display: inline-block;\n  color: #fff;\n  margin: 0;\n"],["\n  font-size: 1em;\n  display: inline-block;\n  color: #fff;\n  margin: 0;\n"]))),V=_.a.div(P||(P=I(["\n  display: flex;\n  align-items: center;\n"],["\n  display: flex;\n  align-items: center;\n"]))),W=_.a.div(k||(k=I(["\n  background: rgba(0, 0, 0, 0.5);\n  padding: 10px;\n  border-radius: 4px;\n"],["\n  background: rgba(0, 0, 0, 0.5);\n  padding: 10px;\n  border-radius: 4px;\n"]))),H=function(e){var t,n=e.name,r=e.fields,o=e.withContainer;return(t=o,function(e){return t?c.createElement(W,null,e):e})(c.createElement(c.Fragment,null,c.createElement(z,null,n),r.map((function(e){return c.createElement(V,{key:e.label},c.createElement(M,{color:e.color}),c.createElement(B,null,e.label,": ",e.value))}))))},J=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r},U=function(e){var t=e.data;return c.createElement(S.a,{onClick:function(e){return console.log("click. ",e)},data:t,margin:{top:50,right:110,bottom:50,left:60},xScale:{type:"point"},yScale:{type:"linear",min:0,max:"auto",stacked:!0,reverse:!1},curve:"natural",axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:10,tickPadding:5,tickRotation:0,legend:"Time",legendOffset:40,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Concentration",legendOffset:-40,legendPosition:"middle"},lineWidth:4,enablePoints:!1,pointSize:11,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabel:"y",pointLabelYOffset:-12,useMesh:!0,legends:[{anchor:"top-right",direction:"row",justify:!1,translateY:-33,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:200,itemHeight:20,itemOpacity:.75,symbolSize:20,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)",effects:[{on:"hover",style:{itemBackground:"rgba(0, 0, 0, .03)",itemOpacity:1}}]}],colors:function(e){e.id;return e.color},crosshairType:"x",enableSlices:"x",sliceTooltip:function(e){return c.createElement(H,{withContainer:!0,name:e.slice.points[0].data.x,fields:J(e.slice.points).reverse().map((function(e){return{color:e.serieColor,label:String(e.serieId),value:e.data.y}}))})}})},Y=n(422),F=n(215),N=n(216),q=n(424),G="caffeine",K=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Q=_.a.div(T||(T=K(["\n  height: 12rem;\n  width: 12rem;\n  margin-right: 1.5rem;\n  margin-bottom: 1.5rem;\n  color: white;\n  padding: 1rem;\n  text-align: center;\n  font-size: 1rem;\n  line-height: normal;\n  float: left;\n  background: ",";\n"],["\n  height: 12rem;\n  width: 12rem;\n  margin-right: 1.5rem;\n  margin-bottom: 1.5rem;\n  color: white;\n  padding: 1rem;\n  text-align: center;\n  font-size: 1rem;\n  line-height: normal;\n  float: left;\n  background: ",";\n"])),(function(e){var t=e.isActive,n=e.canDrop;return t?"blue":n?"green":"red"})),X=function(){var e=Object(q.a)({accept:G,drop:function(){return{name:"Dustbin"}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop(),result:e.getDropResult()}}}),t=e[0],n=t.canDrop,r=t.isOver,o=t.result,i=e[1];console.log(o);var a=n&&r;return c.createElement(Q,{ref:i,isActive:a,canDrop:n},a?"Release to drop":"Drag a box here")},Z=n(425),$=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ee=_.a.li(C||(C=$(["\n  display: inline-block;\n  justify-content: center;  \n  margin: 0px 10px;\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  text-align: center;\n  background: white;\n  justify-self: center;\n  border-radius: 10px;\n  border: 1px dashed gray;\n  padding: 0.5rem 1rem;\n  margin-right: 1.5rem;\n  cursor: move;\n  opacity: ",";\n"],["\n  display: inline-block;\n  justify-content: center;  \n  margin: 0px 10px;\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  text-align: center;\n  background: white;\n  justify-self: center;\n  border-radius: 10px;\n  border: 1px dashed gray;\n  padding: 0.5rem 1rem;\n  margin-right: 1.5rem;\n  cursor: move;\n  opacity: ",";\n"])),(function(e){return e.isDragging?.4:1})),te=function(e){var t=e.name,n=Object(Z.a)({item:{name:t,type:G},end:function(e,t){var n=t.getDropResult();e&&n&&console.log("dropped "+e.name+" in "+n.name+"!")},collect:function(e){return{isDragging:e.isDragging()}}}),r=n[0].isDragging,o=n[1];return c.createElement(ee,{ref:o,isDragging:r},t)};function ne(){return c.createElement("div",null,c.createElement("div",{style:{overflow:"hidden",clear:"both"}},c.createElement(X,null)),c.createElement("div",{style:{overflow:"hidden",clear:"both"}},c.createElement(te,{name:"Coffee"}),c.createElement(te,{name:"Tea"}),c.createElement(te,{name:"Cacao"})))}var re,oe,ie,ae,ce,le,pe=n(211),de=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ue=[{id:"Melatonin production (pg/ml)",color:"rgba(125, 137, 184, 0.7)",data:[{x:"8:00am",y:8.25},{x:"10:00am",y:8.1},{x:"12:00am",y:8},{x:"14:00pm",y:8.15},{x:"16:00pm",y:8.25},{x:"18:00pm",y:9},{x:"20:00pm",y:12.25},{x:"22:00pm",y:22},{x:"24:00pm",y:55},{x:"2:00am",y:70},{x:"4:00am",y:50},{x:"6:00am",y:20}]}],fe=_.a.div(re||(re=de(["\n  width: 100vw;\n  height: 50vh;\n  margin: 0 auto;\n"],["\n  width: 100vw;\n  height: 50vh;\n  margin: 0 auto;\n"]))),se=_.a.div(oe||(oe=de(["\n\n"],["\n\n"]))),me=function(){return c.createElement(Y.a,{backend:pe.isMobile?N.a:F.a},c.createElement(se,null,c.createElement(ne,null),c.createElement(fe,null,c.createElement(U,{data:ue}))))},ge=Object(D.hot)((function(e){var t=e.history;return c.createElement(L,null,c.createElement(A.b,{history:t},c.createElement(A.c,null,c.createElement(A.a,{path:"/",component:me}))))})),ye=function(){return(ye=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},he=[new m("Use Mobx"),new m("Use React",!0)],be=Object(d.a)(),ve=(ie=be,ce=new b(he),le=new O(ie),(ae={}).todo=ce,ae.router=le,ae);l.render(c.createElement(p.a,ye({},ve),c.createElement(ge,{history:be})),document.getElementById("root"))}},[[393,1,2]]]);