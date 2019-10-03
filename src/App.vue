<template>
 <table>
    <thead>
       
       <tr>
          <th v-for="(key,index) in columns"
          :key='index'>{{key}}
          
          </th>
       </tr>
    </thead>
    <tbody>
      <UserItem v-for="(usermodel,index) in users" :key="index" :usermodel="usermodel" /> 
     
      
      
    </tbody>
    
 </table>
 
</template>

<script>
import UserItem from './components/UserItem'
import FilmItem from './components/FilmItem'
import {mapGetters} from 'vuex'

export default{
  data(){
     return{
        columns:['Name','Age','Email','Counrty','Films']
     }
  },
   mounted() {
      this.$store.dispatch('getUsers')
      this.$store.dispatch('getFilms')
   },
   computed:{
      ...mapGetters(['users','films'])
      
   },
   components:{
      UserItem,
      FilmItem
      
      
   }
   
  
 
}



</script>

<style>
th,tr,td{
  border: 1px black solid;
  text-align: center;
  color: #2c3e50;
  margin: 100px;
  
}
table{
   border-spacing: 0;

}
</style>