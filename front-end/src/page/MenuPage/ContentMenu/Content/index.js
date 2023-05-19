import { Grid, Stack } from '@mui/material';
// import { useEffect, useState } from 'react';
import { Card } from '~/component/client/Card';
import { TitleViewAll } from '~/component/client/TitleViewAll';
import ProductItem from './ProductItem';

function Content() {
    // const [valueSelect, setValueSelect] = useState('Ten');

    // const handleChange = (event) => {
    //     setValueSelect(event.target.value);
    // };

    // useEffect(() => {
    //     console.log(valueSelect);
    // }, [valueSelect]);

    return (
        <Card className={{ padding: '1.5rem' }}>
            <Stack
                sx={{
                    marginBottom: '2.5rem',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    display: { xs: 'none', sm: 'flex' },
                }}
            >
                <TitleViewAll
                    sx={{ padding: 0 }}
                    title="Có 32 sản phẩm"
                    sizeTitle="16px"
                    component="span"
                    sxLink={{ display: 'none' }}
                ></TitleViewAll>

                {/* <Box sx={{ minWidth: 120 }}>
                    <FormControl size="small" fullWidth>
                        <Select value={valueSelect} onChange={handleChange}>
                            <MenuItem value="Ten">Ten</MenuItem>
                            <MenuItem value="Twenty">Twenty</MenuItem>
                            <MenuItem value="Thirty">Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box> */}
            </Stack>

            <Grid container spacing={2} gap="12px">
                <Grid item xs={12}>
                    <ProductItem />
                </Grid>
                <Grid item xs={12}>
                    <ProductItem />
                </Grid>
                <Grid item xs={12}>
                    <ProductItem />
                </Grid>
            </Grid>
        </Card>
    );
}

export default Content;
