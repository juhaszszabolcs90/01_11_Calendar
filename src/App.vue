<script setup>
import { ref } from 'vue';

const selectedDate = ref(null);

</script>
<template>
  <div>
    <VCalendar />
    <VDatePicker v-model="selectedDate" />
  </div>
</template>

<style scoped>
</style>
