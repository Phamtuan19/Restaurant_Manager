import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box, Button, CircularProgress, FormHelperText, MenuItem, Modal, Select, Stack } from '@mui/material';
import * as yup from 'yup';

import { LabelCustom, TextFieldCustom } from '~/page/admin/Products/ProductsCreate/ContentCreate';
import { useState } from 'react';
import { images } from '~/assets/image';
import firebaseUploadImage from '~/services/firebase.service';
import tableService from '~/services/tables.service';
import setToastMessage from '~/Helpers/toastMessage';

const validate = yup.object({
    index_table: yup.string().required('Mã bàn không được để trống'),
    description: yup.string().required('Mô tả không được để trống'),
    floor: yup.string().required('Vị trí không được để trống'),
    total_user_sitting: yup.number().typeError('Số người không được để trống'),
});

function ModalAddTable({ open, handleClose }) {
    const [imageUrl, setImageUrl] = useState(
        'https://firebasestorage.googleapis.com/v0/b/restaurant-manager-387216.appspot.com/o/files%2FBo-ban-composite-vuong-nan-vang-tay-cong-BCP-09W-4.jpg0523072f-fa77-44bb-bcd7-2f4e90f5320d?alt=media&token=5e398b8a-3e4b-454e-8c4d-fb51a6dff90c',
    );
    const [floor, setFloor] = useState('');
    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validate),
    });

    const handleSubmitForm = async (data) => {
        console.log(data);
        const response = await tableService.postTableCreate({ ...data, image: imageUrl });

        if (response?.status === 200) {
            // reset();
            setImageUrl(null);
            console.log(response);
            if (response?.message) {
                setToastMessage(response.message, 'success');
                setImageUrl();
                // 'https://firebasestorage.googleapis.com/v0/b/restaurant-manager-387216.appspot.com/o/files%2FBo-ban-composite-vuong-nan-vang-tay-cong-BCP-09W-4.jpg0523072f-fa77-44bb-bcd7-2f4e90f5320d?alt=media&token=5e398b8a-3e4b-454e-8c4d-fb51a6dff90c',
            } else {
                setToastMessage('Đã có lỗi xảy ra!', 'error');
            }
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 600 }}>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <Box mb={2}>
                        <LabelCustom htmlFor="index_table">Mã số bàn</LabelCustom>
                        <TextFieldCustom
                            fullWidth
                            id="index_table"
                            placeholder="Nhập vào mã số bàn"
                            variant="outlined"
                            size="small"
                            {...register('index_table')}
                            error={!!errors.index_table}
                            helperText={errors.index_table?.message}
                        />
                    </Box>
                    <Box mb={2}>
                        <LabelCustom htmlFor="description">Mô tả bàn</LabelCustom>
                        <TextFieldCustom
                            fullWidth
                            id="description"
                            placeholder="Mô tả bàn"
                            variant="outlined"
                            size="small"
                            {...register('description')}
                            error={!!errors.description}
                            helperText={errors.description?.message}
                        />
                    </Box>
                    <Stack mb={2} flexDirection="row" gap="0 6px">
                        <Box flex={1}>
                            <LabelCustom htmlFor="floor">Vị trí bàn</LabelCustom>
                            <Select
                                fullWidth
                                id="floor"
                                size="small"
                                {...register('floor')}
                                value={floor}
                                onChange={(e) => setFloor(e.target.value)}
                            >
                                <MenuItem value="1" defaultChecked>
                                    Tầng 1
                                </MenuItem>
                                <MenuItem value="2">Tầng 2</MenuItem>
                                <MenuItem value="3">Tầng 3</MenuItem>
                                <MenuItem value="4">Tầng 4</MenuItem>
                            </Select>
                            <FormHelperText>{errors.categories?.message}</FormHelperText>
                        </Box>
                        <Box flex={1}>
                            <LabelCustom htmlFor="total_user_sitting">Sức chứa</LabelCustom>
                            <TextFieldCustom
                                fullWidth
                                type="number"
                                id="total_user_sitting"
                                placeholder="Số người"
                                variant="outlined"
                                size="small"
                                {...register('total_user_sitting')}
                                error={!!errors.total_user_sitting}
                                helperText={errors.total_user_sitting?.message}
                            />
                        </Box>
                    </Stack>

                    <Box sx={{ width: 200, height: 200 }}>
                        <UploadImage register={register} imageUrl={imageUrl} setImageUrl={setImageUrl} />
                    </Box>

                    <Button type="submit" sx={{ marginTop: '2rem' }} variant="contained">
                        Thêm bàn
                    </Button>
                </form>
            </Box>
        </Modal>
    );
}

const UploadImage = ({ register, imageUrl, setImageUrl }) => {
    const [loadingUploadImage, setLoadingUploadImage] = useState(false);

    const handleImageChange = async (event) => {
        if (event.target.files[0]) {
            setLoadingUploadImage((prev) => !prev);
            const res = await firebaseUploadImage(event);
            setImageUrl(res);
            setLoadingUploadImage((prev) => !prev);
        } else {
            setImageUrl(null);
        }
    };

    return (
        <Box mb={2} sx={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
            <LabelCustom
                htmlFor="product_images"
                sx={{
                    zIndex: 2,
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                    background: 'center center/cover no-repeat',
                    backgroundImage: `url('${imageUrl || images.noImage}')`,
                }}
            >
                <TextFieldCustom
                    fullWidth
                    type="file"
                    id="product_images"
                    variant="outlined"
                    size="small"
                    sx={{ opacity: 0 }}
                    {...register('image')}
                    onChange={handleImageChange}
                />
            </LabelCustom>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: loadingUploadImage ? 'flex' : 'none',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 10,
                }}
            >
                <CircularProgress />
            </Box>
        </Box>
    );
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    fontFamily: '"Roboto Slab",serif',
    boxShadow: 24,
    zIndex: 999999,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: '10px',
};

export default ModalAddTable;
