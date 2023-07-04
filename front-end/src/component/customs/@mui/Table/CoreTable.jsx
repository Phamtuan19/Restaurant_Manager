import { Box, CircularProgress, Pagination, PaginationItem, Table, TableContainer } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import CoreTableHeader from './component/CoreTableHeader';
import CoreTableBody from './component/CoreTableBody';
import { Link, useLocation } from 'react-router-dom';

const CoreTable = (props) => {
   const location = useLocation();
   const { columns, data, page, loading, isPagination, width, height, setPage, pageCount } = props;

   return (
      <ExtendTableContainer width={width} height={height}>
         <Scrollbar
            sx={{
               height: '90%',
               flex: 1,
               borderRadius: '5px',
               '& .simplebar-content': {
                  height: '100%',
               },
            }}
         >
            <Table stickyHeader sx={{ minWidth: 'max-content', width: '100%', height: '100%' }}>
               <CoreTableHeader columns={columns} />
               <CoreTableBody columns={columns} data={data} loading={loading} />
            </Table>
         </Scrollbar>

         {isPagination && (
            <BoxPagination>
               <Pagination
                  count={pageCount}
                  page={page}
                  variant="outlined"
                  shape="rounded"
                  color="standard"
                  onChange={(_, value) => setPage(value)}
                  renderItem={(item) => (
                     <PaginationItem component={Link} to={{ search: `?page=${item.page}` }} {...item} />
                  )}
               />
            </BoxPagination>
         )}
         
      </ExtendTableContainer>
   );
};

const Scrollbar = styled(SimpleBar)({});

const BoxPagination = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'flex-end',
   alignItems: 'center',
   padding: '8px 24px',
   height: '10%',
   borderTop: '1px solid rgba(224, 224, 224, 1)',
}));

const ExtendTableContainer = styled(Box)(({ theme, width, height }) => ({
   borderRadius: '5px',
   position: 'relative',
   display: 'flex',
   flexDirection: 'column',
   border: '1px solid rgba(224, 224, 224, 1)',
   width: width ?? '100%',
   height: height ?? '100%',
}));

export default CoreTable;
