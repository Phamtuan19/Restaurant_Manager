import { TableCell, TableHead, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { styled } from '@mui/material/styles';

const CoreTableHeader = ({ columns }) => {
   return (
      <TableHead>
         <TableRow>
            {columns.map((row, index) => (
               <ExtendTableCell key={index} align={row.align} width={row.width}>
                  {row.header}
               </ExtendTableCell>
            ))}
         </TableRow>
      </TableHead>
   );
};

const ExtendTableCell = styled(TableCell)(({ theme }) => ({
   // padding: '12px 6px',
}));

CoreTableHeader.prototype = {
   columns: PropTypes.array.isRequired,
};

export default React.memo(CoreTableHeader);
