import React, {
  useEffect,
  useState
} from 'react';
import {
  Grid,
  Container
} from '@material-ui/core';

import {
  getWeatherList,
  getLocation
} from '../../api/index';
import WeatherItemCard from '../components/ItemCard';

const WeatherList = ({timeOfDay}) => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({
    country: '',
    city: '',
  })

  useEffect(() => {
    getLocation().then((response) => {
      setLocation({
        country: response.data.countryCode,
        city: response.data.city
      })
    }).catch((e) => {
      console.log(e);
    });
    if (location.city && location.country) {
      getWeatherList(location.city, location.country).then((response) => {
        setWeather(response.data);
      }).catch((e) => {
        console.log(e);
      });
    }
  }, [location.city, location.country]);

  return (
    <Container fixed>
      <Grid
        container
        spacing={2}
      >
        {weather?.list?.length > 0 && weather.list.slice(1, 10).map((data, index) => (
          <Grid
            item
            key={index}
            lg={4}
            md={4}
            sm={6}
            xs={12}
          >
            <WeatherItemCard
              weather={data}
              timeOfDay={timeOfDay}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WeatherList;
