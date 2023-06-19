import { Box, Button, Modal, Step, StepContent, Stepper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import DialogSuccess from './DialogSuccess';
import StepsModal from './StepsModal';
import { formYup } from '../validation';
import moment from 'moment';
import ModalBooking from './ModalBooking';
import ModalMenu from './ModalMenu';
import ModalConfirm from './ModalConfirm';
import { Clear } from '@mui/icons-material';

const steps = [
    {
        label: 'Form Đặt Bàn',
        component: ModalBooking,
    },
    {
        label: 'Thêm sản phẩm',
        component: '',
    },
    {
        label: 'Xác nhận thông tin',
        component: ModalConfirm,
    },
];

const ModalConfig = ({ open, setOpen, tableId }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [dataBooking, setDataBooking] = useState({});
    const [activeStep, setActiveStep] = useState(0);

    const [openModalMenu, setOpenModalMenu] = useState(false);

    const { register, handleSubmit, reset, errors } = formYup();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const handleSubmitForm = (data) => {
        setDataBooking({ tableId, ...data, date: moment(data.date).format('YYYY-MM-DD') + ' ' + data.time });
        handleNext();
    };

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

    return (
        <React.Fragment>
            <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={{ ...style, transform: openModalMenu ? 'translate(-100%, -50%)' : 'translate(-50%, -50%)' }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => {
                            const Component = step.component;
                            return (
                                <Step key={step.label}>
                                    <StepContent
                                        sx={{
                                            border: 'none',
                                            '& .css-8t49rw-MuiStepConnector-line': {
                                                borderLeftWidth: '0px !important',
                                            },
                                        }}
                                    >
                                        <Box py={2} px={2} display="flex" justifyContent="space-between">
                                            <Typography id="modal-modal-title" variant="h5" component="h2">
                                                {step.label}
                                                <Box
                                                    position="absolute"
                                                    top={10}
                                                    right={10}
                                                    sx={{ cursor: 'pointer' }}
                                                    onClick={handleClose}
                                                >
                                                    <Clear />
                                                </Box>
                                            </Typography>
                                            {index === 1 && (
                                                <TextField
                                                    variant="standard"
                                                    size="small"
                                                    sx={{ mr: '4rem' }}
                                                    placeholder="Tìm kiếm sản phẩm"
                                                />
                                            )}
                                        </Box>

                                        {index === 0 ? (
                                            <form onSubmit={handleSubmit(handleSubmitForm)}>
                                                <Component register={register} errors={errors} />
                                                <Box sx={{ mx: 2, mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
                                                    <Button type="submit" variant="contained" sx={{ mt: 1, mr: 1 }}>
                                                        Continue
                                                    </Button>
                                                </Box>
                                            </form>
                                        ) : (
                                            <React.Fragment>
                                                <Component />
                                                <Box sx={{ mx: 2, mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
                                                    <Button
                                                        variant="contained"
                                                        sx={{ mt: 1, mr: 1 }}
                                                        onClick={() => setOpenModalMenu((prev) => !prev)}
                                                    >
                                                        {index >= 1 && 'Menu'}
                                                    </Button>
                                                    <Button
                                                        type={index === steps.length - 1 ? 'button' : 'submit'}
                                                        variant="contained"
                                                        sx={{ mt: 1, mr: 1 }}
                                                        onClick={
                                                            index === steps.length - 1
                                                                ? handleCreateBooking
                                                                : handleNext
                                                        }
                                                    >
                                                        {index === steps.length - 1 ? 'Booking' : 'Continue'}
                                                    </Button>
                                                    <Button
                                                        disabled={index === 0}
                                                        onClick={handleBack}
                                                        sx={{ mt: 1, mr: 1 }}
                                                    >
                                                        Back
                                                    </Button>
                                                </Box>
                                            </React.Fragment>
                                        )}
                                    </StepContent>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {openModalMenu && (
                        <Box sx={styleMenu}>
                            <ModalMenu />
                        </Box>
                    )}
                </Box>
            </Modal>
            <DialogSuccess openDialog={openDialog} setOpenDialog={setOpenDialog} />
        </React.Fragment>
    );
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: { md: 500, xs: '95%' },
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '15px',
    outline: 'none',
    display: 'flex',
};

const styleMenu = {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 500,
    transform: 'translate(101%, 0)',
    bgcolor: '#fff',
};

export default ModalConfig;
