export default {
  // эти 2 экшена отличаются только адресом до API key
  async login(context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAa1OOrSUjXEtWBB71rBaMFzn4dj5yy4N4', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.error.message);
      throw error
    }

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },
  async signup(context, payload) {
    // https://firebase.google.com/docs/reference/rest/auth?hl=sr#section-create-email-password  - check auth docs
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAa1OOrSUjXEtWBB71rBaMFzn4dj5yy4N4', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.error.message);
      throw error
    }

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  }
};