/* eslint-disable array-callback-return */
import { Box, Grid, Stack, Typography, styled } from '@mui/material';
import tableService from '~/services/tables.service';
import { useEffect, useState } from 'react';
import Table from './component/Table';
import setToastMessage from '~/Helpers/toastMessage';
import ModalConfig from './component/ModalConfig';

const listNote = [
   {
      title: 'Bàn trống',
      color: 'var(--color-blur)',
   },
   {
      title: 'Bàn đã đặt',
      color: '#FFBF00',
   },
   {
      title: 'Bàn đang sử dụng',
      color: 'var(--color-red)',
   },
];

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
         setListTable(res);
      })();
   }, []);

   return (
      <>
         <Stack sx={style}>
            <Typography component="h3" fontSize="1.6rem">
               Danh sách bàn
            </Typography>
            <Stack sx={styleContent}>
               {listNote.map((item, index) => {
                  return (
                     <Stack
                        key={index}
                        sx={{
                           flexDirection: 'row',
                           alignItems: 'center',
                           textTransform: 'capitalize',
                           fontSize: '14px',
                        }}
                     >
                        <Box sx={{ ...styleStatusTable, backgroundColor: item.color }}></Box>
                        {item.title}
                     </Stack>
                  );
               })}
            </Stack>
         </Stack>
         <Box mt="1.5rem">
            <Grid container spacing={2}>
               <Grid item xs={12} lg={6}>
                  <ViewTable sx={{ justifyContent: { lg: 'space-between' } }}>
                     {listTable.map((item, index) => {
                        if (index <= 11) {
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
                        if (index > 11 && index <= 15) {
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
                        if (index > 15) {
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

const style = {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   flexWrap: 'wrap',
   padding: '1rem 1.5rem',
   backgroundColor: 'rgba(255, 255, 255, 0.5)',
   border: '1px solid #fff',
   borderRadius: '1.5rem',
   gap: '12px 32px',
};

const styleContent = {
   gap: '12px 32px',
   flexDirection: 'row',
   flexWrap: 'wrap',
   alignItems: 'center',
};

const styleStatusTable = {
   width: '20px',
   height: '20px',
   borderRadius: '4px',
   marginRight: '12px',
};

export default BookingPage;
