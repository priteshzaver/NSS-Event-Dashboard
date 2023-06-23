import { ref } from 'vue'

const apiKey = import.meta.env.VITE_APP_API_KEY

export const sportsSearchResults = ref([])
export const theaterSearchResults = ref([])
export const concertSearchResults = ref([])

export const numberOfEvents = ref([
  {
    title: 'Sporting Events',
    total: 0,
    icon: 'football'
  },
  {
    title: 'Theater Events',
    total: 0,
    icon: 'masks-theater'
  },
  {
    title: 'Concert Events',
    total: 0,
    icon: 'music'
  }
])

export const isFetching = ref(false)

export const searchSports = async (selectedDates) => {
  isFetching.value = true

  const url = `https://api.seatgeek.com/2/events?taxonomies.name=sports&taxonomies.name=theater&taxonomies.name=concert&client_id=${apiKey}&venue.city=nashville&venue.state=TN&sort=score.desc&datetime_local.gte=${selectedDates.startDate}&datetime_local.lte=${selectedDates.endDate}&per_page=50`
  const res = await fetch(url)
  const data = await res.json()

  sportsSearchResults.value = data.events.filter((event) => event.taxonomies[0].name === 'sports')
  theaterSearchResults.value = data.events.filter((event) => event.taxonomies[0].name === 'theater')
  concertSearchResults.value = data.events.filter((event) => event.taxonomies[0].name === 'concert')

  numberOfEvents.value[0].total = sportsSearchResults.value.length
  numberOfEvents.value[1].total = theaterSearchResults.value.length
  numberOfEvents.value[2].total = concertSearchResults.value.length

  isFetching.value = false
}
