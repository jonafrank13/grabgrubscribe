webpackJsonp([1],{29:function(e,t,a){"use strict";function o(e){a(49)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(35),s=a(53),n=a(4),i=o,c=n(r.a,s.a,!1,i,"data-v-27bd8f97",null);t.default=c.exports},35:function(e,t,a){"use strict";var o=a(3),r=a(52);t.a={components:{QToggle:o.t},data:function(){return{credentials:{username:"",password:"",email:""},error:"",isLoginMode:!0}},methods:{submit:function(){var e={username:this.credentials.username,password:this.credentials.password};this.isLoginMode?r.a.login(this,e,"/"):(e.email=this.credentials.email,r.a.signup(this,e,"/"))}}}},49:function(e,t,a){var o=a(50);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(24)("2d7d964a",o,!0,{})},50:function(e,t,a){var o=a(25);t=e.exports=a(23)(!1),t.push([e.i,".center[data-v-27bd8f97]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;background:url("+o(a(51))+") no-repeat;background-size:cover;background-color:#fc8019}.alert-danger[data-v-27bd8f97]{color:tomato}.inner[data-v-27bd8f97]{margin:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background:#fff;border:1px solid #dfdfdf;border-radius:10px;padding:50px;box-shadow:0 0 40px 4px #111118}.inner>[data-v-27bd8f97]{margin:auto;margin-top:10px;margin-bottom:10px;text-align:center}.form-group[data-v-27bd8f97]{margin-left:0;margin-right:0}.form-group input[data-v-27bd8f97]{border:1px solid #dfdfdf}.form-group input[data-v-27bd8f97],.submit-btn[data-v-27bd8f97]{-moz-appearance:none;appearance:none;-webkit-appearance:none;width:100%;padding:10px}.submit-btn[data-v-27bd8f97]{color:#fff;background:#4caf50;opacity:.6}.submit-btn[data-v-27bd8f97]:hover{opacity:1}",""])},51:function(e,t,a){e.exports=a.p+"img/bgpic.8fa2838.png"},52:function(e,t,a){"use strict";t.a={user:{authenticated:!1},login:function(e,t,a){"admin"===t.username&&"pw123"===t.password?(localStorage.setItem("id_token","12345"),localStorage.setItem("access_token","12345"),this.user.authenticated=!0,a&&e.$router.replace(a)):e.error="Username/Password is wrong"},signup:function(e,t,a){var o=this;e.$http.post("http://localhost:3001/users/",t,function(t){localStorage.setItem("id_token",t.id_token),localStorage.setItem("access_token",t.access_token),o.user.authenticated=!0,a&&e.$router.replace(a)}).error(function(t){e.error=t})},logout:function(){localStorage.removeItem("id_token"),localStorage.removeItem("access_token"),this.user.authenticated=!1},checkAuth:function(){var e=localStorage.getItem("id_token");this.user.authenticated=!!e},getAuthHeader:function(){return{Authorization:"Bearer "+localStorage.getItem("access_token")}}}},53:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"center"},[a("div",{staticClass:"inner"},[a("div",[a("q-toggle",{attrs:{color:"secondary","left-label":"true","keep-color":"true",label:"Sign up"},model:{value:e.isLoginMode,callback:function(t){e.isLoginMode=t},expression:"isLoginMode"}}),e._v(" "),a("span",{staticClass:"q-option-label"},[e._v("Login")])],1),e._v(" "),e.isLoginMode?a("h2",[e._v("Log In")]):a("h2",[e._v("Sign Up")]),e._v(" "),e.isLoginMode?a("p",[e._v("Log in to your account to start reserving!")]):a("p",[e._v("Sign up and create your account for an exciting journey!")]),e._v(" "),e.error?a("div",{staticClass:"alert-danger"},[a("p",[e._v(e._s(e.error))])]):e._e(),e._v(" "),e.isLoginMode?e._e():a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.email,expression:"credentials.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.credentials.email},on:{input:function(t){t.target.composing||e.$set(e.credentials,"email",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.username,expression:"credentials.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.credentials.username},on:{input:function(t){t.target.composing||e.$set(e.credentials,"username",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}})]),e._v(" "),e.isLoginMode?e._e():a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}})]),e._v(" "),a("button",{staticClass:"submit-btn",on:{click:function(t){e.submit()}}},[e.isLoginMode?a("span",[e._v("Login")]):a("span",[e._v("Sign Up")])])])])},r=[],s={render:o,staticRenderFns:r};t.a=s}});