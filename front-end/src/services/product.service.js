import BaseService from '~/utils/BaseService';

const authEndpoint = {
    create: 'admin/products/create',
    list: 'admin/products',
    categories: 'admin/products/categories',
    menuProducts: 'client/menu/products',
    menuFilter: 'client/menu/filter',
};

class ProductSeviver extends BaseService {
    constructor(params) {
        super(params);
        this.setRequest();
    }

    // Amdin
    adminProducts = async () => {
        return await this.request.get(authEndpoint.list);
    };

    adminProductsCreate = async (data) => {
        return this.request.post(authEndpoint.create, data);
    };

    adminProductsCategories = async () => {
        return this.request.get(authEndpoint.categories);
    };

    // Client
    getMenuProducts = async (page) => {
        return this.request.get(authEndpoint.menuProducts + `?page=${page}`);
    };
    getMenuFilter = async () => {
        return this.request.get(authEndpoint.menuFilter);
    };
}

const productSeviver = new ProductSeviver();

export default productSeviver;
