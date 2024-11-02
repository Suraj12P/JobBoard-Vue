<script setup>
import SearchBar from './components/SearchBar.vue'
import JobList from './components/JobList.vue';
import { ref } from 'vue';
import axios from 'axios';
 const jobs = ref([]);
 const loading = ref(false);

   const handleSearch = async (query) =>{
   try{
       loading.value = true;
       const response = await axios.get('http://localhost:5000/api/jobs',{
       params :{ query },
       });
       jobs.value = response.data; }
       catch (error) {
    console.error('Error fetching job listings:', error);
  } finally {
    loading.value = false;
   }
  }

</script>

<template>
  <div>
    <SearchBar :onSearch="handleSearch" :loading="loading" />
    <JobList :jobs="jobs" :loading="loading" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
