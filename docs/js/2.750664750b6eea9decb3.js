webpackJsonp([2],{29:function(e,t,a){"use strict";function o(e){a(47)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(34),n=a(50),s=a(3),i=o,c=s(r.a,n.a,!1,i,"data-v-67bbee7c",null);t.default=c.exports},34:function(e,t,a){"use strict";var o=a(49);t.a={data:function(){return{credentials:{username:"",password:""},error:""}},methods:{submit:function(){var e={username:this.credentials.username,password:this.credentials.password};o.a.login(this,e,"/")}}}},47:function(e,t,a){var o=a(48);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(24)("5e5dcba0",o,!0,{})},48:function(e,t,a){t=e.exports=a(23)(!1),t.push([e.i,".center[data-v-67bbee7c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;background:#fc8019}.alert-danger[data-v-67bbee7c]{color:tomato}.inner[data-v-67bbee7c]{margin:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background:#fff;border:1px solid #dfdfdf;border-radius:10px;padding:50px;box-shadow:0 0 40px 4px #111118}.inner>[data-v-67bbee7c]{margin:auto;margin-top:10px;margin-bottom:10px;text-align:center}.form-group[data-v-67bbee7c]{margin-left:0;margin-right:0}.form-group input[data-v-67bbee7c]{border:1px solid #dfdfdf}.form-group input[data-v-67bbee7c],.submit-btn[data-v-67bbee7c]{-moz-appearance:none;appearance:none;-webkit-appearance:none;width:100%;padding:10px}.submit-btn[data-v-67bbee7c]{color:#fff;background:#4caf50;opacity:.6}.submit-btn[data-v-67bbee7c]:hover{opacity:1}",""])},49:function(e,t,a){"use strict";t.a={user:{authenticated:!1},login:function(e,t,a){"admin"===t.username&&"pw123"===t.password?(localStorage.setItem("id_token","12345"),localStorage.setItem("access_token","12345"),this.user.authenticated=!0,a&&e.$router.replace(a)):e.error="Username/Password is wrong"},signup:function(e,t,a){var o=this;e.$http.post("http://localhost:3001/users/",t,function(t){localStorage.setItem("id_token",t.id_token),localStorage.setItem("access_token",t.access_token),o.user.authenticated=!0,a&&e.$router.replace(a)}).error(function(t){e.error=t})},logout:function(){localStorage.removeItem("id_token"),localStorage.removeItem("access_token"),this.user.authenticated=!1},checkAuth:function(){var e=localStorage.getItem("id_token");this.user.authenticated=!!e},getAuthHeader:function(){return{Authorization:"Bearer "+localStorage.getItem("access_token")}}}},50:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"center"},[a("div",{staticClass:"inner"},[a("h2",[e._v("Log In")]),e._v(" "),a("p",[e._v("Log in to your account to start reserving!")]),e._v(" "),e.error?a("div",{staticClass:"alert-danger"},[a("p",[e._v(e._s(e.error))])]):e._e(),e._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.username,expression:"credentials.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.credentials.username},on:{input:function(t){t.target.composing||e.$set(e.credentials,"username",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}})]),e._v(" "),a("button",{staticClass:"submit-btn",on:{click:function(t){e.submit()}}},[e._v("Login")])])])},r=[],n={render:o,staticRenderFns:r};t.a=n}});