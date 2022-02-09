export default {
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId
    // возвращает запросы отфильтрованные по конкретному id объявления
    return state.requests.filter(requests => requests.coachId === coachId)
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};