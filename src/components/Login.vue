 <template>
    <div class="center">
        <div class="inner">
        <div>
            <q-toggle v-model="isLoginMode" color="secondary" left-label="true" keep-color=true label="Sign up" />
            <span class="q-option-label">Login</span>
        </div>
        <h2 v-if="isLoginMode">Log In</h2>
        <h2 v-else>Sign Up</h2>
        <p v-if="isLoginMode">Log in to your account to start reserving!</p>
        <p v-else>Sign up and create your account for an exciting journey!</p>
        <div class="alert-danger" v-if="error">
            <p>{{ error }}</p>
        </div>
        <div v-if="!isLoginMode" class="form-group">
            <input
            type="text"
            class="form-control"
            placeholder="Email"
            v-model="credentials.email"
            >
        </div>
        <div class="form-group">
            <input
            type="text"
            class="form-control"
            placeholder="Username"
            v-model="credentials.username"
            >
        </div>
        <div class="form-group">
            <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="credentials.password"
            >
        </div>
        <div v-if="!isLoginMode" class="form-group">
            <input
            type="password"
            class="form-control"
            placeholder="Confirm Password"
            v-model="credentials.password"
            >
        </div>
        <button class="submit-btn" @click="submit()">
            <span v-if="isLoginMode">Login</span>
            <span v-else>Sign Up</span>
        </button>
        <button><router-link :to="'landing'">Cancel</router-link></button>
        </div>
    </div>
  </template>

  <script>
  import { QToggle } from 'quasar'
  import auth from '../auth'
  export default {
    components: { QToggle },
    data () {
      return {
        credentials: {
          username: '',
          password: '',
          email: ''
        },
        error: '',
        isLoginMode: true
      }
    },
    methods: {
      submit () {
        var credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }
        if (this.isLoginMode) {
          auth.login(this, credentials, '/landing')
        }
        else {
          credentials.email = this.credentials.email
          auth.signup(this, credentials, '/landing')
        }
      }
    }

  }
  </script>
  <style scoped>
  h2 {
      font-size: 2rem;
  }
  .center {
      display: flex;
      flex-flow: column;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      background: url('../assets/bgpic.png') no-repeat;
      background-size: cover;
      background-color: #fc8019;
  }
  .alert-danger {
      color: tomato;
  }
  .inner {
      margin: auto;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      background: white;
      border: 1px solid #dfdfdf;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 0 40px 4px #111118;
      overflow: auto;
  }
  .inner > * {
      margin: auto;
      margin-top: 10px;
      margin-bottom: 10px;
      text-align: center;
  }
  .form-group {
      margin-left: 0px;
      margin-right: 0px;
  }
  .form-group input {
      appearance: none;
      -webkit-appearance:none;
      width: 100%;
      padding: 10px;
      border: 1px solid #dfdfdf;
  }
  .submit-btn {
      padding: 10px;
      appearance: none;
      -webkit-appearance:none;
      width: 100%;
      color: white;
      background: #4caf50;
      opacity: 0.6;
  }
  .submit-btn:hover {
      opacity: 1;
  }
  </style>