import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { styled } from '@mui/material/styles';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BoxIcon, Categories, Customer, Dashboard, Manage, Product, Staff } from '~/component/Icons';
import SvgLogo from '~/assets/iconSvg/SvgLogo';

const listSidebar = [
   {
      icon: Dashboard,
      title: 'Dashboard',
   },
   {
      icon: Manage,
      title: 'Quản lý',
      subcategory: [
         {
            icon: Product,
            title: 'sản phẩm',
         },
         {
            icon: Categories,
            title: 'Danh mục',
         },
         {
            icon: BoxIcon,
            title: 'Kho hàng',
         },
         {
            icon: Customer,
            title: 'Khách hàng',
         },
         {
            icon: Staff,
            title: 'Nhân viên',
         },
      ],
   },
];

function Sidebar({ activeSidebar }) {
   return (
      <WrapSidebar>
         <Stack sx={{ padding: '0 12px 1.5rem 12px' }}>
            <Stack direction="row" justifyContent="center" alignItems="center" py={1}>
               <Link to="/admin">
                  <SvgLogo width="8rem" height="3rem" />
               </Link>
            </Stack>
            {listSidebar.map((item, index) => {
               return <SidebarItem key={index} activeSidebar={activeSidebar} data={item} />;
            })}
         </Stack>
      </WrapSidebar>
   );
}

const SidebarItem = ({ data }) => {
   const [open, setOpen] = useState(false);

   const IconComponent = data.icon;

   if (data.subcategory) {
      return (
         <>
            <Box sx={{ position: 'relative', marginTop: '12px' }} onClick={() => setOpen(!open)}>
               <SlidebarItem>
                  <Box p="12px" mr={1}>
                     <IconComponent width="1.6rem" height="1.6rem" />
                  </Box>
                  <SidebarItemTitle>
                     {data.title}
                     {open ? <ExpandLess /> : <ExpandMore />}
                  </SidebarItemTitle>
               </SlidebarItem>
            </Box>
            {data.subcategory && (
               <Collapse in={open} timeout="auto" unmountOnExit>
                  {data.subcategory.map((item, index) => {
                     const ComponentIcon = item.icon;
                     return (
                        <List key={index} component="div" disablePadding>
                           <ExtenLinkRoute>
                              <ListItemButton sx={{ pl: 4 }}>
                                 <ListItemIcon>
                                    <ComponentIcon />
                                 </ListItemIcon>
                                 <ListItemText primary={item.title} />
                              </ListItemButton>
                           </ExtenLinkRoute>
                        </List>
                     );
                  })}
               </Collapse>
            )}
         </>
      );
   }

   return (
      <ExtenLinkRoute to={data.path} sx={{ position: 'relative', marginTop: '12px' }}>
         <SlidebarItem>
            <Box p="12px" mr={1}>
               <IconComponent width="1.6rem" height="1.6rem" />
            </Box>
            <SidebarItemTitle>{data.title}</SidebarItemTitle>
         </SlidebarItem>
      </ExtenLinkRoute>
   );
};

const WrapSidebar = styled(Box)(({ theme, activesidebar }) => ({
   position: 'fixed',
   top: 0,
   bottom: 0,
   height: '100vh',
   width: theme.palette.layoutAdmin.sidebar.width,
   backgroundColor: theme.palette.layoutAdmin.sidebar.bg,
   zIndex: 20,
   transition: 'all .5s',
   boxShadow: 'var(--box-shadow-fa)',
   overflow: 'hidden',
}));

const SlidebarItem = styled('div')({
   width: '100%',
   display: 'flex',
   cursor: 'pointer',
   alignItems: 'center',
   justifyContent: 'flex-start',
});

const SidebarItemTitle = styled('h3')({
   flex: 1,
   fontSize: '16px',
   fontWeight: 400,
   whiteSpace: 'nowrap',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   gap: '0 12px',
});

const ExtenLinkRoute = styled(Link)(({ theme }) => ({
   color: theme.palette.text.primary,
   textTransform: 'capitalize',

   '&:hover': {
      color: '#065fd4',
   },
}));

export default memo(Sidebar);
