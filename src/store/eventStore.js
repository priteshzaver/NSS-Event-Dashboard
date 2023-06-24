import { ref } from 'vue'

const apiKey = import.meta.env.VITE_APP_API_KEY

export const sportsSearchResults = ref([])
export const theaterSearchResults = ref([])
export const concertSearchResults = ref([])

export const searchResults = ref([
  {
    title: 'Sporting Events',
    icon: 'football',
    data: []
  },
  {
    title: 'Theater Events',
    icon: 'masks-theater',
    data: []
  },
  {
    title: 'Concert Events',
    icon: 'music',
    data: []
  }
])

export const isFetching = ref(false)

export const searchSports = async (selectedDates) => {
  isFetching.value = true

  const url = `https://api.seatgeek.com/2/events?taxonomies.name=sports&taxonomies.name=theater&taxonomies.name=concert&client_id=${apiKey}&venue.city=nashville&venue.state=TN&sort=datetime_local.asc&datetime_local.gte=${selectedDates.startDate}&datetime_local.lte=${selectedDates.endDate}&per_page=50`
  const res = await fetch(url)
  const data = await res.json()

  searchResults.value[0].data = data.events.filter((event) => event.taxonomies[0].name === 'sports')
  searchResults.value[1].data = data.events.filter(
    (event) => event.taxonomies[0].name === 'theater'
  )
  searchResults.value[2].data = data.events.filter(
    (event) => event.taxonomies[0].name === 'concert'
  )

  isFetching.value = false
}
