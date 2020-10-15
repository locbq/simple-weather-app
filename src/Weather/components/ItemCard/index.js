import React from 'react';
import {
  Grid,
  Typography
} from '@material-ui/core';

import {getWeatherIcon} from '../../../constants/common';
import {
  StyledTypoParagraph,
  StyledCard
} from './styles';

const WeatherItemCard = ({
  weather,
  timeOfDay,
}) => {
  return (
    <StyledCard>
      <Grid container>
        <Grid
          item
          container
          md={5}
          justify="center"
          alignItems="center"
        >
          <img
            src={getWeatherIcon(weather.weather[0].icon)}
            alt="icon"
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          direction="column"
          md={7}
        >
          {/* <Typography variant="h4">{Math.ceil(weather.temp[timeOfDay])} &#176;C</Typography> */}
          <Typography paragraph>{Math.ceil(weather.temp.min)} &#176;C / {Math.ceil(weather.temp.max)} &#176;C</Typography>
          {/* <Typography variant="subtitle1">Feels like: {Math.ceil(weather.feels_like[timeOfDay])} &#176;C</Typography> */}
          <StyledTypoParagraph paragraph>{weather.weather[0].description}</StyledTypoParagraph>
        </Grid>
      </Grid>
    </StyledCard>
  )
}

export default WeatherItemCard;