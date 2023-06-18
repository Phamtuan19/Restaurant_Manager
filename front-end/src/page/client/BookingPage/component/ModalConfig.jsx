import { Box, Button, Modal, Step, StepContent, Stepper, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react';

import { Clear } from '@mui/icons-material';
import DialogSuccess from './DialogSuccess';
import moment from 'moment';
import { formYup } from '../validation';



const ModalConfig = ({ open, setOpen, tableId, children }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const [dataBooking, setDataBooking] = useState({});
    const { register, handleSubmit, reset, errors } = formYup();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const handleClose = () => {
        reset();
        setActiveStep(0);
        setOpen(false);
    };

    const handleCreateBooking = async () => {
        setOpen(false);
        setActiveStep(0);
        setOpenDialog(true);
    };

    const handleSubmitForm = (data) => {
        setDataBooking({ tableId, ...data, date: moment(data.date).format('YYYY-MM-DD') + ' ' + data.time });
        handleNext();
    };

    return (
        <React.Fragment>
            <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>{children}</Box>
            </Modal>
            <DialogSuccess openDialog={openDialog} setOpenDialog={setOpenDialog} />
        </React.Fragment>
    );
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { sm: 600, xs: '95%' },
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '15px',
    outline: 'none',
};

export default ModalConfig;
