export default {
  // записывает ответ от firebase в state VUEX
  // setUser(state, payload) {
  //   state.token = payload.token;
  //   state.userId = payload.userId;
  //   state.didAutoLogout = false;
  // },
  setUserId(state, userId) {
    state.userId = userId
  },
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
};