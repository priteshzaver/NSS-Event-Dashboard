<script setup>
import { ref } from 'vue'
import DatePicker from './components/DatePicker.vue'
import { searchSports, searchResults } from './store/eventStore'
import NumberOfEventsCard from './components/NumberOfEventsCard.vue'
import PopularEvents from './components/PopularEvents.vue'

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
      <h1>Event Dashboard</h1>
      <h3 v-if="dates">{{ dates.startDate }} - {{ dates.endDate }}</h3>
    </div>
    <div class="grid">
      <div class="col-5">
        <div class="flex flex-column">
          <div class="grid">
            <div v-for="event in searchResults" :key="event.title" class="col">
              <NumberOfEventsCard :event="event" />
            </div>
          </div>
          <DatePicker @selectedDates="setDates" />
        </div>
      </div>
      <div class="col-7">
        <div class="flex flex-column">
          <div v-for="event in searchResults" :key="event.title">
            <PopularEvents :event="event" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
