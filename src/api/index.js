import axios from 'axios';

export function getWeatherList(city, country) {
  return axios.get('https://rapidapi.p.rapidapi.com/forecast/daily', {
    params: {q: `${city},${country}`, lat: '35', lon: '139', cnt: '10', units: 'metric'},
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': 'ed98ea4a58msh529eea78b741516p167c6djsn5e9449c7f9bc'
    }
  })
}

export function getLocation() {
  return axios.get('https://freegeoip.app/json/')
}