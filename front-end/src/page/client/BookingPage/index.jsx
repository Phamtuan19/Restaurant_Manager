/* eslint-disable array-callback-return */
import { Box, Grid, styled } from '@mui/material';
import tableService from '~/services/tables.service';
import { useEffect, useState } from 'react';
import Table from './component/Table';
import HeaderPage from './component/HeaderPage';
import setToastMessage from '~/Helpers/toastMessage';
import ModalConfig from './component/ModalConfig';

const status = [];

function BookingPage() {
   const [listTable, setListTable] = useState([]);
   const [open, setOpen] = useState(false);
   const [dataTable, setDataTable] = useState(null);

   const handleOpen = (table, statusId) => {
      if (statusId !== '64a3f26f35ee74932a5ad977') return setToastMessage('Bàn đã có người sử dụng', 'error');
      setOpen(true);
      setDataTable(table);
   };

   useEffect(() => {
      (async () => {
         const res = await tableService.tableList();
         console.log(res);
         setListTable(res);
      })();
   }, []);

   return (
      <>
         <HeaderPage />
         <Box mt="1.5rem">
            <Grid container spacing={2}>
               <Grid item xs={12} lg={6}>
                  <ViewTable sx={{ justifyContent: { lg: 'space-between' } }}>
                     {listTable.map((item, index) => {
                        if (index <= 8) {
                           return (
                              <Box key={index} onClick={() => handleOpen(item, item.statusId._id)}>
                                 <Table data={item} />
                              </Box>
                           );
                        }
                     })}
                  </ViewTable>
               </Grid>
               <Grid item xs={12} lg={2}></Grid>

               <Grid item xs={12} lg={4}>
                  <ViewTable sx={{ justifyContent: { lg: 'space-around' } }}>
                     {listTable.map((item, index) => {
                        if (index > 8 && index <= 12) {
                           return (
                              <Box key={index} onClick={() => handleOpen(item, item.statusId._id)}>
                                 <Table data={item} />
                              </Box>
                           );
                        }
                     })}
                  </ViewTable>
               </Grid>

               <Grid item xs={12} lg={12}>
                  <ViewTable sx={{ justifyContent: { lg: 'space-between' } }}>
                     {listTable.map((item, index) => {
                        if (index > 12) {
                           return (
                              <Box key={index} onClick={() => handleOpen(item, item.statusId._id)}>
                                 <Table data={item} />
                              </Box>
                           );
                        }
                     })}
                  </ViewTable>
               </Grid>
            </Grid>
         </Box>
         <ModalConfig open={open} setOpen={setOpen} dataTable={dataTable} />
      </>
   );
}

const ViewTable = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
   backgroundColor: 'rgba(255, 255, 255, 0.5)',
   border: '1px solid #fff',
   borderRadius: '1.5rem',
});

export default BookingPage;
