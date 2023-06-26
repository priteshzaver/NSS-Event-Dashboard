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
  <Calendar
    v-model="dates"
    selection-mode="range"
    inline
    @date-select="selectedDates(dates)"
    :pt="{
      root: { class: 'w-full' },
      header: { class: 'bg-primary' },
      previousButton: { class: 'bg-primary' },
      nextButton: { class: 'bg-primary' },
      monthTitle: { class: 'bg-primary' },
      yearTitle: { class: 'bg-primary' }
    }"
  />
</template>

<style scoped></style>
