import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    food: [{
      id: 0,
      descr: 'Сказочное заморское яство',
      generalName: 'Нямушка',
      structure: 'c фуа-гра',
      numberPorsion: 10,
      gift: 'мышь в подарок',
      weight: '0,5',
      customer: false,
      activeItem: false,
      activeHover: false,
      available: true,
      descrProduct: 'Печень утки разварная с артишоками.'
    },
    {
      id: 1,
      descr: 'Сказочное заморское яство',
      generalName: 'Нямушка',
      structure: 'c рыбой',
      numberPorsion: 40,
      gift: '2 мыши в подарок',
      weight: 2,
      customer: false,
      activeItem: false,
      activeHover: false,
      available: true,
      descrProduct: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
    },
    {
      id: 2,
      descr: 'Сказочное заморское яство',
      generalName: 'Нямушка',
      structure: 'c курой',
      numberPorsion: 100,
      gift: '5 мышей в подарок',
      weight: 5,
      customer: true,
      activeItem: false,
      activeHover: false,
      available: false,
      descrProduct: 'Филе из цыплят с трюфелями в бульоне.'
    }
    ]
  },
  getters: {
    food (state) {
      return state.food
    }

  },
  mutations: {
    setActive (state, payload) {
      state.food.activeItem = payload.value
      console.log(state.food.activeItem)
    }
  },
  actions: {},
  modules: {}
})
