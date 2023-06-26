import { Typography, styled } from '@mui/material';
import { Button } from '~/component/client/Button';
import { Card } from '~/component/client/Card';
import ComponentTitle from './ComponentTitle';

const listCategories = [
   'Burgers',
   'Fizza',
   'Soup',
   'Dessert',
   'Dessert',
   'Biscuits',
   'cheese',
   'Tomato soup',
   'Chicken fingers',
   'Chicken ',
   'nuggets',
   'Flatbread pizza',
   'Mini pizzas',
   'Burgers',
   'Fizza',
   'Soup',
   'Dessert',
   'Dessert',
   'Biscuits',
   'cheese',
   'Tomato soup',
   'Chicken fingers',
   'Chicken ',
   'nuggets',
   'Flatbread pizza',
   'Mini pizzas',
];

function FavoriteFood() {
   return (
      <Card className={{ backgroundColor: 'rgba(255, 255, 255,0.5)', padding: '1.5rem', border: '1px solid #fff' }}>
         <Typography component="h3" variant="h5" pb="1rem" mb={3} borderBottom="1px solid #333">
            Món ăn yêu thích.
         </Typography>

         <WrapContent sx={{ justifyContent: 'flex-start' }}>
            {listCategories.map((item, index) => {
               return (
                  <Button key={index} sx={{ ...styleButton }}>
                     {item}
                  </Button>
               );
            })}
         </WrapContent>
      </Card>
   );
}

const WrapContent = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
   gap: '6px',
});

const styleButton = {
   backgroundColor: 'var(--whithe)',
   color: '#ea6a12',
   borderColor: '#ea6a12',
   overflow: 'hidden !important',
   position: 'relative',
   zIndex: 2,

   '&:hover': {
      backgroundColor: 'transparent',
      color: '#fff !important',

      ':after': {
         clipPath: 'circle(100%)',
         transition: 'clip-path .5s ease,-webkit-clip-path .5s ease',
      },
   },

   '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      background: '#ea6a12',
      webkitClipPath: 'circle(0 at 50% 50%)',
      clipPath: 'circle(0 at 50% 50%)',
      zIndex: -1,
   },
};

export default FavoriteFood;
