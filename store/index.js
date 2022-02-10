import Vuex from 'vuex'
import coachesModule from './modules/coaches/index.js'
import requestsModule from './modules/requests/index.js'

const createStore = () => {

  return new Vuex.Store({
    modules: {
      coaches: coachesModule,
      requests: requestsModule
    },
    state() {
      return {
        userId: 'c8'
      };
    },
    getters: {
      userId(state) {
        return state.userId
      }
    }
  })
}
export default createStore