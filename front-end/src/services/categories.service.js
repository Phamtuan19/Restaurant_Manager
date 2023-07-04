import BaseService from '~/utils/BaseService';

const categoriesEndpoint = {
   base: 'admin/categories/',
   create: 'create',
   adminList: '',
   type: 'type',

   bookingCategories: 'booking/categories',
};

class CategoriesService extends BaseService {
   BASE_ENDPOINT = categoriesEndpoint.base;

   constructor(params) {
      super(params);
      this.setRequest();
   }

   // *************************************** API ADMIN ***************************************
   create = async (data) => {
      return this.request.post(this.BASE_ENDPOINT + categoriesEndpoint.create, data);
   };

   // *************************************** API BOOKING ***************************************
   bookingCategories = () => {
      return this.request.get(categoriesEndpoint.bookingCategories);
   };

   adminList = async () => {
      return this.request.get(this.BASE_ENDPOINT + categoriesEndpoint.adminList);
   };

   adminCategories = async (page = null) => {
      return this.request.post(categoriesEndpoint.list + `?page=${page}`);
   };

   adminCategoriesType = async () => {
      return this.request.get(categoriesEndpoint.type);
   };
}

const categoriesService = new CategoriesService();

export default categoriesService;
