import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          owner: 'John Doe',
          thumbnail: 'https://www.lowesairduct.com/wp-content/uploads/2019/08/lowes-air-duct-cleaning-service-boston-during-september.jpg',
          title: 'Дача в Бостоне',
          areas: ['leisure', 'hobby', 'home'],
          description:
            " Move right in and enjoy. A wealth of potential in basement as well. ",
          hourlyRate: 30
        },
        {
          id: 'c2',
          owner: 'Сталинида Баррикадовна',
          thumbnail: 'https://www.cashadvance6online.com/data/archive/img/1138961426.jpeg',
          title: 'Советская радиоточка',
          areas: ['home', 'ussr', 'others'],
          description:
            'До сих пор плачу за это удовольствию 265 р в месяц.',
          hourlyRate: 10
        },
        {
          id: 'c3',
          owner: 'Zhang Dong Fang',
          thumbnail: 'https://m1key.me/photography/moscow_2013/moscow_26.jpg',
          title: 'Конспект XVII съезда КПСС',
          areas: ['ussr', 'books', 'hobby', 'home'],
          description:
            'Проходил в Москве с 26 января по 10 февраля 1934 и получил название «Съезд победителей». ',
          hourlyRate: 30
        }
      ]
    }
  },
  mutations,
  actions,
  getters
}