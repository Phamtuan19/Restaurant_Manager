/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Grid, MenuItem, Select, Stack } from '@mui/material';
import { v4 } from 'uuid';
import { useEffect, useState } from 'react';

import tableService from '~/services/tables.service';
import Table from './component/Table';
import ModalAddTable from './component/ModalAddTable';

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

function TablePage() {
   const [listTable, setListTable] = useState([]);
   const [floor, setFloor] = useState(1);
   const [openModalAdd, setOpenModalAdd] = useState(false);
   const handleOpenModalAdd = () => {
      setOpenModalAdd(true);
   };

   const handleCloseModallAdd = () => {
      setOpenModalAdd(false);
   };

   useEffect(() => {
      const apiGetTables = async () => {
         const res = await tableService.getAdminTables();
         setListTable(res.tables);
      };
      apiGetTables();
   }, []);

   return (
      <>
         <Stack>
            <Stack
               sx={{
                  marginBottom: '2rem',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
               }}
            >
               <Box sx={{ fontSize: '1.6rem' }}>Danh sách bàn</Box>

               <Box sx={{ display: 'flex', width: 250, gap: '0 12px' }}>
                  <Select
                     sx={{ flex: 1 }}
                     fullWidth
                     id="floor"
                     size="small"
                     width="100px"
                     value={floor}
                     onChange={(e) => setFloor(e.target.value)}
                  >
                     <MenuItem value="1">Tầng 1</MenuItem>
                     <MenuItem value="2">Tầng 2</MenuItem>
                     <MenuItem value="3">Tầng 3</MenuItem>
                     <MenuItem value="4">Tầng 4</MenuItem>
                  </Select>

                  <Button variant="contained" onClick={handleOpenModalAdd}>
                     Thêm bàn
                  </Button>
               </Box>
            </Stack>
            <Stack sx={{ gap: '0 32px', flexDirection: 'row', alignItems: 'center' }}>
               {listNote.map((item, index) => {
                  return (
                     <Stack key={index} sx={styleStatusTable}>
                        <Box sx={{ ...styleBoxStatus, backgroundColor: item.color }}></Box>
                        {item.title}
                     </Stack>
                  );
               })}
            </Stack>

            <ModalAddTable open={openModalAdd} handleClose={handleCloseModallAdd} />
         </Stack>
         <Stack
            sx={{
               flexDirection: 'row',
               justifyContent: 'space-between',
               marginTop: '1.5rem',
            }}
         >
            <Grid container spacing={2}>
               {listTable.map((item) => {
                  return (
                     <Grid item xs={2} key={v4()}>
                        <Table data={item} />
                     </Grid>
                  );
               })}
            </Grid>
         </Stack>
      </>
   );
}

const styleStatusTable = {
   flexDirection: 'row',
   alignItems: 'center',
   textTransform: 'capitalize',
   fontSize: '14px',
};
const styleBoxStatus = {
   width: '20px',
   height: '20px',
   borderRadius: '4px',
   marginRight: '12px',
};

export default TablePage;
