export default {
  registerOffer(state, payload) {
    state.offers.push(payload)
  },
  setOffers(state, payload) {
    state.offers = payload
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};