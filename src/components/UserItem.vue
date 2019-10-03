<template>

        <tr >
          <td>{{ usermodel.name }}</td>
          <td>{{ usermodel.age }}</td>
          <td>{{ usermodel.email }}</td>
          <td>{{ usermodel.country }}</td>
          <td><FilmItem :films="usermodel.films" :user="usermodel" /></td> 
    
        </tr>
      
  
</template>



<script>
import FilmItem from'./FilmItem'
import UserModel from '../models/UserModel'

export default {
  
  props:{
    usermodel:UserModel,

  },
  components:{
    FilmItem
  }
   
  
  }
</script>
