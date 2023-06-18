import { Stepper } from '@mui/material';
import React from 'react';

import ModalBooking from './ModalBooking';
import ModalMenu from './ModalMenu';
import ModalConfirm from './ModalConfirm';

const steps = [
    {
        label: 'Form Đặt Bàn',
        component: ModalBooking,
    },
    {
        label: 'Thêm sản phẩm',
        component: ModalMenu,
    },
    {
        label: 'Xác nhận thông tin',
        component: ModalConfirm,
    },
];

const StepsModal = () => {
    return (
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
                                            type={index === steps.length - 1 ? 'button' : 'submit'}
                                            variant="contained"
                                            sx={{ mt: 1, mr: 1 }}
                                            onClick={index === steps.length - 1 ? handleCreateBooking : handleNext}
                                        >
                                            {index === steps.length - 1 ? 'Booking' : 'Continue'}
                                        </Button>
                                        <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
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
    );
};

export default StepsModal;
