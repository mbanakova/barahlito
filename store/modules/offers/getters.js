export default {
  offers(state) {
    return state.offers;
  },
  hasOffers(state) {
    return state.offers && state.offers.length > 0;
  },
  isOffer(_, getters, _2, rootGetters) {
    const offers = getters.offers;
    const userId = rootGetters.userId;
    return offers.some(offer => offer.id === userId)
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};