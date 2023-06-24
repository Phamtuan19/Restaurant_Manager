import { Box, Grid, Stack } from '@mui/material';
import SvgBar from '~/assets/iconSvg/SvgBar';
import SvgLogo from '~/assets/iconSvg/SvgLogo';
import { HeaderSearch } from './HeaderSearch';
import Authentication from './Authentication';

function Header({ handleClickSidebar }) {
   return (
      <Stack sx={style} left={{ md: 'calc(var(--width-sidebar) + 1px)', xs: '0' }}>
         <Grid container alignItems="center">
            <Grid item xs={7} sm={6} md={3} lg={2} sx={{ display: 'flex' }}>
               <Stack alignItems="flex-start" flexDirection="row" sx={{ alignItems: 'center' }}>
                  <SvgLogo sx={{ width: '100px', height: '100%' }} />
                  <Box sx={{ display: { md: 'none', xs: 'block' } }} onClick={handleClickSidebar}>
                     <SvgBar width="1.5rem" />
                  </Box>
               </Stack>
            </Grid>
            <Grid item md={4} lg={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
               <HeaderSearch />
            </Grid>
            <Grid item xs={5} sm={6} md={5} lg={6}>
               <Authentication />
            </Grid>
         </Grid>
      </Stack>
   );
}

const style = {
   position: 'fixed',
   top: 0,
   right: 0,
   backgroundColor: 'var(--white)',
   paddingLeft: 32,
   paddingRight: 32,
   paddingTop: 8,
   paddingBottom: 8,
   transform: 'all 0.5s',
   zIndex: 10,
   alignItems: 'center',
   padding: { xs: '8px 12px' },
   boxShadow: '0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)',
};

export default Header;
