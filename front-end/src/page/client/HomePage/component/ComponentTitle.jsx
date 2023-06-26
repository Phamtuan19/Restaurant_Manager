import { Typography, styled } from '@mui/material';

function ComponentTitle({ title, sx }) {
   return (
      <WrapCategory sx={{ ...sx }}>
         <Typography component="h3" fontSize="calc(1.2978rem + .5736vw)">
            {title}
         </Typography>
      </WrapCategory>
   );
}

const WrapCategory = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '1.5rem 0',
});

export default ComponentTitle;
