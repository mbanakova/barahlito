export default {
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId,
      title: data.title,
      thumbnail: data.thumbnail,
      description: data.description,
      hourlyRate: data.hourlyRate,
      areas: data.areas,
    }

    context.commit('registerCoach', coachData)
  }
};