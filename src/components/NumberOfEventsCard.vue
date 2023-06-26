<script setup>
import Card from 'primevue/card'

const props = defineProps(['event'])
</script>

<template>
  <Card
    class="flex flex-column align-items-center shadow-5"
    :pt="{
      root: { class: 'bg-primary' },
      content: { class: 'flex justify-content-center text-5xl font-semibold' }
    }"
  >
    <template #header>
      <font-awesome-icon :icon="`${props.event.icon}`" size="3x" class="mt-2"></font-awesome-icon>
    </template>
    <template #content>
      {{ props.event.data.length }}
    </template>
    <template #footer>
      {{ props.event.title }}
    </template>
  </Card>
</template>

<style scoped></style>
