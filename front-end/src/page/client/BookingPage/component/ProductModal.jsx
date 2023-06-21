const { Box, Stack, TextField } = require('@mui/material');
const { default: styled } = require('styled-components');
const { default: fomatMoney } = require('~/Helpers/fomatMoney');
const { Delete } = require('~/component/Icons');

function ProductModal({ data, actionDeleteCartItem, actionSetQuantityItem }) {
   return (
      <ProductItemModal>
         <Box sx={{ width: '70px', height: '70px', overflow: 'hidden' }}>
            <Image src={data.image} alt={data.name} />
         </Box>
         <ProductItemModalDetail>
            <h3 style={{ marginTop: '8px' }}>{data.name}</h3>
            <Stack sx={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
               <Box>
                  <span style={{ color: 'var(--color-red)', marginRight: '12px' }}>
                     {fomatMoney(data.price_sale || data.price)}
                  </span>
               </Box>

               <Box width={70}>
                  <TextField
                     type="number"
                     variant="outlined"
                     value={data.quantity}
                     size="small"
                     onChange={(e) => actionSetQuantityItem({ quantityVal: e.target.value, id: data.id })}
                  />
               </Box>

               <Box onClick={() => actionDeleteCartItem(data.id)}>
                  <Delete style={{ color: '#fff' }} />
               </Box>
            </Stack>
         </ProductItemModalDetail>
      </ProductItemModal>
   );
}

const ProductItemModal = styled(Box)({
   padding: '12px',
   display: 'flex',
   cursor: 'pointer',
   gap: '0 24px',
   backgroundColor: '#fff',
   borderRadius: '15px',
   width: '100%',
});

const Image = styled('img')({
   width: '100%',
   height: '100%',
   objectFit: 'cover',
});

const ProductItemModalDetail = styled('div')({
   flex: 1,
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',

   h3: {
      marginBottom: '12px',
      fontSize: '1rem',
      fontFamily: '"Roboto Slab",serif !important',
   },
});

export default ProductModal;
