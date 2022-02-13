export default {
  async registerOffer(context, data) {
    let offerId;
    function getOfferId() {
      offerId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    getOfferId()
    // console.log(offerId)
    const offerData = {
      user: context.rootGetters.userId,
      date: data.date,
      title: data.title,
      thumbnail: data.thumbnail,
      description: data.description,
      hourlyRate: data.hourlyRate,
      areas: data.areas,
    }
    console.log("action registerOffer: ", offerData)
    const token = context.rootGetters.token;

    // этот объект уедет в firebase
    const response = await fetch(`https://barahlito-bc730-default-rtdb.firebaseio.com/coaches/${offerId}.json?auth=` + token, {
      method: 'PUT',
      body: JSON.stringify(offerData)
    })

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message);
      throw error;
    }

    context.commit('registerOffer', {
      ...offerData,
      id: offerId
    })
  },
  async loadOffers(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(`https://barahlito-bc730-default-rtdb.firebaseio.com/coaches.json`);

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const offers = [];

    for (const key in responseData) {
      const offer = {
        id: key,
        user: responseData[key].user,
        date: responseData[key].date,
        title: responseData[key].title,
        thumbnail: responseData[key].thumbnail,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      }
      offers.push(offer)
    }

    // данные для OffersList.vue, обновляют список из firebase
    context.commit('setOffers', offers)
    context.commit('setFetchTimestamp')
  }
};