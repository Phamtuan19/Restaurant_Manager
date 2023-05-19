import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Card } from '~/component/client/Card';
import { TitleViewAll } from '~/component/client/TitleViewAll';

function PaymentInfo() {
    const [inputDistricts, setInputDistricts] = useState([]);
    const [inputWard, setInputWard] = useState([]);
    const [districts, setDistricts] = useState('');
    const [ward, setWard] = useState('');

    useEffect(() => {
        const callApiDistricts = async () => {
            try {
                const response = await fetch('https://provinces.open-api.vn/api/p/1?depth=2');
                const data = await response.json();
                console.log(data.districts);
                setInputDistricts(data.districts);
            } catch (e) {
                console.log(e);
            }
        };
        callApiDistricts();
    }, []);

    const handleDistrictsdApi = async (e) => {
        try {
            const response = await fetch(`https://provinces.open-api.vn/api/d/${e}?depth=2`);
            const data = await response.json();
            setInputWard(data.wards);
            setDistricts(e);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChangeWard = (e) => {
        setWard(e.target.value);
    };

    return (
        <Card className={{ padding: '1.5rem' }}>
            <TitleViewAll
                sx={{ borderBottom: '1px solid rgb(227, 225, 225)', marginBottom: '2rem' }}
                title="Delivery address"
                sxLink={{ display: 'none' }}
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
                            onChange={(e) => handleDistrictsdApi(e.target.value)}
                        >
                            {inputDistricts.map((item) => (
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
                            onChange={handleChangeWard}
                        >
                            {inputWard.map((item) => (
                                <MenuItem key={item.code} value={item.code}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth placeholder="Nhập vào ghi chú của bạn ..." multiline rows={2} maxRows={4} />
                </Grid>
            </Grid>
        </Card>
    );
}

export default PaymentInfo;
