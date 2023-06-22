<script setup>
import { numberOfTheaterResults, theaterSearchResults } from '../store/eventStore'
import Card from 'primevue/card'
</script>

<template>
  <Card class="flex flex-column align-items-center">
    <template #header>
      <div class="mt-2">
        <font-awesome-icon icon="masks-theater" style="font-size: 2.5rem"></font-awesome-icon>
      </div>
    </template>
    <template #content>
      <div class="text-5xl flex justify-content-center">
        {{ numberOfTheaterResults }}
      </div>
    </template>
    <template #footer> Theater Events </template>
  </Card>
</template>

<style scoped></style>
