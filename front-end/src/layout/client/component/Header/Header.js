import { Grid, Stack, styled } from '@mui/material';
import SvgBar from '~/assets/iconSvg/SvgBar';
import SvgLogo from '~/assets/iconSvg/SvgLogo';
import { HeaderSearch } from './HeaderSearch';
import { Authentication } from './Authentication';

function Header({ setSidebarActive }) {
    return (
        <Wrap left={{ md: 'var(--width-sidebar)', xs: '0' }}>
            <Grid container alignItems="center">
                <Grid item xs={9} sm={4} sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <Stack alignItems="flex-start" flexDirection="row" sx={{ alignItems: 'center' }}>
                        <SvgLogo sx={{ width: '100px', height: '100%' }} />
                        <div onClick={setSidebarActive}>
                            <SvgBar width="1.5rem" />
                        </div>
                    </Stack>
                </Grid>
                <HeaderSearch />
                <Authentication />
            </Grid>
        </Wrap>
    );
}

const Wrap = styled(Stack)({
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
    boxShadow: 'var(--box-shadow-fa)',
});

export default Header;
