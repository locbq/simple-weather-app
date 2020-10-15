import React, {
  useState,
  useEffect
} from 'react';

import {
  getTimeOfDay,
  getTimeOfDayBg
} from '../helpers/common';
import WeatherList from './List';
import {StyledGrid} from './styles';

const Weather = () => {
  const [timeOfDay, setTimeOfDay] = useState('');

  const hour = new Date().getHours();

  useEffect(() => {
    setTimeOfDay(getTimeOfDay(hour));
  }, [hour])

  return (
    <StyledGrid
      container
      direction="column"
      justify="center"
      alignItems="center"
      bgimg={getTimeOfDayBg(timeOfDay)}
    >
      <WeatherList timeOfDay={timeOfDay} />
      <a href="https://www.vecteezy.com/free-vector/scene">Scene Vectors by Vecteezy</a>
    </StyledGrid>
  )
}

export default Weather;