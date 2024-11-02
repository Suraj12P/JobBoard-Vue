<script setup>
import { computed } from 'vue';
const props = defineProps({
  job: {
    type: Object,
    required: true,
    validator: (value) => {
      return 'title' in value && 'company_name' in value && 'location' in value && 'description' in value;
    },
  },
});

const truncatedDescription = computed(() => {
  return props.job.description.length > 150 ? props.job.description.slice(0, 150) + '...' : props.job.description;
});
</script>

<template>
  <div class="job-card">
    <div class="card-content">
      <h5 class="job-title">{{ job.title || 'No Title Available' }}</h5>
      <p class="job-company">{{ job.company_name || 'Unknown Company' }} - {{ job.location || 'Location Unknown' }}</p>
      <p class="job-description">{{ truncatedDescription }}</p>
    </div>
    <div class="card-actions">
      <a class="apply-button" :href="job.share_link" target="_blank" rel="noopener" aria-label="Apply for {{ job.title }}">Apply</a>
    </div>
  </div>
</template>

<style scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
  }
.job-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin-top: 10px;
  box-shadow: 0 4px 8px rgba(25, 118, 210, 0.3);
  border-radius: 15px;
  transition: box-shadow 0.4s, transform 0.4s;
  height: 290px; /* Set a fixed height */
}

.job-card:hover {
  box-shadow: 0 6px 12px green;
  transform: translateY(-8px);
}

.card-content {
  margin-bottom: 5px;
}

.job-title {
  font-size: 1.25rem;
  margin-bottom: 5px;
}

.job-company {
  color: #757575;
  margin-bottom: 16px;
  
}

.job-description {
  font-size: 0.875rem;
}

.card-actions {
  display: flex;
  justify-content: center;
}

.apply-button {
  background-color:rgba(10, 156, 64, 0.8);
  color: #fff;
  padding: 8px 16px;
  text-align: center;
  width: 100%;
  height:60%;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.apply-button:hover {
  background-color:rgba(5, 92, 37, 0.8);
}
</style>
