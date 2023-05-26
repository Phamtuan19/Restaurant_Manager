import { Grid } from '@mui/material';
import Cart from './Cart';
import Delivery from './Delivery';
import PaymentInfo from './Cart/PaymentInfo';

function ContentCart() {
    return (
        <Grid container spacing={2}>
            {/* <Grid item xs={12} md={7} lg={3}>
            </Grid> */}
            <Grid item xs={12} md={7} lg={8}>
                <Cart />
            </Grid>

            <Grid item xs={12} md={5} lg={4}>
                <Delivery />
                <PaymentInfo />
            </Grid>
        </Grid>
    );
}

export default ContentCart;
