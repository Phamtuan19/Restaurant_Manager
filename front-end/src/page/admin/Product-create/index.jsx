import LoadingButton from '@mui/lab/LoadingButton';
import { Box, FormGroup, Grid, Stack, TextField, styled } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import SaveIcon from '@mui/icons-material/Save';
import { useEffect, useState } from 'react';

import { images } from '~/assets/image';
import firebaseUploadImage from '~/services/firebase.service';
import productSeviver from '~/services/product.service';
import setToastMessage from '~/Helpers/toastMessage';
import ControllerTextField from '~/component/customs/@mui/input/ControllerTextField';
import FormLabel from '~/component/customs/@mui/input/FormLabel';
import { formYup } from './utils/validation';
import ControllerSelect from '~/component/customs/@mui/input/ControllerSelect';
import categoriesService from '~/services/categories.service';

function ProductCreate() {
   const [imgUpload, setImgUpload] = useState(null);
   const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(false);

   const from = formYup();

   const { handleSubmit, control, reset, watch } = from;

   const imageUrl = watch('image');

   useEffect(() => {
      setImgUpload(imageUrl);
   }, [imageUrl]);

   useEffect(() => {
      (async () => {
         const res = await categoriesService.adminList();

         setCategories(res.data);
      })();
   }, []);

   const handleImageChange = async (event) => {
      if (event.target.files[0]) {
         const res = await firebaseUploadImage(event);
         setImgUpload(res);
      } else {
         setImgUpload(null);
      }
   };

   const handleSubmitForm = async (data) => {
      console.log(data);
      setLoading(true);
      try {
         const res = await productSeviver.create(data);
         reset();
         setToastMessage(res.message);
      } catch (error) {
         console.log(error);
      }
      setLoading(false);
   };

   return (
      <Box>
         <Stack mb="1rem">
            <Box sx={{ arginBottom: '1.5rem', fontSize: '1.6rem', isplay: 'flex', lignItems: 'center' }}>
               Thêm sản phẩm
            </Box>
         </Stack>

         <Box sx={{ padding: '1.5rem', backgroundColor: 'var(--white)', borderRadius: '10px' }}>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
               <Grid container spacing={2} sx={{ flexWrap: 'nowrap', mb: 2 }}>
                  <Grid item lg={7}>
                     <Grid container spacing={4}>
                        <Grid item lg={6}>
                           <FormLabel required name="name" title="Tên sản phẩm" gutterBottom />
                           <ControllerTextField id="outlined-basic" name="name" control={control} />
                        </Grid>
                        <Grid item lg={6}>
                           <FormGroup>
                              <FormLabel required name="categoryId" title="Tên danh mục" gutterBottom />
                              <ControllerSelect
                                 options={categories}
                                 valuepath="_id"
                                 titlepath="name"
                                 name="categoryId"
                                 control={control}
                              />
                           </FormGroup>
                        </Grid>
                        <Grid item lg={4}>
                           <FormLabel required name="costCapital" title="Giá gốc" gutterBottom />
                           <ControllerTextField id="outlined-basic" name="costCapital" control={control} />
                        </Grid>
                        <Grid item lg={4}>
                           <FormLabel required name="price" title="Giá bán" gutterBottom />
                           <ControllerTextField id="outlined-basic" name="price" control={control} />
                        </Grid>
                        <Grid item lg={4}>
                           <FormLabel required name="priceSale" title="Giá khuyến mại" gutterBottom />
                           <ControllerTextField id="outlined-basic" name="priceSale" control={control} />
                        </Grid>
                        <Grid item lg={12}>
                           <FormLabel required name="image" title="Link hình ảnh" gutterBottom />
                           <ControllerTextField id="outlined-basic" name="image" control={control} />
                        </Grid>
                        <Grid item lg={12}>
                           <FormLabel required name="description" title="Mô tả sản phẩm" gutterBottom />
                           <StyledTextarea aria-label="minimum height" minRows={7} placeholder="Minimum 3 rows" />
                        </Grid>
                     </Grid>
                  </Grid>
                  <Grid item lg={5}>
                     <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <LabelCustom
                           htmlFor="image"
                           sx={{
                              zIndex: 2,
                              cursor: 'pointer',
                              width: '100%',
                              height: '400px',
                              background: 'center center/cover no-repeat',
                              backgroundImage: `url('${imgUpload || images.addImage}')`,
                           }}
                        >
                           <TextField
                              fullWidth
                              type="file"
                              id="image"
                              variant="outlined"
                              size="small"
                              sx={{ opacity: 0 }}
                              onChange={handleImageChange}
                           />
                        </LabelCustom>
                     </Box>
                  </Grid>
               </Grid>

               <LoadingButton
                  type="submit"
                  loading={loading}
                  variant="contained"
                  loadingPosition="end"
                  endIcon={<SaveIcon />}
               >
                  <span>Thêm mới</span>
               </LoadingButton>
            </form>
         </Box>
      </Box>
   );
}

const StyledTextarea = styled(TextareaAutosize)(
   ({ theme }) => `
   width: 100%;
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
export default ProductCreate;
