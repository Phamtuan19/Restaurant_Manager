import BaseService from '~/utils/BaseService';

const authEndpoint = {
    create: 'admin/categories/create',
    list: 'admin/categories',
};

class CategoriesService extends BaseService {
    constructor(params) {
        super(params);
        this.setRequest();
    }

    adminCategoriesCreate = async (data) => {
        return this.request.post(authEndpoint.create, data);
    };

    adminCategories = async (page) => {
        return this.request.post(authEndpoint.list + `?page=${page}`);
    };
}

const categoriesService = new CategoriesService();

export default categoriesService;
