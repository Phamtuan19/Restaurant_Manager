import { Box, CircularProgress, Pagination, Table, TableContainer } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import CoreTableHeader from './component/CoreTableHeader';
import CoreTableBody from './component/CoreTableBody';

const CoreTable = ({ table, loading, isPagination }) => {
   console.log(table);

   return (
      <TableContainer
         sx={{
            borderRadius: '5px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
         }}
      >
         <Scrollbar
            sx={{
               height: '100%',
               flex: 1,
               borderRadius: '5px',
               border: '1px solid rgba(224, 224, 224, 1)',
               '& .simplebar-content': {
                  height: '100%',
               },
            }}
         >
            <Table stickyHeader sx={{ minWidth: 'max-content', width: '100%', height: '100%' }} size="small">
               <CoreTableHeader table={table} />
               <CoreTableBody table={table} />
            </Table>
         </Scrollbar>
         {loading && (
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
               <CircularProgress color="primary" size={40} />
            </Box>
         )}
         {isPagination && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
               <Pagination count="" page="" variant="outlined" shape="rounded" color="standard" />
            </Box>
         )}
      </TableContainer>
   );
};

const Scrollbar = styled(SimpleBar)({});

export default CoreTable;
