<script setup>
import { ref } from 'vue'
import DatePicker from './components/DatePicker.vue'
import { searchSports, searchResults } from './store/eventStore'
import NumberOfEventsCard from './components/NumberOfEventsCard.vue'
import EventsList from './components/EventsList.vue'

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
  <main>
    <div class="pl-5">
      <h1 class="text-primary">Event Dashboard</h1>
      <h3 v-if="dates.endDate" class="text-color-secondary">
        {{ dates.startDate }} - {{ dates.endDate }}
      </h3>
      <h3 v-else class="text-color-secondary">Please select a date range</h3>
    </div>
    <div class="flex xl:flex-row sm:flex-column">
      <div class="flex flex-column xl:w-6 sm:w-full">
        <div class="flex justify-content-evenly">
          <div v-for="event in searchResults" :key="event.title" class="w-16rem">
            <NumberOfEventsCard :event="event" />
          </div>
        </div>
        <div class="mt-6">
          <DatePicker @selectedDates="setDates" />
        </div>
      </div>
      <div class="col-7">
        <div class="flex flex-column">
          <div v-for="event in searchResults" :key="event.title">
            <EventsList :event="event" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
