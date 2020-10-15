import React from 'react';
import {
  Grid,
  Typography
} from '@material-ui/core';

import {
  getWeatherIcon,
  convertTimeStampToDate
} from '../../../helpers/common';
import {
  StyledTypoParagraph,
  StyledCard,
  StyledGrid
} from './styles';

const WeatherItemCard = ({
  weather,
  timeOfDay,
}) => {
  return (
    <StyledCard>
      <Grid container>
        <StyledGrid
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
          <Typography variant="caption">{convertTimeStampToDate(weather.dt)}</Typography>
        </StyledGrid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          direction="column"
          md={7}
        >
          <Typography paragraph>{Math.ceil(weather.temp.min)} &#176;C / {Math.ceil(weather.temp.max)} &#176;C</Typography>
          <StyledTypoParagraph paragraph>{weather.weather[0].description}</StyledTypoParagraph>
        </Grid>
      </Grid>
    </StyledCard>
  )
}

export default WeatherItemCard;