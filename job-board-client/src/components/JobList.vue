<script setup>
import JobCard from './JobCard.vue';
const props = defineProps(['jobs', 'loading']);
</script>

<template>
  <div v-if="loading" class="loading-container">
    
  </div>

  <div v-else-if="jobs.length === 0" class="no-jobs-container">
    <div class="icon-placeholder"></div>
    <p class="no-jobs-text">No jobs available</p>
  </div>

  <div v-else class="job-list">
    <div class="job-list-item" v-for="(job, index) in jobs" :key="index">
      <JobCard :job="job" />
    </div>
  </div>
</template>
  


<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.spinner {
  border: 4px solid rgba(25, 118, 210, 0.3);
  border-top: 4px solid #1976d2;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.no-jobs-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.icon-placeholder {
  font-size: 60px;
  color: gray;
  width: 60px;
  height: 60px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-jobs-text {
  color: #757575;
  font-size: 1.25rem;
  margin-top: 8px;
}

.job-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding: 10px;
  
}

.job-list-item {
}

</style>
