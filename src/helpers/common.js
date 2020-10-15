import morningBg from '../assets/morning.jpg';
import dayBg from '../assets/day.jpg';
import eveningBg from '../assets/eve.jpg';
import nightBg from '../assets/night.jpg';

export const getWeatherIcon = (id) => `http://openweathermap.org/img/wn/${id}@2x.png`;

export const convertTimeStampToDate = (timestamp) => new Date(timestamp * 1000).toDateString();

export const getTimeOfDay = (hour) => {
  if (hour >= 0 && hour <= 12) {
    return 'morn';
  }
  if (hour > 12 && hour <= 17) {
    return 'day';
  }
  if (hour > 17 && hour <= 20) {
    return 'eve';
  }
  if (hour > 20 && hour <= 23) {
    return 'night';
  }
};

export const getTimeOfDayBg = (timeOfDay) => {
  switch (timeOfDay) {
    case 'morn':
      return morningBg;
    case 'day':
      return dayBg;
    case 'eve':
      return eveningBg;
    case 'night':
      return nightBg;
    default:
      return '';
  }
}