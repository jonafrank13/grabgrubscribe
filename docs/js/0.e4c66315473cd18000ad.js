webpackJsonp([0],{27:function(t,a,s){"use strict";function e(t){s(41)}Object.defineProperty(a,"__esModule",{value:!0});var o=s(33),i=s(46),r=s(3),n=e,l=r(o.a,i.a,!1,n,null,null);a.default=l.exports},30:function(t,a,s){t.exports=s.p+"img/grab.7d39439.png"},33:function(t,a,s){"use strict";var e=s(4);a.a={name:"index",components:{QLayout:e.n,QToolbar:e.r,QToolbarTitle:e.s,QBtn:e.a,QIcon:e.i,QCarousel:e.h,QCard:e.b,QCardTitle:e.g,QCardMedia:e.e,QRating:e.q,QCardMain:e.d,QCardActions:e.c,QCardSeparator:e.f},data:function(){return{stars:3,restaurants:[{name:"Cafe Basilico",stars:4,type:"Italian, Cafe",image:"statics/food11.jpg","short-text":"Small plates, salads & sandwiches in an intimate setting."},{name:"Rustom Corner",stars:3.5,type:"Indian, Srilankan",image:"statics/food22.jpeg","short-text":"Lip smacking curries and spices right from the sub continent."},{name:"Pilimco",stars:3,type:"Desserts, Confectionery",image:"statics/food33.jpeg","short-text":"A sweet lover' paradise"},{name:"Ciclo cafe",stars:4,type:"Continental",image:"statics/food33.jpg","short-text":"Small plates, salads & sandwiches in an intimate setting."},{name:"Taste of India",stars:4,type:"Indian",image:"statics/food44.jpeg","short-text":"Spicy, mouth watering food from India"},{name:"KFC",stars:3,type:"Chicken",image:"statics/food55.jpeg","short-text":"Fast food"},{name:"Mc Donald's",stars:3,type:"Burgers and Fries",image:"statics/food66.jpeg","short-text":"Fast Food Joint"},{name:"Cafe Basilico",stars:4,type:"Italian, Cafe",image:"statics/food77.jpeg","short-text":"Small plates, salads & sandwiches in an intimate setting."},{name:"Lime Road",stars:2.5,type:"Chips & Fish",image:"statics/food88.jpeg","short-text":"Home made food in a cozy setting"},{name:"Yellow Pepper",stars:5,type:"Ethiopian",image:"statics/food22.jpg","short-text":"Authentic ethiopian cuisine"}]}}}},41:function(t,a,s){var e=s(42);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(24)("77728e79",e,!0,{})},42:function(t,a,s){var e=s(28);a=t.exports=s(23)(!1),a.push([t.i,".logo{width:50px;height:50px}.food{background-size:cover;background-repeat:no-repeat;height:40vh;color:#fff;font-size:10em;text-align:center}.food-1{background-image:url("+e(s(43))+")}.food-2{background-image:url("+e(s(44))+")}.food-3{background-image:url("+e(s(45))+")}.q-carousel{margin:8px}.restaurants{width:100vw;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.q-card{width:calc(25% - 20px)}.q-card-media>img{height:230px}.q-card-container{min-height:120px}@media (max-width:600px){.q-toolbar-title{font-size:1em}.food{font-size:4em}.q-card{width:calc(100% - 20px)}}",""])},43:function(t,a,s){t.exports=s.p+"img/food1.9ab9626.jpg"},44:function(t,a,s){t.exports=s.p+"img/food2.4c5a2d2.jpg"},45:function(t,a,s){t.exports=s.p+"img/food3.dd5d9fb.jpg"},46:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{ref:"layout"},[e("q-toolbar",{attrs:{slot:"header",color:"primary"},slot:"header"},[e("q-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{src:s(30)}})])],1),t._v(" "),e("q-toolbar-title",[t._v("\n      Grab GrubScribe\n    ")]),t._v(" "),e("q-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"book"}},[e("q-icon",{attrs:{name:"help"}})],1)],1),t._v(" "),e("q-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"book"}},[e("q-icon",{attrs:{name:"search"}})],1)],1),t._v(" "),e("q-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"login"}},[e("q-icon",{attrs:{name:"person_pin"}})],1)],1),t._v(" "),e("q-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"login"}},[e("q-icon",{attrs:{name:"add_shopping_cart"}})],1)],1)],1),t._v(" "),e("div",[e("q-carousel",{attrs:{autoplay:"",arrows:"",dots:""}},[e("div",{staticClass:"food food-1",attrs:{slot:"slide"},slot:"slide"},[t._v("\n        Enjoy \n      ")]),t._v(" "),e("div",{staticClass:"food food-2",attrs:{slot:"slide"},slot:"slide"},[t._v("\n        Delecious Food\n      ")]),t._v(" "),e("div",{staticClass:"food food-3",attrs:{slot:"slide"},slot:"slide"},[t._v("\n        Everyday\n      ")])]),t._v(" "),t._l(t.restaurants,function(a){return e("q-card",{staticClass:"bigger q-ma-sm",attrs:{inline:""}},[e("q-card-media",[e("img",{attrs:{src:a.image}})]),t._v(" "),e("q-card-title",{staticClass:"relative-position"},[e("q-btn",{staticClass:"absolute",staticStyle:{top:"0",right:"8px",transform:"translateY(-50%)"},attrs:{fab:"",round:"",color:"primary",icon:"place"}}),t._v(" "),e("div",{staticClass:"ellipsis"},[t._v(t._s(a.name))]),t._v(" "),e("q-rating",{attrs:{slot:"subtitle",max:5},slot:"subtitle",model:{value:a.stars,callback:function(s){t.$set(a,"stars",s)},expression:"restaurant.stars"}})],1),t._v(" "),e("q-card-main",[e("p",[t._v(t._s(a.type))]),t._v(" "),e("p",{staticClass:"text-faded"},[t._v(t._s(a["short-text"]))])]),t._v(" "),e("q-card-separator"),t._v(" "),e("q-card-actions",[e("q-btn",{attrs:{flat:"",round:"",icon:"event"}}),t._v(" "),e("q-btn",{attrs:{flat:""}},[t._v("Lunch-12:30PM")]),t._v(" "),e("q-btn",{attrs:{flat:""}},[t._v("Dinner-7:30PM")]),t._v(" "),e("q-btn",{attrs:{flat:"",color:"primary"}},[t._v("Reserve")])],1)],1)})],2)],1)},o=[],i={render:e,staticRenderFns:o};a.a=i}});