import ContentAddProducts from './ContentAddProducts';

const { default: DefaultLayoutAdmin } = require('~/layout/admin/component/DefaultLayoutAdmin');

function AddProducts() {
    return (
        <DefaultLayoutAdmin>
            <ContentAddProducts />
        </DefaultLayoutAdmin>
    );
}

export default AddProducts;
