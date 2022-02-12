export default {
  async registerOffer(context, data) {
    const userId = context.rootGetters.userId;

    const offerData = {
      date: data.date,
      title: data.title,
      thumbnail: data.thumbnail,
      description: data.description,
      hourlyRate: data.hourlyRate,
      areas: data.areas,
    }

    const token = context.rootGetters.token;
    // этот объект уедет в firebase
    const response = await fetch(`https://barahlito-bc730-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token, {
      method: 'PUT',
      body: JSON.stringify(offerData)
    })

    // const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message);
      throw error;
    }

    context.commit('registerOffer', {
      ...offerData,
      id: userId
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