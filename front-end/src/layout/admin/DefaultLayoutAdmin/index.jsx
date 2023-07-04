import { Box, styled } from '@mui/material';
import { useState } from 'react';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';

function DefaultLayoutAdmin() {
   const [activeSidebar, setActiveSidebar] = useState(true);

   const handleSetActioveSidebar = () => {
      setActiveSidebar((prev) => !prev);
   };

   return (
      <>
         <Sidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />
         <WrapContent>
            <Header />
            <Content>
               <Outlet />
            </Content>
         </WrapContent>
      </>
   );
}

const WrapContent = styled(Box)(({ theme }) => ({
   marginLeft: theme.palette.layoutAdmin.sidebar.width,
}));

const Content = styled(Box)(({ theme }) => ({
   marginTop: theme.palette.layoutAdmin.header.height,
   padding: '1.5rem 1.5rem 0 1.5rem',
   backgroundColor: theme.palette.layoutAdmin.background.bgContent,
   // minHeight: '100vh',
   transition: 'all 0.5s ease',
   zIndex: 20,
}));

export default DefaultLayoutAdmin;
