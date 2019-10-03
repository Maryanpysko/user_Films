<template>

  <div>
          
   <div v-for="(film,index) in films" :key="index" @click="deleteFilm()"    >{{ film }}</div>
  <button @click="toggleModal">+</button>
  <div class="modal" v-if="modalOpened">
    <div class="modal-background" @click="toggleModal()"></div>
    <!--<div class="modal-content">{{filmNames}}</div>-->
    <FilmsList @addFilm="addFilm" :user="user" class="modal-content" />
    
  </div>
  </div>
 

  
</template>



<script>
import {mapGetters} from 'vuex'
import UserItem from './UserItem'
import FilmsList from './FilmsList'
import UserModel from '../models/UserModel';
import Messages from './Messages'
export default {
  
  props:{
    
    films:Array,
    user:UserModel
    
  },
  computed:{
   ...mapGetters(['filmNames'])
   
   
  },

  data(){
    return{
      modalOpened:false
    }
  },
  methods:{
    toggleModal(){
      this.modalOpened=!this.modalOpened
    },
    addFilm(filmName){
      this.$store.dispatch('addFilm', {
        userId: this.user.id,
        filmName: filmName,
        
        
      })

      
      //console.log(filmName)
      //console.log(this.user)
      },
    
    deleteFilm(films){
     this.$store.dispatch('deleteFilm',{
       userId:this.user.id,
       films:films
     })
    },
    
    },
  components:{
    FilmsList
    
  }  
}
</script>

<style scoped>
.modal,.modal-background{
  position: fixed;
  left: 0;
  top:0;
  width: 100vw;
  height: 100vh; 
  z-index: 1000;
}
.modal-background{
 background-color: rgba(10, 10, 10, 0.8); 
 z-index: 40;
}
.modal-content{
 background-color: white;
 z-index: 50;
}
.modal{
  display:flex;
  align-items: center;
  justify-content: center;
}


</style>>