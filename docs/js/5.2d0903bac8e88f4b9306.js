webpackJsonp([5],{32:function(t,l,o){"use strict";function e(t){o(68)}Object.defineProperty(l,"__esModule",{value:!0});var a=o(41),n=o(70),i=o(4),r=e,s=i(a.a,n.a,!1,r,"data-v-3e479ff8",null);l.default=s.exports},34:function(t,l,o){t.exports=o.p+"img/logo.18cde70.png"},41:function(t,l,o){"use strict";var e=o(3);l.a={components:{QLayout:e.p,QToolbar:e.y,QToolbarTitle:e.z,QBtn:e.a,QIcon:e.j,QRadio:e.s},data:function(){return{menu:[{label:"Margherita",cost:"7.95£",desc:"Cheese and Tomato Sauce"},{label:"Ham and Mushroom",cost:"8.95£",desc:"Ham and Mushroom"},{label:"Hawaiian",cost:"8.95£",desc:"Ham and pineapple"},{label:"American Hot",cost:"9.50£",desc:"Onions, Green Peppers, Chilli And Pepperoni"}],columns:[{label:""},{label:"Monday"},{label:"Tuesday"},{label:"Wednesday"},{label:"Thursday"},{label:"Friday"},{label:"Saturday"},{label:"Sunday"}],discounts:[{label:"Flat 15%",value:"15"},{label:"Flat 20%",value:"20"}],time:"all",mornOpt:["Hawaiian","","","","","",""],lunchOpt:["Flat 15%","","","","","",""],postOpt:["Flat 20%","","","","","",""]}},methods:{test:function(){console.log("clicked"),console.log(this.mornOpt,this.lunchOpt,this.postOpt)},chooseTiming:function(t){this.time=t}}}},68:function(t,l,o){var e=o(69);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(24)("09ec9183",e,!0,{})},69:function(t,l,o){l=t.exports=o(23)(!1),l.push([t.i,".logo[data-v-3e479ff8]{width:50px;height:50px}.content[data-v-3e479ff8]{overflow-x:scroll}.timing[data-v-3e479ff8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#dfdfdf}.coll[data-v-3e479ff8],.roww[data-v-3e479ff8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-negative:0;flex-shrink:0}.roww[data-v-3e479ff8]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;border-bottom:1px solid #dfdfdf}.roww[data-v-3e479ff8]:hover{background-color:#dfdfdf}.coll[data-v-3e479ff8]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;width:150px;white-space:normal;padding:20px}.coll[data-v-3e479ff8]:first-child{margin-left:0}.header.roww[data-v-3e479ff8]{background-color:#ff6f00!important}.header .coll[data-v-3e479ff8]:not(:first-child){padding-left:50px;font-weight:700;color:#fff}.discount[data-v-3e479ff8]{background-color:#ff9800}.discount .coll[data-v-3e479ff8]{color:#fff}.discount[data-v-3e479ff8]:hover{background-color:#ffc107}.roww .coll[data-v-3e479ff8]:first-child{background-color:#ff6f00;color:#fff;text-align:center}",""])},70:function(t,l,o){"use strict";var e=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("q-layout",{ref:"layout"},[e("q-toolbar",{attrs:{slot:"header",color:"primary"},slot:"header"},[e("q-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"landing"}},[e("img",{staticClass:"logo",attrs:{src:o(34)}})])],1),t._v(" "),e("q-toolbar-title",[t._v("\n      Eat As You Go\n    ")]),t._v(" "),e("q-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"plan"}},[e("q-icon",{attrs:{name:"help"}})],1)],1),t._v(" "),e("q-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"book"}},[e("q-icon",{attrs:{name:"search"}})],1)],1),t._v(" "),e("q-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"login"}},[e("q-icon",{attrs:{name:"person_pin"}})],1)],1),t._v(" "),e("q-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"login"}},[e("q-icon",{attrs:{name:"add_shopping_cart"}})],1)],1)],1),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"timing"},[e("q-btn",{attrs:{outline:"true",rounded:"true"},on:{click:function(l){t.chooseTiming("all")}}},[t._v("All")]),t._v(" "),e("q-btn",{attrs:{outline:"true",rounded:"true"},on:{click:function(l){t.chooseTiming("morn")}}},[t._v("Morning")]),t._v(" "),e("q-btn",{attrs:{outline:"true",rounded:"true"},on:{click:function(l){t.chooseTiming("lunch")}}},[t._v("Lunch")]),t._v(" "),e("q-btn",{attrs:{outline:"true",rounded:"true"},on:{click:function(l){t.chooseTiming("postl")}}},[t._v("Post Lunch")])],1),t._v(" "),e("div",{staticClass:"roww header"},t._l(t.columns,function(l){return e("div",{key:l.label,staticClass:"coll"},[t._v(t._s(l.label))])})),t._v(" "),t._l(t.menu,function(l){return e("div",{key:l.label,staticClass:"roww"},[e("div",{staticClass:"coll"},[t._v(t._s(l.label))]),t._v(" "),t._l(7,function(o){return e("div",{staticClass:"coll"},["all"==t.time||"morn"==t.time?e("q-radio",{attrs:{val:l.label,label:"Morning"},model:{value:t.mornOpt[o-1],callback:function(l){t.$set(t.mornOpt,o-1,l)},expression:"mornOpt[n-1]"}}):t._e(),t._v(" "),"all"==t.time||"lunch"==t.time?e("q-radio",{attrs:{val:l.label,color:"red",label:"Lunch"},model:{value:t.lunchOpt[o-1],callback:function(l){t.$set(t.lunchOpt,o-1,l)},expression:"lunchOpt[n-1]"}}):t._e(),t._v(" "),"all"==t.time||"postl"==t.time?e("q-radio",{attrs:{val:l.label,color:"light-blue",label:"Post Lunch"},model:{value:t.postOpt[o-1],callback:function(l){t.$set(t.postOpt,o-1,l)},expression:"postOpt[n-1]"}}):t._e()],1)})],2)}),t._v(" "),t._l(t.discounts,function(l){return e("div",{key:l.label,staticClass:"roww discount"},[e("div",{staticClass:"coll"},[t._v(t._s(l.label))]),t._v(" "),t._l(7,function(o){return e("div",{staticClass:"coll"},["all"==t.time||"morn"==t.time?e("q-radio",{attrs:{val:l.label,label:"Morning"},model:{value:t.mornOpt[o-1],callback:function(l){t.$set(t.mornOpt,o-1,l)},expression:"mornOpt[n-1]"}}):t._e(),t._v(" "),"all"==t.time||"lunch"==t.time?e("q-radio",{attrs:{val:l.label,color:"red",label:"Lunch"},model:{value:t.lunchOpt[o-1],callback:function(l){t.$set(t.lunchOpt,o-1,l)},expression:"lunchOpt[n-1]"}}):t._e(),t._v(" "),"all"==t.time||"postl"==t.time?e("q-radio",{attrs:{val:l.label,color:"light-blue",label:"Post Lunch"},model:{value:t.postOpt[o-1],callback:function(l){t.$set(t.postOpt,o-1,l)},expression:"postOpt[n-1]"}}):t._e()],1)})],2)})],2)],1)},a=[],n={render:e,staticRenderFns:a};l.a=n}});