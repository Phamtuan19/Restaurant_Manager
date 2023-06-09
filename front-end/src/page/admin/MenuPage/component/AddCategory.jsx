import { LoadingButton } from '@mui/lab';
import { Box, FormControl, FormHelperText, Grid, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { Delete } from '~/component/Icons';
import React, { useEffect, useState } from 'react';
import categoriesService from '~/services/categories.service';
import setToastMessage from '~/Helpers/toastMessage';
import { formYup, validateAddCategory } from '../validation';
import UploadImage from '~/component/customs/UploadImage';

function AddCategory({ setOpenModal }) {
   const { register, handleSubmit, reset, errors } = formYup(validateAddCategory);

   const [valueSelect, setValueSelect] = useState('');
   const [valueSelectType, setValueSelectType] = useState('');
   const [imageUrl, setImageUrl] = useState(null);

   const [listCategoriesType, setListCategoriesType] = useState([]);
   const [listCategories, setListCategories] = useState([]);

   useEffect(() => {
      if (setOpenModal) {
         const api = async () => {
            const res = await categoriesService.adminCategoriesType();
            setListCategoriesType(res.categoryType);
            setListCategories(res.category);
         };

         api();
      }
   }, [setOpenModal]);

   const handleSubmitForm = async (data) => {
      const dataApi = {
         ...data,
         image: imageUrl,
      };
      console.log(dataApi);
      try {
         await categoriesService.adminCategoriesCreate(dataApi);
         reset();
         setImageUrl(null);
         setToastMessage('Thêm danh mục thành công!', 'success');
      } catch (error) {
         console.log(error);
      }
   };

   const handleClose = () => {
      reset();
      setImageUrl(null);
      setOpenModal(false);
   };
   return (
      <React.Fragment>
         <Box position="relative">
            <Typography variant="h6" component="h2" fontWeight="bold" fontSize="1rem">
               Thêm danh mục
            </Typography>
            <Box position="absolute" top={-15} right={-11} sx={{ cursor: 'pointer' }} onClick={handleClose}>
               <Delete width="1.2rem" />
            </Box>
         </Box>
         <Box mt={3}>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
               <Grid container spacing={3}>
                  <Grid item xs={6} lg={6}>
                     <Stack gap="24px 0">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                           <Box width="50%" fontSize="1rem">
                              Tên danh mục
                           </Box>
                           <TextField
                              fullWidth
                              variant="standard"
                              {...register('name')}
                              error={!!errors.name}
                              helperText={errors.name?.message}
                           />
                        </Box>

                        <FormControl fullWidth error={!!errors.parentId}>
                           <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                              <Box width="50%">Danh mục cha</Box>
                              <Stack width="100%">
                                 <Select
                                    fullWidth
                                    size="small"
                                    variant="standard"
                                    {...register('parentId')}
                                    value={valueSelect}
                                    onChange={(e) => setValueSelect(e.target.value)}
                                 >
                                    <MenuItem value=""></MenuItem>
                                    {listCategories.map((item) => (
                                       <MenuItem key={item.id} value={item.id}>
                                          {item.name}
                                       </MenuItem>
                                    ))}
                                 </Select>
                                 <FormHelperText>{errors.parentId?.message}</FormHelperText>
                              </Stack>
                           </Box>
                        </FormControl>
                        <FormControl fullWidth error={!!errors.name}>
                           <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                              <Box width="50%">Loại danh mục</Box>
                              <Stack width="100%">
                                 <Select
                                    fullWidth
                                    size="small"
                                    variant="standard"
                                    {...register('categoriesTypeId')}
                                    value={valueSelectType}
                                    onChange={(e) => setValueSelectType(e.target.value)}
                                 >
                                    <MenuItem value=""></MenuItem>
                                    {listCategoriesType.map((item) => (
                                       <MenuItem key={item.id} value={item.id}>
                                          {item.name}
                                       </MenuItem>
                                    ))}
                                 </Select>
                                 <FormHelperText>{errors.name?.message}</FormHelperText>
                              </Stack>
                           </Box>
                        </FormControl>
                     </Stack>
                  </Grid>

                  <Grid item xs={6} lg={6}>
                     <Box sx={{ float: 'right' }} width={200} height={200}>
                        <UploadImage
                           name={{ ...register('image') }}
                           errors={errors.image}
                           imageUrl={imageUrl}
                           setImageUrl={setImageUrl}
                        />
                     </Box>
                  </Grid>
               </Grid>

               <Box sx={{ mt: 4, mb: 2 }}>
                  <LoadingButton type="submit" variant="contained">
                     <span>Thêm mới</span>
                  </LoadingButton>
               </Box>
            </form>
         </Box>
      </React.Fragment>
   );
}

export default AddCategory;
