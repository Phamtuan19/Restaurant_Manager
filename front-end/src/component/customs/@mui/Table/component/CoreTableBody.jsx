import { Box, TableBody, TableCell, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';
import { ROWTYPE } from '../utils';

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
      return (
         <TableBody>
            {table.body.map((row, index) => {
               // console.log(row);
               return (
                  <TableRow key={index}>
                     {table.header.map((item, indexColumn) => {
                        console.log(item.name);
                        return (
                           <TableCell key={indexColumn} align="center">
                              {item.type === ROWTYPE.index && indexColumn + 1}
                              {item.name === ROWTYPE.image && (
                                 <Box width={70} height={70}>
                                    <ImageLazyLoading src={row[item.name]} alt={row.name} />
                                 </Box>
                              )}
                              {item.name === ROWTYPE.text && row[item.name]}
                           </TableCell>
                        );
                     })}
                  </TableRow>
               );
            })}
         </TableBody>
      );
   }
};

export default React.memo(CoreTableBody);
