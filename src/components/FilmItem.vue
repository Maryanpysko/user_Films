<template>

  <div>
          <div v-for="(film,index) in films" :key="index"  >{{ film }}</div> 
  <div>
  <button @click="openModal">+</button>
  <div class="modal" v-if="modalOpened">
    <div class="modal-background"></div>
    <button>Close</button>
    <div class="modal-content"
    v-for="(film,index) in films" :key="index" >content</div>
  </div>
  </div>
  </div>
         
          

  
</template>



<script>

import UserItem from './UserItem'
export default {
  
  props:{
    
    films:Array,
    
    
  },
  data(){
    return{
      modalOpened:false
    }
  },
  methods:{
    openModal(){
      this.modalOpened=true
    }
  },
    
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