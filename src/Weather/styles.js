import {
  Grid,
  styled
} from '@material-ui/core';

export const StyledGrid = styled(Grid)({
  height: '100vh',
  backgroundImage: props => `url(${props.bgimg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
})