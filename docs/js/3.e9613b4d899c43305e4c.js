webpackJsonp([3],{30:function(e,t,a){"use strict";function o(e){a(57)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(38),n=a(61),s=a(4),i=o,c=s(r.a,n.a,!1,i,"data-v-2827fa03",null);t.default=c.exports},38:function(e,t,a){"use strict";var o=a(3),r=a(60);t.a={components:{QToggle:o.x},data:function(){return{credentials:{username:"",password:"",email:""},error:"",isLoginMode:!0}},methods:{submit:function(){var e={username:this.credentials.username,password:this.credentials.password};this.isLoginMode?r.a.login(this,e,"/landing"):(e.email=this.credentials.email,r.a.signup(this,e,"/landing"))}}}},57:function(e,t,a){var o=a(58);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(24)("456e8614",o,!0,{})},58:function(e,t,a){var o=a(25);t=e.exports=a(23)(!1),t.push([e.i,".center[data-v-2827fa03]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;background:url("+o(a(59))+") no-repeat;background-size:cover;background-color:#fc8019}.alert-danger[data-v-2827fa03]{color:tomato}.inner[data-v-2827fa03]{margin:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background:#fff;border:1px solid #dfdfdf;border-radius:10px;padding:50px;box-shadow:0 0 40px 4px #111118}.inner>[data-v-2827fa03]{margin:auto;margin-top:10px;margin-bottom:10px;text-align:center}.form-group[data-v-2827fa03]{margin-left:0;margin-right:0}.form-group input[data-v-2827fa03]{border:1px solid #dfdfdf}.form-group input[data-v-2827fa03],.submit-btn[data-v-2827fa03]{-moz-appearance:none;appearance:none;-webkit-appearance:none;width:100%;padding:10px}.submit-btn[data-v-2827fa03]{color:#fff;background:#4caf50;opacity:.6}.submit-btn[data-v-2827fa03]:hover{opacity:1}",""])},59:function(e,t,a){e.exports=a.p+"img/bgpic.8fa2838.png"},60:function(e,t,a){"use strict";t.a={user:{authenticated:!1},login:function(e,t,a){"admin"===t.username&&"pw123"===t.password?(localStorage.setItem("id_token","12345"),localStorage.setItem("access_token","12345"),this.user.authenticated=!0,a&&e.$router.replace(a)):e.error="Username/Password is wrong"},signup:function(e,t,a){var o=this;e.$http.post("http://localhost:3001/users/",t,function(t){localStorage.setItem("id_token",t.id_token),localStorage.setItem("access_token",t.access_token),o.user.authenticated=!0,a&&e.$router.replace(a)}).error(function(t){e.error=t})},logout:function(){localStorage.removeItem("id_token"),localStorage.removeItem("access_token"),this.user.authenticated=!1},checkAuth:function(){var e=localStorage.getItem("id_token");this.user.authenticated=!!e},getAuthHeader:function(){return{Authorization:"Bearer "+localStorage.getItem("access_token")}}}},61:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"center"},[a("div",{staticClass:"inner"},[a("div",[a("q-toggle",{attrs:{color:"secondary","left-label":"true","keep-color":"true",label:"Sign up"},model:{value:e.isLoginMode,callback:function(t){e.isLoginMode=t},expression:"isLoginMode"}}),e._v(" "),a("span",{staticClass:"q-option-label"},[e._v("Login")])],1),e._v(" "),e.isLoginMode?a("h2",[e._v("Log In")]):a("h2",[e._v("Sign Up")]),e._v(" "),e.isLoginMode?a("p",[e._v("Log in to your account to start reserving!")]):a("p",[e._v("Sign up and create your account for an exciting journey!")]),e._v(" "),e.error?a("div",{staticClass:"alert-danger"},[a("p",[e._v(e._s(e.error))])]):e._e(),e._v(" "),e.isLoginMode?e._e():a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.email,expression:"credentials.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.credentials.email},on:{input:function(t){t.target.composing||e.$set(e.credentials,"email",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.username,expression:"credentials.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.credentials.username},on:{input:function(t){t.target.composing||e.$set(e.credentials,"username",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}})]),e._v(" "),e.isLoginMode?e._e():a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}})]),e._v(" "),a("button",{staticClass:"submit-btn",on:{click:function(t){e.submit()}}},[e.isLoginMode?a("span",[e._v("Login")]):a("span",[e._v("Sign Up")])])])])},r=[],n={render:o,staticRenderFns:r};t.a=n}});