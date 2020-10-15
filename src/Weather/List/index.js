import React, {
  useEffect,
  useState
} from 'react';
import {
  Grid,
  Container,
  CircularProgress,
  Typography
} from '@material-ui/core';

import {
  getWeatherList,
  getLocation
} from '../../api/index';
import WeatherItemCard from '../components/ItemCard';
import WeatherMainCard from '../components/MainCard';
import {
  StyledGrid,
  StyledGridWrap
} from './styles';

const WeatherList = ({timeOfDay}) => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({
    country: '',
    city: '',
  });
  const [isLoading, setIsLoading] = useState(true);

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
        setTimeout(() => {
          setWeather(response.data);
          setIsLoading(false);
        }, 1000)
      }).catch((e) => {
        console.log(e);
      });
    }
  }, [location.city, location.country]);

  return (
    <Container fixed>
      {isLoading ? (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <CircularProgress size={60} />
          <Typography paragraph>Loading</Typography>
        </Grid>
      ) : (
          <StyledGridWrap>
            <StyledGrid
              container
              justify="center"
            >
              <Grid
                item
                lg={5}
                md={5}
                sm={12}
                xs={12}
              >
                <WeatherMainCard
                  weather={weather}
                  timeOfDay={timeOfDay}
                />
              </Grid>
            </StyledGrid>
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
                  xs={6}
                >
                  <WeatherItemCard
                    weather={data}
                    timeOfDay={timeOfDay}
                  />
                </Grid>
              ))}
            </Grid>
          </StyledGridWrap>
        )}
    </Container>
  );
};

export default WeatherList;
