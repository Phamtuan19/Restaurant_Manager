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

    // Amdin Get Products
    adminProducts = async () => {
        return await this.request.get(authEndpoint.list);
    };

    // Admin Create Product
    adminProductsCreate = async (data) => {
        return this.request.post(authEndpoint.create, data);
    };

    adminProductsCategories = async () => {
        return this.request.get(authEndpoint.categories);
    };

    // Admin get one
    adminGetProduct = async (id) => {
        return this.request.get(authEndpoint.list + '/' + id);
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
