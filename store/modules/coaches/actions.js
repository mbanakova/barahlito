export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;

    const coachData = {
      date: data.date,
      title: data.title,
      thumbnail: data.thumbnail,
      description: data.description,
      hourlyRate: data.hourlyRate,
      areas: data.areas,
    }
    // этот объект уедет в firebase
    const response = await fetch(`https://barahlito-bc730-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    })

    // const responseData = await response.json();

    if (!response.ok) {
      // error
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    })
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(`https://barahlito-bc730-default-rtdb.firebaseio.com/coaches.json`);

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        date: responseData[key].date,
        title: responseData[key].title,
        thumbnail: responseData[key].thumbnail,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      }
      coaches.push(coach)
    }

    // данные для CoachesList.vue, обновляют список из firebase
    context.commit('setCoaches', coaches)
    context.commit('setFetchTimestamp')
  }
};