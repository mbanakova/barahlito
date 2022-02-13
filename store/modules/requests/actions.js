export default {
  // context - это название мутации
  async contactOffer(context, payload) {
    console.log(payload)
    const newRequest = {
      userId: context.rootGetters.userId,
      userEmail: payload.userEmail,
      message: payload.message,
    }
    const response = await fetch(`https://barahlito-bc730-default-rtdb.firebaseio.com/requests/${payload.offerId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request');
      throw error
    }

    newRequest.id = responseData.name;

    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest)
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(`https://barahlito-bc730-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token)
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch requests')
      throw error
    }

    const requests = []

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,

      }
      requests.push(request)
    }
    context.commit('setRequests', requests)
  }
};