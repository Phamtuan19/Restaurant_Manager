import { Avatar, Box, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import SvgLogo from '~/assets/iconSvg/SvgLogo';
import { Dashboard, Search, Menu, Table, WarehouseRacks } from '~/component/Icons';
import InputCustom from '~/component/admin/InputCustom';

const ListHeaderNavItem = [
    {
        path: '/admin/dashboard',
        icon: Dashboard,
        title: 'Dashboard',
    },
    {
        path: '/admin/products',
        icon: Menu,
        title: 'Menu',
    },
    {
        path: '/admin/table',
        icon: Table,
        title: 'Table',
    },
    {
        path: '/admin',
        icon: WarehouseRacks,
        title: 'Warehouse',
    },
];

function Header() {
    return (
        <WrapHeader>
            <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', gap: '0 32px', alignItems: 'center' }}>
                <Box sx={{ height: '100%', display: 'flex' }}>
                    <Link to="/admin">
                        <SvgLogo sx={{ width: '120px', cursor: 'pointer' }} />
                    </Link>
                </Box>

                <Box sx={{ position: 'relative' }}>
                    <InputCustom
                        sx={{ width: '400px', borderRadius: '20px', padding: '0.6rem 2.5rem 0.6rem 1.5rem' }}
                        placeholder="Tìm kiếm ..."
                    />
                    <Search
                        width="1.4rem"
                        sx={{ position: 'absolute', top: 0, right: 0, transform: 'translateX(-50%) translateY(25%)' }}
                    />
                </Box>
            </Stack>

            <Box sx={{ display: 'flex', gap: '0 32px', justifyContent: 'space-between', minWidth: '500px' }}>
                {ListHeaderNavItem.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <HeaderNavItemLink to={item.path} key={index}>
                            <IconComponent
                                className="Dashboard_Item"
                                sx={{ transition: 'all .5s', marginRight: '12px' }}
                                width="1.4rem"
                            />
                            {item.title}
                        </HeaderNavItemLink>
                    );
                })}
            </Box>

            <Authentication>
                <Avatar sx={{ width: '2.3rem', height: '2.3rem' }} src="" />
            </Authentication>
        </WrapHeader>
    );
}

const WrapHeader = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 'var(--height-header-admin)',
    padding: '8px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0 24px',
    backgroundColor: 'var(--white)',
    boxShadow: 'var(--box-shadow-fa)',
    zIndex: '9999',
});

const HeaderNavItemLink = styled(Link)({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '1rem',
    fontFamily: '"Roboto Slab",serif',
    color: 'var(--black)',

    ':hover': {
        color: 'var(--text-hover-deepSkyBlue)',

        '.Dashboard_Item': {
            transform: 'scale(1.5)',
        },
    },
});

const Authentication = styled('div')({});

export default Header;
