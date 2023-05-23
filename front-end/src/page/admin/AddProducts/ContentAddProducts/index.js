import { Box, Grid, Stack, TextField, styled } from '@mui/material';
import { Button } from '~/component/client/Button';

function ContentAddProducts() {
    return (
        <Box>
            <Stack
                sx={{
                    marginBottom: '1rem',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <HeaderAddProduct />
            </Stack>

            <WrapContent>
                <Grid container spacing={2}>
                    <Grid item lg={8}>
                        <Grid container spacing={4}>
                            <Grid item lg={6}>
                                <LabelCustom htmlFor="product_name">Tên Món</LabelCustom>
                                <TextFieldCustom
                                    fullWidth
                                    id="product_name"
                                    placeholder="Tên món ăn"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <LabelCustom htmlFor="product_category">Danh mục</LabelCustom>
                                <TextFieldCustom
                                    fullWidth
                                    id="product_category"
                                    placeholder="Danh mục sản phẩm"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4}>
                        <Grid item lg={12}>
                            <LabelCustom
                                htmlFor="product_images"
                                sx={{ width: '100%', height: '400px', backgroundColor: '#ccc' }}
                            ></LabelCustom>
                            <TextFieldCustom
                                fullWidth
                                type="file"
                                id="product_images"
                                variant="outlined"
                                size="small"
                                sx={{ opacity: 0 }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </WrapContent>
        </Box>
    );
}

const WrapContent = styled('div')({
    padding: '1.5rem 1rem',
    width: '100%',
    minHeight: '400px',
    backgroundColor: 'var(--white)',
    borderRadius: '10px',
});

const LabelCustom = styled('label')({
    marginBottom: '.5rem',
    display: 'inline-block',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#212529',
    textAlign: 'left',
    fontFamily: '"Roboto Slab",serif',
});

const TextFieldCustom = styled(TextField)({
    borderRadius: '.25rem',
    fontFamily: '"Roboto Slab",serif !important',
});

const HeaderAddProduct = () => {
    return (
        <>
            <HeaderTitle>Thêm sản phẩm</HeaderTitle>

            <Stack>
                <Button
                    styleProps={{
                        fontSize: '14px',
                        padding: '4px 12px',
                        borderRadius: '5px',
                        marginRight: '12px',
                    }}
                >
                    Danh sách sản phẩm
                </Button>
            </Stack>
        </>
    );
};

const HeaderTitle = styled('h3')({
    fontSize: '1.6rem',
    fontFamily: '"Roboto Slab",serif',
    color: 'var(--black)',
});

export default ContentAddProducts;
