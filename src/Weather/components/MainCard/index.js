import React from 'react';
import {
  Grid,
  Typography
} from '@material-ui/core';

import {
  getWeatherIcon,
  convertTimeStampToDate,
} from '../../../helpers/common';
import {
  StyledTypoParagraph,
  StyledCard
} from './styles';

const WeatherMainCard = ({
  weather,
  timeOfDay
}) => {
  return (
    weather?.list?.length > 0 && (
      <StyledCard>
        <Typography variant="h4">{weather.city?.name}</Typography>
        <Typography variant="subtitle2">{convertTimeStampToDate(weather.list[0].dt)}</Typography>
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <img
            src={getWeatherIcon(weather.list[0].weather[0].icon)}
            alt="icon"
          />
          <Typography variant="h3">{Math.ceil(weather.list[0].temp[timeOfDay])}&#176;C</Typography>
        </Grid>
        <Typography paragraph>{Math.ceil(weather.list[0].temp.min)} &#176;C / {Math.ceil(weather.list[0].temp.max)} &#176;C Feels like: {Math.ceil(weather.list[0].feels_like[timeOfDay])} &#176;C</Typography>
        <StyledTypoParagraph paragraph>{weather.list[0].weather[0].description}</StyledTypoParagraph>
      </StyledCard>
    )
  )
}

export default WeatherMainCard;