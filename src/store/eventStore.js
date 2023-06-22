import { ref } from 'vue'

const apiKey = import.meta.env.VITE_APP_API_KEY

export const searchResults = ref()
export const numberOfSearchResults = ref(0)
export const isFetching = ref(false)

export const searchSports = async (selectedDates) => {
  isFetching.value = true

  const url = `https://api.seatgeek.com/2/events?taxonomies.name=sports&client_id=${apiKey}&venue.city=nashville&venue.state=TN&sort=score.desc&datetime_local.gte=${selectedDates.startDate}&datetime_local.lte=${selectedDates.endDate}`
  const res = await fetch(url)
  const data = await res.json()

  searchResults.value = data
  numberOfSearchResults.value = data.events.length
  isFetching.value = false
}
