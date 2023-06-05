import BaseService from '~/utils/BaseService';

const authEndpoint = {
    create: 'admin/products/create',
    list: 'admin/products',
    categories: 'admin/products/categories',
};

class ProductSeviver extends BaseService {
    constructor(params) {
        super(params);
        this.setRequest();
    }

    adminProducts = async () => {
        return this.request.get(authEndpoint.list);
    };

    adminProductsCreate = async (data) => {
        return this.request.post(authEndpoint.create, data);
    };

    adminProductsCategories = async () => {
        return this.request.post(authEndpoint.categories);
    };
}

const productSeviver = new ProductSeviver();

export default productSeviver;
