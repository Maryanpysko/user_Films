import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import UserModel from '../models/UserModel'
import FilmModel from '../models/FilmModel'
Vue.use(Vuex,axios)
const GET_USERS ='GET_USERS'
const GET_FILMS ='GET_FILMS'
const store = new Vuex.Store({
  state:{
   users:[],
   films:[]
   
  },
  getters:{
   users:state => state.users,
   films:state => state.films
  },
  actions:{
    getUsers({commit}){
      axios.get('/users.json')
      .then(res => {
         console.log(res)
         const data = res.data
         commit(GET_USERS, data)
         
       })
    },
    getFilms({commit}){
      axios.get('/users.json')
      .then(res => {
         console.log(res)
         const data = res.data
         
         commit(GET_FILMS, data)
      })
    
  }
 },
  mutations:{
    
    [GET_USERS](state,data){
      
       data.users.forEach(element => {
      let user =new UserModel(element)
       state.users.push(user)
       
       
      });
      console.log(state.users)
    },
    [GET_FILMS](state,data){
      data.films.forEach(element => {
        
        let film =new FilmModel(element)
         state.films.push(film)
        });
  
      console.log(state.films)
    } 
  } 
 
})
  
export default store