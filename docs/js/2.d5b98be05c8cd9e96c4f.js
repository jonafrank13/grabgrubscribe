webpackJsonp([2],{30:function(t,a,r){"use strict";function o(t){r(54)}Object.defineProperty(a,"__esModule",{value:!0});var s=r(36),e=r(56),i=r(4),n=o,l=i(s.a,e.a,!1,n,null,null);a.default=l.exports},31:function(t,a,r){t.exports=r.p+"img/grab.7d39439.png"},36:function(t,a,r){"use strict";var o=r(3);a.a={name:"index",components:{QLayout:o.o,QToolbar:o.u,QToolbarTitle:o.v,QBtn:o.a,QIcon:o.j,QCarousel:o.h,QCard:o.b,QCardTitle:o.g,QCardMedia:o.e,QRating:o.s,QCardMain:o.d,QCardActions:o.c,QCardSeparator:o.f,QField:o.i,QOptionGroup:o.r},data:function(){return{restaurant:{name:"Taste of India",stars:4,type:"Indian",image:"statics/food44.jpeg","short-text":"Spicy, mouth watering food from India"},dish:"burger"}}}},54:function(t,a,r){var o=r(55);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r(24)("be1f3fda",o,!0,{})},55:function(t,a,r){a=t.exports=r(23)(!1),a.push([t.i,".logo{width:50px;height:50px}.banner{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;background:#011427}.banner,.right-side{padding:10px}.ellipsis{color:#fff}",""])},56:function(t,a,r){"use strict";var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("q-layout",{ref:"layout"},[o("q-toolbar",{attrs:{slot:"header",color:"primary"},slot:"header"},[o("q-btn",{attrs:{flat:""}},[o("router-link",{attrs:{to:"/"}},[o("img",{staticClass:"logo",attrs:{src:r(31)}})])],1),t._v(" "),o("q-toolbar-title",[t._v("\n      Grab GrubScribe\n    ")]),t._v(" "),o("q-btn",{attrs:{flat:""}},[o("router-link",{attrs:{to:"book"}},[o("q-icon",{attrs:{name:"help"}})],1)],1),t._v(" "),o("q-btn",{attrs:{flat:""}},[o("router-link",{attrs:{to:"book"}},[o("q-icon",{attrs:{name:"search"}})],1)],1),t._v(" "),o("q-btn",{attrs:{flat:""}},[o("router-link",{attrs:{to:"login"}},[o("q-icon",{attrs:{name:"person_pin"}})],1)],1),t._v(" "),o("q-btn",{attrs:{flat:""}},[o("router-link",{attrs:{to:"login"}},[o("q-icon",{attrs:{name:"add_shopping_cart"}})],1)],1)],1),t._v(" "),o("div",[o("div",{staticClass:"banner"},[o("div",{staticClass:"left-side"},[o("img",{attrs:{src:t.restaurant.image}})]),t._v(" "),o("div",{staticClass:"right-side"},[o("q-btn",{staticClass:"absolute",staticStyle:{top:"30px",right:"8px",transform:"translateY(-50%)"},attrs:{fab:"",round:"",color:"primary",icon:"place"}}),t._v(" "),o("div",{staticClass:"ellipsis"},[t._v(t._s(t.restaurant.name))]),t._v(" "),o("q-rating",{attrs:{slot:"subtitle",max:5},slot:"subtitle",model:{value:t.restaurant.stars,callback:function(a){t.$set(t.restaurant,"stars",a)},expression:"restaurant.stars"}})],1)]),t._v(" "),o("q-field",{attrs:{icon:"cloud",label:"Dish",helper:"Pick the dish you want to order"}},[o("q-option-group",{attrs:{type:"radio",options:[{label:"Burger",value:"burger",color:"amber"},{label:"Pasta",value:"pasta",color:"secondary"}]},model:{value:t.dish,callback:function(a){t.dish=a},expression:"dish"}})],1)],1)],1)},s=[],e={render:o,staticRenderFns:s};a.a=e}});