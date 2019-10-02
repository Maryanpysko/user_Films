import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import UserModel from '../models/UserModel'
import FilmModel from '../models/FilmModel'
Vue.use(Vuex, axios)

const ADD_FILM = 'ADD_FILM'
const GET_DATA = 'GET_DATA'
const DELETE_FILM = 'DELETE_FILM'
const SetLocalStorage_Data = 'SetLocaleStorage_Data'
const store = new Vuex.Store({
  state: {
    users: [],
    films: [],
    localStorageUsersFilms: []
  },
  getters: {
    users(state) {
      return state.users
    },
    films: state => state.films,
    filmNames(state) {

      let filmsArr = []
      state.films.forEach(film => {


        filmsArr.push(film.name)

      });

      return filmsArr

    }
  },
  actions: {
    initializeData({ commit }) {
      axios.get('/users.json')
        .then(res => {

          const data = res.data
          commit(GET_DATA, data)
          commit(SetLocalStorage_Data)
        })
    },
    addFilm({ commit }, data) {
      commit(ADD_FILM, data)


    },
    deleteFilm({ commit }, data) {
      commit(DELETE_FILM, data)
    }

  },

  mutations: {

    [GET_DATA](state, data) {

      data.users.forEach((element, index) => {
        let user = new UserModel(element)
        user.id = index
        state.users.push(user)


      });
      data.films.forEach(element => {

        let film = new FilmModel(element)
        state.films.push(film)
      });

    },
    [ADD_FILM](state, data) {

      state.users[data.userId].films.push(data.filmName)
     if(state.users[data.userId].films.length>5){
         state.users[data.userId].films.length=5
     }
      console.log(state.localStorageUsersFilms)
      //state.localStorageUsersFilms[data.userId][data.userId].push(data.filmName)
      localStorage.setItem("usersFilms", JSON.stringify(state.localStorageUsersFilms))

    },
    [DELETE_FILM](state, data) {


      state.users[data.userId].films.splice(state.films.findIndex(film =>
        film === 0), 1)

      localStorage.setItem("usersFilms", JSON.stringify(state.localStorageUsersFilms))
    },
    [SetLocalStorage_Data](state) {
      if (!localStorage.getItem("usersFilms") || localStorage.getItem('usersFilms').length === 0) {

        state.users.forEach(user => {
          var userData = {

          }
          userData[user.id] = []
          state.localStorageUsersFilms.push(userData)

        })

      } else {
        state.localStorageUsersFilms = JSON.parse(localStorage.getItem('usersFilms'))
      }

      for (let i = 0; i < state.users.length; i++) {
        state.users[i].films = state.localStorageUsersFilms[i][i]
      }

    }
  }

})

export default store
