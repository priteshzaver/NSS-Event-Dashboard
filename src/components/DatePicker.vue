<script setup>
import Calendar from 'primevue/calendar'
import { ref } from 'vue'

const emits = defineEmits(['selectedDates'])

const dates = ref()
const selectedDates = (date) => {
  emits('selectedDates', date)
}
</script>

<template>
  <div>
    <Calendar v-model="dates" selection-mode="range" inline @date-select="selectedDates(dates)" />
  </div>
</template>

<style scoped></style>
