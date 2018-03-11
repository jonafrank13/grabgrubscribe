 <template>
    <div class="center">
        <div class="inner">
        <h2>Log In</h2>
        <p>Log in to your account to start reserving!</p>
        <div class="alert-danger" v-if="error">
            <p>{{ error }}</p>
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
        <button class="submit-btn" @click="submit()">Login</button>
        </div>
    </div>
  </template>

  <script>
  import auth from '../auth'
  export default {
    data () {
      return {
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit () {
        var credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }
        auth.login(this, credentials, '/')
      }
    }

  }
  </script>
  <style scoped>
  .center {
      display: flex;
      flex-flow: column;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      background: #fc8019;
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
      padding: 50px;
      box-shadow: 0 0 40px 4px #111118;
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