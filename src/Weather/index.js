import React, {
  useState,
  useEffect
} from 'react';

import WeatherList from './List';
import {StyledGrid} from './styles';
import morningBg from '../assets/morning.jpg';

const Weather = () => {
  const [timeOfDay, setTimeOfDay] = useState('');

  const hour = (new Date()).getHours();

  useEffect(() => {
    setTimeOfDay(getTimeOfDay(hour));
  }, [hour])

  const getTimeOfDay = (hourTime) => {
    if (hourTime >= 0 && hourTime <= 12) {
      return 'morn';
    }
    if (hourTime < 12 && hourTime <= 17) {
      return 'day';
    }
    if (hourTime > 17 && hourTime <= 20) {
      return 'eve';
    }
    if (hourTime > 20 && hourTime <= 23) {
      return 'night';
    }
  }

  return (
    <StyledGrid
      container
      justify="center"
      alignItems="center"
      bgimg={morningBg}
    >
      <WeatherList timeOfDay={timeOfDay} />
    </StyledGrid>
  )
}

export default Weather;