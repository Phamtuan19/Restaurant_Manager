import { styled } from '@mui/material';

function Sidebar({ activeSidebar }) {
    return <WrapSidebar sx={{ width: activeSidebar ? 'var(--width-sidebar-active-admin)' : 0 }}></WrapSidebar>;
}

const WrapSidebar = styled('div')({
    position: 'fixed',
    top: 'calc(var(--height-header-admin) + 1px)',
    bottom: 0,
    backgroundColor: 'var(--white)',
    zIndex: 20,
    transition: 'all .5s',
    boxShadow: 'var(--box-shadow-fa)',
});

export default Sidebar;
