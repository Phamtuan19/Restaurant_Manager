/* eslint-disable array-callback-return */
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Box, FormControl, FormHelperText, MenuItem, Select, TextField, styled } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import * as yup from 'yup';
import setToastMessage from '~/Helpers/toastMessage';
import categoriesService from '~/services/categories.service';
import firebaseUploadImage from '~/services/firebase.service';
import { images } from '~/assets/image';

const validate = yup.object({
   name: yup.string().required('Tên danh mục không được để trống'),
   type: yup.string().required('Xếp loại danh mục không được để trống'),
   // image: yup.mixed().test('required', 'Hình ảnh không được để trống', (value) => {
   //     if (value.length > 0) {
   //         return true;
   //     }
   //     return false;
   // }),
});

const FormCreateCategories = ({ categories, setUpdateCategoriesList }) => {
   const [loading, setLoading] = useState(false);
   const [selectType, setSelectType] = useState('');
   const [selectParent, setSelectParent] = useState('');
   const [imageUrl, setImageUrl] = useState(null);

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({ criteriaMode: 'all', resolver: yupResolver(validate) });

   const handleSubmitForm = async (data) => {
      const response = await categoriesService.adminCategoriesCreate({ ...data, image: imageUrl });
      if (response?.status === 200) {
         reset();
         setImageUrl(null);
         console.log(response);
         if (response?.message) {
            setToastMessage(response.message, 'success');
            setUpdateCategoriesList(true);
         }

         setToastMessage(response[0]?.name[0], 'error');
      }
   };

   const handleImageChange = async (event) => {
      if (event.target.files[0]) {
         const res = await firebaseUploadImage(event, setImageUrl);
         setImageUrl(res);
      } else {
         setImageUrl(null);
      }
   };

   return (
      <Box sx={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: '10px' }}>
         <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Box>
               <label
                  htmlFor="modal-name"
                  style={{
                     marginBottom: '6px',
                     display: 'block',
                     color: errors.name ? '#d32f2f' : 'var(--black)',
                  }}
               >
                  Tên danh mục
               </label>
               <TextField
                  fullWidth
                  id="modal-name"
                  size="small"
                  sx={{ marginBottom: '1rem' }}
                  {...register('name')}
                  error={!!errors.name}
                  helperText={errors.name?.message}
               />
            </Box>

            <Box sx={{ marginBottom: '1rem' }}>
               <FormControl fullWidth error={!!errors.type}>
                  <label
                     htmlFor="modal-type"
                     style={{
                        marginBottom: '6px',
                        display: 'block',
                        color: errors.type ? '#d32f2f' : 'var(--black)',
                     }}
                  >
                     Xếp loại
                  </label>
                  <Select
                     id="modal-type"
                     value={selectType}
                     size="small"
                     {...register('type')}
                     onChange={(e) => setSelectType(e.target.value)}
                  >
                     <MenuItem value="" defaultChecked></MenuItem>
                     <MenuItem value="sản phẩm">Sản phẩm</MenuItem>
                     <MenuItem value="nguyên liệu">Nguyên liệu</MenuItem>
                  </Select>
                  <FormHelperText>{errors.type?.message}</FormHelperText>
               </FormControl>
            </Box>

            <Box sx={{ marginBottom: '1rem' }}>
               <FormControl fullWidth error={!!errors.parentId}>
                  <label
                     htmlFor="modal-parentId"
                     style={{
                        marginBottom: '6px',
                        display: 'block',
                        color: errors.parentId ? '#d32f2f' : 'var(--black)',
                     }}
                  >
                     Danh mục cha
                  </label>
                  <Select
                     id="modal-parentId"
                     value={selectParent}
                     size="small"
                     {...register('parentId')}
                     onChange={(e) => setSelectParent(e.target.value)}
                  >
                     <MenuItem value="" defaultChecked></MenuItem>
                     {(categories || []).map((category) => {
                        if (category.parent_id === null) {
                           return (
                              <MenuItem key={v4()} value={category.id}>
                                 {category.name}
                              </MenuItem>
                           );
                        }
                     })}
                  </Select>
                  <FormHelperText>{errors.parentId?.message}</FormHelperText>
               </FormControl>
            </Box>

            <Box>
               <LabelCustom
                  htmlFor="product_images"
                  sx={{
                     backgroundImage: `url('${imageUrl || images.noImage}')`,
                  }}
               >
                  <TextField
                     fullWidth
                     type="file"
                     id="product_images"
                     sx={{ opacity: 0 }}
                     {...register('image')}
                     onChange={handleImageChange}
                  />
               </LabelCustom>
               <Box sx={{ fontSize: '0.75rem', color: '#d32f2f' }}>{errors.image?.message}</Box>
            </Box>
            <LoadingButton type="submit" sx={{ marginTop: '1rem' }} variant="contained" loading={loading}>
               <Box sx={{ marginRight: loading ? 2.5 : 0 }}>Thêm mới</Box>
            </LoadingButton>
         </form>
      </Box>
   );
};

const LabelCustom = styled('label')({
   marginBottom: '.5rem',
   display: 'inline-block',
   width: '50%',
   height: '200px',
   background: 'center center/cover no-repeat',
   cursor: 'pointer',
});

export default FormCreateCategories;
