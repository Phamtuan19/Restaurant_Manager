/* eslint-disable no-unused-vars */
import { Box, Modal, Stepper } from '@mui/material';
import React, { createContext, useState } from 'react';

import BillDetails from './BillDetail';
import OrderInformation from './OrderInformation';

const STEP1 = 0;
const STEP2 = 1;

export const ContextModalCart = createContext();

const ModalConfig = ({ openModalOrder, setOpenModalOrder, setOpenDialog, listCart }) => {
   const [activeStep, setActiveStep] = useState(0);

   return (
      <ContextModalCart.Provider value={{ setOpenDialog, listCart, setOpenModalOrder }}>
         <Modal
            open={openModalOrder}
            onClose={() => setOpenModalOrder(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
         >
            <Box sx={style}>
               <Stepper activeStep={activeStep} orientation="vertical">
                  {/* {STEP1 === activeStep && <BillDetails />} */}
                  {STEP1 === activeStep && <OrderInformation />}
               </Stepper>
            </Box>
         </Modal>
      </ContextModalCart.Provider>
   );
};

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 600,
   bgcolor: 'background.paper',
   boxShadow: 24,
   borderRadius: '1rem',
   overflow: 'hidden',
   p: 4,
};

export default ModalConfig;
