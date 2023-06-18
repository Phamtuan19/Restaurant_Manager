import {
    Box,
    FormControl,
    FormLabel,
    Grid,
    MenuItem,
    Select,
    TextField,
    TextareaAutosize,
    styled,
} from '@mui/material';
import { formYup } from '../validation';
import React, { useState } from 'react';

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const listInput = [
    {
        name: 'name',
        label: 'Tên của bạn',
        type: 'text',
        xs: 12,
        sm: 6,
    },
    {
        name: 'phone',
        label: 'Số điện thoại',
        type: 'text',
        xs: 12,
        sm: 6,
    },
    {
        name: 'date',
        label: 'Ngày đặt',
        type: 'date',
        xs: 12,
        sm: 4,
    },
    {
        name: 'time',
        label: 'Thời gian',
        type: 'time',
        xs: 12,
        sm: 4,
    },
];

const ModalBooking = ({ register, errors }) => {
    const [partySize, setPartySize] = useState(4);

    return (
        <Box px={2} mt={2}>
            <Grid container spacing={1}>
                {listInput.map((item) => (
                    <Grid item key={item.name} sx={{ mb: { xs: '6px', sm: 2 } }} xs={item.xs} sm={item.sm}>
                        <FormLabel>{item.label}</FormLabel>
                        <TextField
                            size="small"
                            type={item.type}
                            fullWidth
                            variant="outlined"
                            {...register(item.name)}
                            error={!!errors[item.name]}
                            helperText={errors[item.name]?.message}
                        />
                    </Grid>
                ))}

                <Grid item sx={{ mb: { xs: '6px', sm: 2 } }} xs={12} sm={4}>
                    <FormControl fullWidth>
                        <FormLabel>Số khách</FormLabel>
                        <Select
                            size="small"
                            {...register('partySize')}
                            value={partySize}
                            onChange={(e) => setPartySize(e.target.value)}
                        >
                            {numberArray.map((item) => (
                                <MenuItem key={item} value={item}>
                                    {item} Chỗ ngồi
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sx={{ mb: { xs: '6px', sm: 2 } }} xs={12}>
                    <FormLabel>Ghi chú</FormLabel>
                    <StyledTextarea
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Thêm ghi chú"
                        {...register('note')}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    &:focus-visible {
      outline: 0;
    }
  `,
);

export default ModalBooking;
