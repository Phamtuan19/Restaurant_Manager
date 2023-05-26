import { DefaultLayout } from '~/layout/client/DefaultLayout';
import ContentCart from './ContentCart';
import { Box } from '@mui/material';

function CartPage() {
    return (
        <DefaultLayout>
            <ContentCart />
        </DefaultLayout>
    );
}

export default CartPage;
