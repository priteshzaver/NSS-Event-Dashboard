<script setup>
import Card from 'primevue/card'
import ScrollPanel from 'primevue/scrollpanel'
import PopularEventsItem from './PopularEventsItem.vue'

const props = defineProps(['event'])
</script>

<template>
  <Card class="my-3">
    <template #title> Popular {{ props.event.title }}</template>
    <template #content>
      <div class="grid border-bottom-3">
        <div class="col">
          <div>Event</div>
        </div>
        <div class="col">
          <div>Venue</div>
        </div>
        <div class="col">
          <div>Date</div>
        </div>
        <div class="col">
          <div>Price</div>
        </div>
      </div>
      <div class="flex flex-column">
        <ScrollPanel style="width: 100%; height: 8rem">
          <div v-for="eachEvent in props.event.data" :key="eachEvent.id">
            <PopularEventsItem :eachEvent="eachEvent" />
          </div>
        </ScrollPanel>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
