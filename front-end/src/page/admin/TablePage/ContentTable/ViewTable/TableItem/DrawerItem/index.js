import { Box, Drawer } from '@mui/material';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { DrawerTitle, SpanTime, TableCustom, WrapAction, WrapTime } from './customComponent';
import { Button } from '~/component/client/Button';

function DrawerItem({ showDrawer, handleClick, title }) {
    const [timeOut, setTimeOut] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimeOut = moment().format('HH:mm:ss DD:MM:YYYY');
            setTimeOut(newTimeOut);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Drawer anchor="right" open={showDrawer} onClose={handleClick}>
            <Box sx={{ width: '450px', position: 'relative', height: '100vh' }}>
                <DrawerTitle>
                    Bàn số " <span style={{ color: 'var(--color-red)' }}>{title}</span> "
                </DrawerTitle>
                <WrapTime>
                    <Box>
                        <SpanTime sx={{ marginRight: '6px' }}>Giờ vào: </SpanTime>
                        <SpanTime>00:29:44 21:05:2023</SpanTime>
                    </Box>
                    {'-'}
                    <Box>
                        <SpanTime sx={{ marginRight: '6px' }}>Giờ về: </SpanTime>
                        <SpanTime>{timeOut}</SpanTime>
                    </Box>
                </WrapTime>
                <Box sx={{ padding: '1rem 8px' }}>
                    <TableCustom>
                        <thead>
                            <tr>
                                <td>Món</td>
                                <td>SL</td>
                                <td>Đ Giá</td>
                                <td>T Giá</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Trà tranh</td>
                                <td>1</td>
                                <td>12.000đ</td>
                                <td>12.000đ</td>
                            </tr>
                            <tr>
                                <td>Trà tranh</td>
                                <td>1</td>
                                <td>12.000đ</td>
                                <td>12.000đ</td>
                            </tr>
                            <tr>
                                <td>Trà tranh</td>
                                <td>1</td>
                                <td>12.000đ</td>
                                <td>12.000đ</td>
                            </tr>
                            <tr>
                                <td>Trà tranh</td>
                                <td>1</td>
                                <td>12.000đ</td>
                                <td>12.000đ</td>
                            </tr>
                        </tbody>
                    </TableCustom>
                    <Box sx={{ padding: '12px', display: 'flex', justifyContent: 'space-between' }}>
                        <SpanTime sx={{ fontSize: '16px', fontWeight: '500' }}>Tổng cộng: </SpanTime>
                        <SpanTime sx={{ fontSize: '16px', fontWeight: '500' }}>250.000đ</SpanTime>
                    </Box>
                </Box>

                <WrapAction>
                    <Button
                        styleProps={{
                            width: '60%',
                            borderRadius: '5px',
                            backgroundColor: '#007bff',
                            '&:hover': { backgroundColor: '#0069d9', borderColor: '#0069d9' },
                        }}
                        title="Thanh Toán"
                    />
                    <Button
                        styleProps={{
                            width: '40%',
                            borderRadius: '5px',
                            backgroundColor: '#17a2b8',
                            '&:hover': { backgroundColor: '#17a2b8', borderColor: '#17a2b8' },
                        }}
                        title="Thêm Món"
                    />
                </WrapAction>
            </Box>
        </Drawer>
    );
}

export default DrawerItem;
