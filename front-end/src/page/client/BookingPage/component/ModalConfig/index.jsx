import { Box, Modal, Step, StepContent, Stepper } from '@mui/material';
import React, { createContext, useState } from 'react';

import DialogSuccess from '../DialogSuccess';
import { formYup } from '../../utils/validation';
import ModalBooking from './ModalBooking';
import ModalMenu from './ModalMenu';
import ModalConfirm from './ModalConfirm';
import styled from 'styled-components';
import { useBooking } from '~/redux/SliceReducer/booking.reducer';
import moment from 'moment/moment';

export const ContextBooking = createContext();

const STEP1 = 0;
const STEP2 = 1;
const STEP3 = 2;

const ModalConfig = ({ open, setOpen, tableId }) => {
   const [openDialog, setOpenDialog] = useState(false);
   const [activeStep, setActiveStep] = useState(0);
   const form = formYup();
   const { setBookingUser } = useBooking();

   const handleNext = () => {
      if (activeStep === 2) {
         setActiveStep(0);
         setOpen(false);
      } else {
         setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
   };

   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

   const handleCloseModal = () => {
      setOpen(false);
   };

   const onSubmit = (data) => {
      setBookingUser({
         ...data,
         date: moment(data.date).format('YYYY-MM-DD'),
      });
      handleNext();
   };

   const handleClose = () => {
      form.reset();
      setActiveStep(0);
      setOpen(false);
   };

   const handleCreateBooking = async () => {
      setOpen(false);
      setActiveStep(0);
      setOpenDialog(true);
   };

   return (
      <ContextBooking.Provider value={{}}>
         <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
         >
            <Stepper activeStep={activeStep} orientation="vertical" sx={{ outline: 'none' }}>
               {STEP1 === activeStep && (
                  <ModalBooking handleCloseModal={handleCloseModal} onSubmit={onSubmit} handleClose={handleClose} />
               )}
               {STEP2 === activeStep && (
                  <ModalMenu handleCloseModal={handleCloseModal} handleNext={handleNext} handleBack={handleBack} />
               )}
               {STEP3 === activeStep && (
                  <ModalConfirm handleCloseModal={handleCloseModal} handleNext={handleNext} handleBack={handleBack} />
               )}
            </Stepper>
         </Modal>
         {/* <DialogSuccess openDialog={openDialog} setOpenDialog={setOpenDialog} /> */}
      </ContextBooking.Provider>
   );
};

export default ModalConfig;
