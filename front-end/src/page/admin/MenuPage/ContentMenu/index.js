import { Box, styled } from '@mui/material';
import SwiperFreemode from './SwiperFreemode';
import ProductsList from './ProductsList';

function ContentMenu() {
    return (
        <Box>
            {/* <WrapContentMenu>
                <SwiperFreemode />
            </WrapContentMenu> */}

            <WrapContent>
                <ProductsList />
            </WrapContent>
        </Box>
    );
}

// const

const WrapContentMenu = styled('div')({
    padding: '0 6px',
    position: 'fixed',
    top: 'calc(var(--height-header-admin))',
    left: 'var(--width-sidebar-admin)',
    bottom: 0,
    width: 'calc(var(--width-navbar-table-page) - 150px)',
    // backgroundColor: '#fff',
    // boxShadow: 'var(--box-shadow-fa)',
    borderTop: '0.5px solid #e3e1e1',
});

const WrapContent = styled('div')({
    width: 'calc(100% - var(--width-navbar-table-page) - 150px) )',
    // marginLeft: 'calc(var(--width-navbar-table-page) - 170px)',
    paddingLeft: '1rem',
    transition: 'all 0.5s',
});

export default ContentMenu;
