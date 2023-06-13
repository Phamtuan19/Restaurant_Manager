/* eslint-disable react-hooks/exhaustive-deps */
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import { Card } from '~/component/client/Card';
import TitleComponent from '~/page/client/HomePage/ContentHome/TitleComponent';
import province from '~/services/province';

function PaymentInfo() {
    const [apiDistricts, setApiDistricts] = useState([]);
    const [apiWard, setApiWard] = useState([]);
    const [districts, setDistricts] = useState(''); // quận huyện
    const [ward, setWard] = useState(''); // Xã phường
    const [note, setNote] = useState('');

    const { getDistricts, getWards } = province();

    useEffect(() => {
        console.log(process.env.REACT_APP_BASE_URL_API);

        const resultDistricts = async () => {
            const result = await getDistricts();
            setApiDistricts(result);
        };
        resultDistricts();
    }, []);

    useEffect(() => {
        if (districts !== '') {
            const resultWard = async () => {
                const result = await getWards(districts);
                setApiWard(result);
            };
            resultWard();
        }
    }, [districts]);

    const handleChangeWard = (e) => {
        setWard(e);
    };

    const handleChangeDistricts = (e) => {
        setDistricts(e);
        setWard('');
    };

    return (
        <Card className={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
            <TitleComponent
                sx={{ borderBottom: '1px solid rgb(227, 225, 225)', paddingBottom: '1.5rem', marginBottom: '2rem' }}
                title="Delivery address"
            />

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField fullWidth id="outlined-basic" label="name" variant="outlined" size="medium" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="outlined-basic" label="Số điện thoại" variant="outlined" size="medium" />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Thành Phố</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value="Hà Nội"
                            id="demo-simple-select"
                            label="Thành Phố"
                        >
                            <MenuItem value="Hà Nội">Hà Nội</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Quận Huyện</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Quận Huyện"
                            value={districts}
                            onChange={(e) => handleChangeDistricts(e.target.value)}
                        >
                            {apiDistricts.map((item) => (
                                <MenuItem key={item.code} value={item.code}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Xã Phường</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Xã Phường"
                            value={ward}
                            onChange={(e) => handleChangeWard(e.target.value)}
                        >
                            {apiWard.map((item) => (
                                <MenuItem key={item.code} value={item.code}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        value={note}
                        placeholder="Nhập vào ghi chú của bạn ..."
                        multiline
                        rows={2}
                        onChange={(e) => setNote(e.target.value)}
                    />
                </Grid>
            </Grid>
        </Card>
    );
}

export default PaymentInfo;
