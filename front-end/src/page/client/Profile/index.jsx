import { Box, Collapse, Grid, List, Stack, Tab, Typography, styled } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CreateIcon from '@mui/icons-material/Create';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';

import useAuth from '~/hooks/useAuth';
import { useState } from 'react';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';
import OrderList from './component/OrderList';

const Profile = () => {
   const { user } = useAuth();
   const [open, setOpen] = useState(true);
   const [valueTabs, setValueTabs] = useState('1');

   const handleChange = (event, newValue) => {
      setValueTabs(newValue);
   };

   const detailUser = [
      {
         title: 'Email',
         content: user?.email,
         color: '#065fd4',
         textDecoration: 'underline',
      },
      {
         title: 'Số điện thoại',
         content: user?.phone,
         color: '#065fd4',
      },
      {
         title: 'Ngày sinh',
         content: '19/08/2000',
      },
      {
         title: 'Địa chỉ',
         content: user?.address,
      },
   ];

   return (
      <Grid container spacing={2}>
         <Grid item md={4}>
            <Box px={2} py={3} borderRadius={5}>
               <Box px={1}>
                  <BoxImage>
                     <ImageLazyLoading src={user?.image} alt={user?.name} />
                  </BoxImage>
                  <Typography component="h3" variant="h5" mt={2} fontSize={22}>
                     {user?.name}
                  </Typography>
               </Box>
               <Box>
                  <ClientDetail onClick={() => setOpen(!open)}>
                     <ArrowDropDownIcon />
                     <Box component="span" fontSize={18} mx={2}>
                        Thông tin tài khoản
                     </Box>
                     <CreateIcon fontSize="18px" />
                  </ClientDetail>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                     {detailUser.map((item, index) => (
                        <List key={index} component="div" disablePadding sx={{ mt: 2, ml: 4, cursor: 'pointer' }}>
                           <Stack direction="row">
                              <Box component="p" width="30%" color="rgb(0 0 0 / 50%)">
                                 {item.title}
                              </Box>
                              <Box
                                 component="p"
                                 sx={{
                                    width: '70%',
                                    color: item.color || 'rgb(0 0 0 / 70%)',
                                    textDecoration: item.textDecoration || 'none',
                                 }}
                              >
                                 {item.content}
                              </Box>
                           </Stack>
                        </List>
                     ))}
                  </Collapse>
               </Box>
            </Box>
         </Grid>
         <Grid item md={8}>
            <TabContext value={valueTabs}>
               <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                     <Tab label="Đơn mua" value={'1'} />
                     <Tab label="Voucher" value={'2'} />
                     <Tab label="Item Three" value={'3'} />
                  </TabList>
               </Box>
               <TabPanel value={'1'} sx={{ px: 0 }}>
                  <OrderList />
               </TabPanel>
            </TabContext>
         </Grid>
      </Grid>
   );
};

const BoxImage = styled(Box)(({ theme }) => {
   return {
      width: 100,
      height: 100,
      borderRadius: 10,
      border: '2px solid #F4F5F7',
      overflow: 'hidden',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
   };
});

const ClientDetail = styled(Box)(({ theme }) => {
   return {
      display: 'flex',
      alignItems: 'center',
      marginTop: '24px',
      cursor: 'pointer',
   };
});

export default Profile;
