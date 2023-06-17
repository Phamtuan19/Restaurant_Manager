import BaseService from '~/utils/BaseService';

export const homePageEndpoint = {
    base: 'client/',
    menuCategories: 'menu/categories',
};

class HomePageService extends BaseService {
    constructor(params) {
        super(params);
        this.setRequest();
    }

    getMenuCategories = () => {
        return this.request.get(this.BASE_ENDPOINT + homePageEndpoint.base + homePageEndpoint.menuCategories);
    };
}

const homePageService = new HomePageService();

export default homePageService;
