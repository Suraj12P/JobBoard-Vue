<script setup>
   import { ref,defineProps } from 'vue';

   const inputValue = ref('');
const props = defineProps(['onSearch','loading']);

  function handleInputChange() {
  
  if (inputValue.value.trim()) {
    props.onSearch(inputValue.value); 
    
    }
}
</script>

<template>
  <div class="main">
   <input type=text v-model="inputValue" @input="handleInputChange"  placeholder="Search Jobs...." />
   <button @click="handleInputChange" >Search</button>
 
  </div>
 
</template>

<style scoped>
 .main{
   justify-content:center;
   display:flex;
 }
button{
   background-color:white;
   border:1px solid green;
   color:green;
   padding:12px 20px;
   text-align:center;
   display:inline-block;
   font-size:18px;
   margin:10px;
   transition-duration:0.6s;
   cursor:pointer;
   border-radius:10px;
   
   
}
button:hover {
  background-color:green;
  color:white
  
}
input[type=text]{
   width: 30%;
  padding: 18px 20px;
  margin:10px;
  font-size:18px;
  border: 1px solid green;
  border-radius: 10px;
  box-sizing: border-box;
}

</style>
