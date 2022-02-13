import Cookie from 'js-cookie';

export default {
  authenticateUser(vuexContext, authData) {
    let authUrl =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      process.env.API_KEY;
    if (!authData.isLogin) {
      authUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key" +
        process.env.API_KEY;
    }
    return this.$axios
      .$post(authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
      .then((result) => {
        vuexContext.commit('setToken', result.idToken);
        vuexContext.commit('setUserId', result.localId);
        localStorage.setItem('token', result.idToken);
        localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000);

        Cookie.set('jwt', result.idToken);
        Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000);
      })
      .catch((e) => {
        const error = new Error(e)
        throw error
      });
  },
  initAuth(vuexContext, request) {
    let token;
    let expirationDate;

    if (request) {
      if (!request.headers.cookie) {
        return;
      }
      const jwtCookie = request.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
      if (!jwtCookie) {
        return
      }
      token = jwtCookie.split('=')[1]
      expirationDate = request.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split('=')[1];
    } else {
      token = localStorage.getItem('token');
      expirationDate = localStorage.getItem('tokenExpiration');

      if (new Date().getTime() > +expirationDate || !token) {
        console.log('no token or invalid token')
        vuexContext.dispatch('logout');
        return;
      }
    }
    vuexContext.commit('setToken', token)
  },
  logout(vuexContext) {
    vuexContext.commit('clearToken');
    Cookie.remove('jwt');
    Cookie.remove('expirationDate');
    if (process.client) {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
    }
  }
};