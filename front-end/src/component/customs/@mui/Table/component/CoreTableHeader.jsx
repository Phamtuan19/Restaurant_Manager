import { TableCell, TableHead, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { styled } from '@mui/material/styles';

const CoreTableHeader = ({ table }) => {
   return (
      <TableHead>
         <TableRow>
            <ExtendTableCell align="center" style={{ width: 50 }}>
               STT
            </ExtendTableCell>
            {table?.header.map((row, index) => (
               <ExtendTableCell key={index} align={row.align} style={{ minWidth: row.minWidth }}>
                  {row.label}
               </ExtendTableCell>
            ))}
         </TableRow>
      </TableHead>
   );
};

const ExtendTableCell = styled(TableCell)(({ theme }) => ({}));

export default React.memo(CoreTableHeader);
