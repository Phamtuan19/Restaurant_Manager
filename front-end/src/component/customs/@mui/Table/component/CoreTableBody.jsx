import { Box, TableBody, TableCell, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';

const ROW_TYPE = {
   IMAGE: 'image',
};

const CoreTableBody = ({ table }) => {
   if (table.body && table.body.length === 0) {
      return (
         <TableBody>
            <TableRow>
               <TableCell align="center" colSpan={table.header.length}>
                  Không tìm thấy dữ liệu!
               </TableCell>
            </TableRow>
         </TableBody>
      );
   } else {
      return table.body.map((row, index) => {
         return (
            <TableRow key={index}>
               {table.header.map((item, index) => {
                  if (index === 0) {
                     return <TableCell align="center">{index + 1}</TableCell>;
                  } else if (item.name === ROW_TYPE.IMAGE) {
                     return (
                        <TableCell align="center">
                           <Box width={70} height={70}>
                              <ImageLazyLoading src={row[item.name]} alt={row.name} />
                           </Box>
                        </TableCell>
                     );
                  }
                  return <TableCell align="center">{row[item.name]}</TableCell>;
               })}
            </TableRow>
         );
      });
   }
};

export default React.memo(CoreTableBody);
