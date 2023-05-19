import { styled, Stack, Box } from '@mui/material';
import { useState } from 'react';
import { Button } from '~/component/client/Button';
import { Card } from '~/component/client/Card';
import { TitleViewAll } from '~/component/client/TitleViewAll';

function Delivery() {
    return (
        <Card className={{ padding: '0 1.5rem 2rem ' }}>
            <Stack>
                <TitleViewAll
                    title="Delivery"
                    sxLink={{ display: 'none' }}
                    sx={{ borderBottom: '1px dashed  rgb(227, 225, 225)', marginBottom: '2rem' }}
                />
            </Stack>

            <Stack
                sx={{
                    flexDirection: 'row',
                    borderBottom: '1px dashed  rgb(227, 225, 225)',
                }}
            >
                <InputPromocode placeholder="Promo Code ..." />
                <Button
                    styleProps={{
                        borderRadius: '0 10px 10px 0',
                        marginBottom: '2rem',
                    }}
                    title="Apply"
                />
            </Stack>

            <Box>
                <Stack sx={{ cursor: 'pointer', borderBottom: '1px dashed  rgb(227, 225, 225)' }}>
                    <Box sx={{ padding: '1rem 0' }}>
                        <p style={{ float: 'left' }}>SubTotal</p>
                        <p style={{ float: 'right' }}>$12.00</p>
                    </Box>
                    <Box sx={{ padding: '.7rem 0', color: '#989898' }}>
                        <p style={{ float: 'left' }}>Discount</p>
                        <p style={{ float: 'right' }}>$12.00</p>
                    </Box>
                    <Box sx={{ padding: '.7rem 0', color: '#989898' }}>
                        <p style={{ float: 'left' }}>Ship</p>
                        <p style={{ float: 'right' }}>$12.00</p>
                    </Box>
                </Stack>

                <Stack sx={{ marginBottom: '2rem', cursor: 'pointer', borderBottom: '1px dashed  rgb(227, 225, 225)' }}>
                    <Box sx={{ padding: '1rem 0' }}>
                        <p style={{ float: 'left' }}>Total</p>
                        <p style={{ float: 'right' }}>$12.00</p>
                    </Box>
                </Stack>

                <Stack>
                    <Button
                        title="Proceed to Order"
                        styleProps={{
                            color: '#fff',
                            backgroundColor: '#0d6efd !important',
                            borderColor: '#0d6efd',
                            '&:hover': {
                                backgroundColor: '#0d6efd !important',
                                borderColor: '#0d6efd',
                            },
                        }}
                    />
                </Stack>
            </Box>
        </Card>
    );
}

const InputPromocode = styled('input')({
    width: '100%',
    borderRadius: '20px 0 0 20px',
    padding: '0.7rem 1rem 0.7rem 1rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.75,
    color: '#959895',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #e3e1e1',
    transition: 'all 0.5s',
    marginBottom: '2rem',

    '&:focus': {
        outline: 'none',
        width: '100%',
    },
});

export default Delivery;
