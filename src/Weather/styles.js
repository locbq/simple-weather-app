import {
  Grid,
  styled
} from '@material-ui/core';

export const StyledGrid = styled(Grid)({
  minHeight: '100vh',
  height: '100%',
  backgroundImage: props => `url(${props.bgimg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px'
})