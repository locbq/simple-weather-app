import {
  Typography,
  Card,
  styled,
  Grid
} from '@material-ui/core';

export const StyledTypoParagraph = styled(Typography)({
  textTransform: 'capitalize'
});

export const StyledCard = styled(Card)({
  padding: '20px',
  background: 'rgba(255,255,255,0.9)',
  transition: '0.25s ease-in-out',
  '&:hover': {
    background: 'rgba(255,255,255,1)',
  }
})

export const StyledGrid = styled(Grid)({
  marginBottom: '1rem'
})