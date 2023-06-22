<script setup>
import { numberOfSearchResults } from '../store/eventStore'
import Card from 'primevue/card'
</script>

<template>
  <Card class="flex flex-column align-items-center">
    <template #header>
      <div class="mt-2">
        <font-awesome-icon icon="football" style="font-size: 2.5rem"></font-awesome-icon>
      </div>
    </template>
    <template #content>
      <div class="text-5xl flex justify-content-center">
        {{ numberOfSearchResults }}
      </div>
    </template>
    <template #footer> Sporting Events </template>
  </Card>
</template>

<style scoped></style>
