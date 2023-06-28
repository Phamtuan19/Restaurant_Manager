import { Box, Grid, Pagination, PaginationItem, Stack } from '@mui/material';
import DefaultLayout from '~/layout/client/DefaultLayout';
import Categories from './ContentMenu/Menu';
import { useEffect, useState } from 'react';
import useDebounce from '~/hooks/useDebounce';
import productSeviver from '~/services/product.service';
import Product from './ContentMenu/Product';
import ProductSkeleton from '~/component/customs/ProductSkeleton';
import { Link } from 'react-router-dom';

const listSekeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function ContentMenu() {
   const [category, setCategory] = useState([]);
   const [search, setSearch] = useState('');

   // const [valueSelect, setValueSelect] = useState('');
   const [products, setProducts] = useState([]);
   const [page, setPage] = useState(1);

   const searchDebounce = useDebounce(search, 500);

   useEffect(() => {
      setProducts((prevProduct) => ({ ...prevProduct, data: null }));
      (async () => {
         const res = await productSeviver.getMenuProducts(searchDebounce, category, page);
         setProducts(res.products);
      })();
   }, [searchDebounce, page, category]);

   return (
      <DefaultLayout>
         <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={3}>
               <Categories search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
               <Box className={{ backgroundColor: 'transparent' }}>
                  <Box sx={{ ...styleHeader, display: { xs: 'none', sm: 'flex' } }}>
                     <Box component="p">Có {products?.data ? products.data.length : 0} sản phẩm</Box>
                  </Box>

                  <Grid container spacing={2} gap="12px 0" sx={{ marginTop: '12px', marginBottom: '2rem' }}>
                     {products?.data
                        ? products?.data.map((data) => {
                             return (
                                <Grid key={data.id} item xs={12} sm={6} md={4} lg={3}>
                                   <Product data={data} />
                                </Grid>
                             );
                          })
                        : listSekeleton.map((item, index) => {
                             return (
                                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                   <ProductSkeleton />
                                </Grid>
                             );
                          })}
                  </Grid>

                  <Stack spacing={2} sx={{ alignItems: 'center' }}>
                     <Pagination
                        page={page}
                        count={products?.last_page || 1}
                        onChange={(event, value) => setPage(value)}
                        renderItem={(item) => <PaginationItem component={Link} to={`?page=${item.page}`} {...item} />}
                     />
                  </Stack>
               </Box>
            </Grid>
         </Grid>
      </DefaultLayout>
   );
}

const styleHeader = {
   paddingBottom: '.5rem',
   borderBottom: '2px solid rgb(255, 255, 255)',
   justifyContent: 'space-between',
   alignItems: 'center',
};

export default ContentMenu;
