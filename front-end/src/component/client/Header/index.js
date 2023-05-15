import { Grid, Stack, styled } from '@mui/material';

import HeaderSearch from './HeaderSearch';
import HeaderUser from './HeaderUser';
import SvgLogo from '../../../assets/imageSvg/SvgLogo';
import SvgBar from '../../../assets/imageSvg/SvgBar';

function Header({ setSidebarActive }) {
    return (
        <Wrap
            direction="row"
            left={{ md: 'var(--width-sidebar)', xs: '0' }}
            alignItems="center"
            sx={{ padding: { xs: '8px 12px' } }}
        >
            <Grid container alignItems="center">
                <Grid item xs={9} sm={4} sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <Stack alignItems="flex-start" flexDirection="row" sx={{ alignItems: 'center' }}>
                        <SvgLogo style={{ width: '100px', height: '100%' }} />
                        <div onClick={setSidebarActive}>
                            <SvgBar width="1.5rem" />
                        </div>
                    </Stack>
                </Grid>
                <Grid item lg={3} md={5} sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <HeaderSearch />
                </Grid>
                <Grid item xs={3} sm={2} lg={9} md={7}>
                    <HeaderUser />
                </Grid>
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
});

export default Header;
