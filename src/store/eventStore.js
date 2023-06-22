import { ref } from 'vue'

const apiKey = import.meta.env.VITE_APP_API_KEY

export const sportsSearchResults = ref([])
export const theaterSearchResults = ref([])
export const numberOfSportsResults = ref(0)
export const numberOfTheaterResults = ref(0)
export const isFetching = ref(false)

export const searchSports = async (selectedDates) => {
  isFetching.value = true

  const url = `https://api.seatgeek.com/2/events?taxonomies.name=sports&taxonomies.name=theater&client_id=${apiKey}&venue.city=nashville&venue.state=TN&sort=score.desc&datetime_local.gte=${selectedDates.startDate}&datetime_local.lte=${selectedDates.endDate}`
  const res = await fetch(url)
  const data = await res.json()

  sportsSearchResults.value = data.events.filter((event) => event.taxonomies[0].name === 'sports')
  theaterSearchResults.value = data.events.filter((event) => event.taxonomies[0].name === 'theater')
  numberOfSportsResults.value = sportsSearchResults.value.length
  numberOfTheaterResults.value = theaterSearchResults.value.length
  isFetching.value = false
}
