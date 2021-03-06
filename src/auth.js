// URL and endpoint constants
const API_URL = 'http://localhost:3001/'
// const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login (context, creds, redirect) {
    // context.$http.post(LOGIN_URL, creds, (data) => {
    //   localStorage.setItem('id_token', data.id_token)
    //   localStorage.setItem('access_token', data.access_token)

    //   this.user.authenticated = true

    //   // Redirect to a specified route
    //   if (redirect) {
    //     VueRouter.go(redirect)
    //   }
    // }).error((err) => {
    //   context.error = err
    // })
    if (creds.username === 'admin' && creds.password === 'pw123') {
      localStorage.setItem('id_token', '12345')
      localStorage.setItem('access_token', '12345')

      this.user.authenticated = true

      // Redirect to a specified route
      if (redirect) {
        context.$router.replace(redirect)
      }
    }
    else {
      context.error = 'Username/Password is wrong'
    }
  },

  signup (context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)
      localStorage.setItem('access_token', data.access_token)

      this.user.authenticated = true

      if (redirect) {
        context.$router.replace(redirect)
      }
    }).error((err) => {
      context.error = err
    })
  },

  // To log out, we just need to remove the token
  logout () {
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    this.user.authenticated = false
  },

  checkAuth () {
    var jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }
}
