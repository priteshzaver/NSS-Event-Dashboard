<script setup>
import { ref } from 'vue'
import DatePicker from './components/DatePicker.vue'
import { searchSports, numberOfEvents } from './store/eventStore'
import NumberOfEventsCard from './components/NumberOfEventsCard.vue'

const dates = ref({
  startDate: null,
  endDate: null
})
const setDates = (selectedDates) => {
  dates.value.startDate = new Date(selectedDates[0]).toDateString()
  dates.value.endDate = new Date(selectedDates[1]).toDateString()

  const datesForSearch = ref({
    startDate: null,
    endDate: null
  })

  datesForSearch.value.startDate = new Date(selectedDates[0]).toISOString()
  datesForSearch.value.endDate = new Date(selectedDates[1]).toISOString()
  searchSports(datesForSearch.value)
}
</script>

<template>
  <h1>Event Dashboard</h1>
  <h3 v-if="dates">{{ dates.startDate }} - {{ dates.endDate }}</h3>
  <div class="flex flex-row card-container">
    <div v-for="event in numberOfEvents" :key="event">
      <NumberOfEventsCard :event="event" />
    </div>
  </div>
  <DatePicker @selectedDates="setDates" />
</template>

<style scoped></style>
