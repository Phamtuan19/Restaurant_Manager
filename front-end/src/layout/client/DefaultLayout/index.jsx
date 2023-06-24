import { useState } from 'react';
import { Box } from '@mui/material';

import { Header } from '../component/Header';
import Footer from '../component/Footer';
import LayoutSite from '../component/LayoutSite';
import { Sidebar } from '../component/Sidebar';

function DefaultLayout({ children }) {
   const [sidebarActive, setSidebarActive] = useState(false);

   const handleClickSidebar = () => {
      setSidebarActive(!sidebarActive);
   };

   return (
      <Box>
         <Sidebar sidebarActive={sidebarActive} handleClickSidebar={handleClickSidebar} />
         <Box sx={style}>
            <Header handleClickSidebar={handleClickSidebar} />

            <Box sx={styleContent} onClick={() => setSidebarActive(false)}>
               {children}
            </Box>
            <Footer />
         </Box>
         <LayoutSite />
      </Box>
   );
}

const style = {
   marginLeft: { xs: '0', md: 'var(--width-sidebar)' },
   transition: 'all 0.5s',
   position: 'relative',
   zIndex: 10,
};

const styleContent = {
   minHeight: '100vh',
   padding: '16px',
   marginTop: { xs: 'var(--header-height-table)', md: 'var(--height-header-client)' },
};

export default DefaultLayout;
