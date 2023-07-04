import { useState } from 'react';
import { useBooking } from '~/redux/SliceReducer/booking.reducer';
import moment from 'moment/moment';
import { Modal, Stepper } from '@mui/material';
import ModalBooking from './ModalBooking';
import ModalMenu from './ModalMenu';
import ModalConfirm from './ModalConfirm';

const STEP1 = 0;
const STEP2 = 1;
const STEP3 = 2;

const ModalConfig = ({ open, setOpen, dataTable }) => {
   const [activeStep, setActiveStep] = useState(0);
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
         tableId: dataTable._id,
         date: moment(data.date).format('YYYY-MM-DD'),
      });
      handleNext();
   };

   return (
      <Modal
         open={open}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
         <Stepper activeStep={activeStep} orientation="vertical" sx={{ width: '100%', outline: 'none' }}>
            {STEP1 === activeStep && (
               <ModalBooking handleCloseModal={handleCloseModal} onSubmit={onSubmit} dataTable={dataTable} />
            )}
            {STEP2 === activeStep && (
               <ModalMenu handleCloseModal={handleCloseModal} handleNext={handleNext} handleBack={handleBack} />
            )}
            {STEP3 === activeStep && (
               <ModalConfirm handleCloseModal={handleCloseModal} handleNext={handleNext} handleBack={handleBack} />
            )}
         </Stepper>
      </Modal>
   );
};

export default ModalConfig;
