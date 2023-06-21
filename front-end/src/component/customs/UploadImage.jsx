import { Box, CircularProgress, FormControl, FormHelperText, InputLabel, TextField } from '@mui/material';
import { useState } from 'react';
import setToastMessage from '~/Helpers/toastMessage';
import { images } from '~/assets/image';
import firebaseUploadImage from '~/services/firebase.service';

function UploadImage({ name, errors, imageUrl, setImageUrl }) {
    const [loadingUploadImage, setLoadingUploadImage] = useState(false);

    const handleImageChange = async (event) => {
        console.log(event.target.files[0]);
        if (event.target.files[0]) {
            try {
                setLoadingUploadImage(true);
                const res = await firebaseUploadImage(event);
                setImageUrl(res);
                setLoadingUploadImage(false);
            } catch (error) {
                console.log(error);
                setToastMessage('upload ảnh không thành công!', 'error');
            }
        } else {
            setImageUrl(null);
        }
    };

    return (
        <>
            <Box position="relative" width="100%" height="100%">
                <InputLabel
                    htmlFor="product_images"
                    sx={{
                        zIndex: 2,
                        display: 'block',
                        cursor: 'pointer',
                        width: '100%',
                        height: '100%',
                        background: 'center center/cover no-repeat',
                        backgroundImage: `url('${imageUrl || images.noImage}')`,
                    }}
                >
                    <TextField
                        type="file"
                        id="product_images"
                        sx={{ opacity: 0 }}
                        {...name}
                        onChange={handleImageChange}
                    />
                </InputLabel>
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
            <Box
                sx={{
                    color: '#d32f2f',
                    minWidth: 300,
                    fontWeight: 400,
                    fontSize: '0.75rem',
                    textAlign: 'left',
                    marginTop: '3px',
                }}
            >
                {!imageUrl ? errors?.message : ''}
            </Box>
        </>
    );
}

export default UploadImage;
