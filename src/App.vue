<script setup>
import { ref } from 'vue';

const selectedDate = ref(null);

</script>
<template>
  <div class="calendar-container">
    <VDatePicker v-model="selectedDate" />
  </div>
</template>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}


:global(.vc-day) {
  width: 120px;
  height: 80px;
}

:global(.vc-day-content) {
  font-size: 25px !important;
}

.calendar-container {
  width: 100vw;
  height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;
}

</style>
