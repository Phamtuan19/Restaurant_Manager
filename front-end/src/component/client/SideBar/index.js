import { styled } from '@mui/material';
import SvgRight from '../../../assets/imageSvg/SvgRight';
import SvgLogo from '../../../assets/imageSvg/SvgLogo';

import { useEffect, useState } from 'react';
import SidebarBodyIcon from './SidebarBodyIcon';

function Sidebar(props) {
    const { sidebarActive, setSidebarActive } = props;
    const [widthSidebar, setWidthSidebar] = useState('var(--width-sidebar-active)');

    useEffect(() => {
        const width = sidebarActive ? 'var(--width-sidebar-active)' : 'var(--width-sidebar)';
        setWidthSidebar(width);
    }, [sidebarActive]);

    return (
        <Wrap sx={{ width: { xs: sidebarActive ? widthSidebar : '0', md: widthSidebar } }}>
            <SidebarHeader
                sx={{ justifyContent: `${sidebarActive ? 'space-between' : 'center'}` }}
                onClick={() => setSidebarActive(!sidebarActive)}
            >
                <SvgLogo width="100px" height="80%" display={sidebarActive ? 'block' : 'none'} />
                <SvgRight width="36px" />
            </SidebarHeader>
            <SidebarBodyIcon sidebarActive={sidebarActive} />
        </Wrap>
    );
}

const Wrap = styled('div')({
    position: 'fixed',
    top: 0,
    bottom: 0,
    backgroundColor: 'var(--white)',
    boxShadow: '0 0 30px 0 rgba(116,52,9,.05)',
    overflow: 'hidden',
    transition: 'all 0.5s',
    zIndex: 20,
});

const SidebarHeader = styled('div')({
    padding: '8px 12px',
    display: 'flex',
    height: 'var(--header-height)',
    alignItems: 'center',
    borderBottom: '1px solid #e9e7e7',
});

export default Sidebar;
