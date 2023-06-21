<script setup>
import { ref } from 'vue'
import DatePicker from './components/DatePicker.vue'

const dates = ref({
  startDate: null,
  endDate: null
})
const setDates = (selectedDates) => {
  dates.value.startDate = new Date(selectedDates[0]).toDateString()
  dates.value.endDate = new Date(selectedDates[1]).toDateString()
}
</script>

<template>
  <h1>Event Dashboard</h1>
  <h3 v-if="dates">{{ dates.startDate }} - {{ dates.endDate }}</h3>
  <DatePicker @selectedDates="setDates" />
</template>

<style scoped></style>
