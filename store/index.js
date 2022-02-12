import Vuex from 'vuex'
import offersModule from './modules/offers/index.js'
import requestsModule from './modules/requests/index.js'
import authModule from './modules/auth/index.js'

const createStore = () => {

  return new Vuex.Store({
    modules: {
      offers: offersModule,
      requests: requestsModule,
      auth: authModule
    }
  })
}
export default createStore