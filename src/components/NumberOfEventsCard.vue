<script setup>
import Card from 'primevue/card'

const props = defineProps(['event'])
</script>

<template>
  <Card class="flex flex-column align-items-center">
    <template #header>
      <div class="mt-2">
        <font-awesome-icon
          :icon="`${props.event.icon}`"
          style="font-size: 2.5rem"
        ></font-awesome-icon>
      </div>
    </template>
    <template #content>
      <div class="text-5xl flex justify-content-center">
        {{ props.event.data.length }}
      </div>
    </template>
    <template #footer> {{ props.event.title }} </template>
  </Card>
</template>

<style scoped></style>
