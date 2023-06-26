<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const props = defineProps(['event'])
</script>

<template>
  <DataTable
    :value="props.event.data"
    scrollable
    scrollHeight="15rem"
    class="shadow-5 mb-4"
    :pt="{ header: { class: 'bg-primary' } }"
  >
    <template #header> All {{ props.event.title }}</template>
    <Column field="title" header="Event" :pt="{ headerCell: { class: 'bg-blue-200' } }"></Column>
    <Column
      field="venue.name"
      header="Venue"
      :pt="{ headerCell: { class: 'bg-blue-200' } }"
    ></Column>
    <Column
      field="datetime_local"
      header="Date"
      :pt="{ headerCell: { class: 'bg-blue-200' } }"
    ></Column>
    <Column header="Price" :pt="{ headerCell: { class: 'bg-blue-200' } }">
      <template #body="slotProps">
        <a :href="`${slotProps.data.url}`" target="_blank" rel="noopener noreferrer">
          ${{ slotProps.data.stats.lowest_price }} - ${{ slotProps.data.stats.highest_price }}
        </a>
      </template>
    </Column>
  </DataTable>
</template>

<style scoped></style>
