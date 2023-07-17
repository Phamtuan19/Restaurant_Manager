import { CircularProgress, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const CoreTableBody = ({ columns, data, loading }) => {
   const renderRows = () => {
      if (loading) {
         return (
            <TableRow>
               <TableCell sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                  <CircularProgress color="primary" size={40} />
               </TableCell>
            </TableRow>
         );
      }

      if (data && data.length > 0) {
         return data.map((row, index) => (
            <TableRow key={index}>
               {columns.map((column, columnIndex) => {
                  if (column.cell && typeof column.cell === 'function') {
                     return <TableCell key={columnIndex}>{column.cell(row, index)}</TableCell>;
                  }
                  return <TableCell key={columnIndex}></TableCell>;
               })}
            </TableRow>
         ));
      }

      return (
         <TableRow align="center">
            <TableCell colSpan={columns.length} sx={{ textAlign: 'center' }}>
               <Typography variant="h5" component="h3">
                  Không tìm thấy dữ liệu!
               </Typography>
            </TableCell>
         </TableRow>
      );
   };

   return <TableBody>{renderRows()}</TableBody>;
};

CoreTableBody.prototype = {
   columns: PropTypes.array.isRequired,
   data: PropTypes.array,
   loading: PropTypes.bool,
};

export default React.memo(CoreTableBody);
