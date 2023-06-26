<script setup>
const props = defineProps(['eachEvent'])
</script>

<template>
  <div class="grid my-3">
    <div class="col">{{ props.eachEvent.title }}</div>
    <div class="col">{{ props.eachEvent.venue.name }}</div>
    <div class="col">{{ props.eachEvent.datetime_local }}</div>
    <div class="col">
      <a :href="`${props.eachEvent.url}`">
        ${{ props.eachEvent.stats.lowest_price }} - ${{ props.eachEvent.stats.highest_price }}
      </a>
    </div>
  </div>
</template>

<style scoped></style>
