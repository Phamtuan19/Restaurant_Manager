import { Grid, Stack, styled } from '@mui/material';
import SvgBar from '~/assets/iconSvg/SvgBar';
import SvgLogo from '~/assets/iconSvg/SvgLogo';
import { HeaderSearch } from './HeaderSearch';
import { Authentication } from './Authentication';

function Header({ handleClickSidebar }) {
    return (
        <Stack sx={style} left={{ md: 'calc(var(--width-sidebar) + 1px)', xs: '0' }}>
            <Grid container alignItems="center">
                <Grid item xs={9} sm={4} sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <Stack alignItems="flex-start" flexDirection="row" sx={{ alignItems: 'center' }}>
                        <SvgLogo sx={{ width: '100px', height: '100%' }} />
                        <div onClick={handleClickSidebar}>
                            <SvgBar width="1.5rem" />
                        </div>
                    </Stack>
                </Grid>
                <Grid item sm={1} md={2} lg={2} sx={{ display: { xs: 'none', md: 'inline-block' } }}>
                    <SvgLogo sx={{ width: '100px', height: '100%' }} />
                </Grid>
                <Grid item md={5} sm={6} lg={4} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <HeaderSearch />
                </Grid>
                <Grid item xs={3} sm={2} md={4} lg={6}>
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
