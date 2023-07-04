import BaseService from '~/utils/BaseService';

const productEndpoint = {
   categories: 'admin/products/categories',
   menuProducts: 'client/menu/products',

   // admin
   create: 'admin/products/create',
   index: 'admin/products',

   // common
   homeProductCategories: 'home/product/categories',
   homeTrendingOrder: 'home/product/trending',

   menuCategories: 'menu/categories',
   menuProduct: 'menu/products',

   bookingProducts: 'menu/products',
};

class ProductSeviver extends BaseService {
   constructor(params) {
      super(params);
      this.setRequest();
   }

   // *************************************** API ADMIN ***************************************
   // Amdin Get Products
   index = async (page) => {
      return await this.request.get(productEndpoint.index + `?page=${page}`);
   };

   // Admin Create Product
   create = async (data) => {
      return this.request.post(productEndpoint.create, data);
   };

   // *************************************** API HOME PAGE ***************************************
   homeProductCategories = () => {
      return this.request.get(productEndpoint.homeProductCategories);
   };

   homeTrendingOrder = () => {
      return this.request.get(productEndpoint.homeTrendingOrder);
   };

   // *************************************** API MENU PAGE ***************************************
   menuCategories = () => {
      return this.request.get(productEndpoint.menuCategories);
   };

   menuProduct = (page, category, searchDebounce) => {
      if (category.length > 0) {
         return this.request.get(
            productEndpoint.menuProduct + `?page=${page}&categoryId=${category}&q=${searchDebounce}`,
         );
      }

      return this.request.get(productEndpoint.menuProduct + `?page=${page}&q=${searchDebounce}`);
   };

   // *************************************** API BOOKING PAGE ***************************************
   bookingProducts = (page, category, searchDebounce) => {
      if (Number(category) !== 0) {
         return this.request.get(
            productEndpoint.bookingProducts + `?page=${page}&categoryId=${category}&q=${searchDebounce}`,
         );
      }

      return this.request.get(productEndpoint.bookingProducts + `?page=${page}&q=${searchDebounce}`);
   };

   adminProductsCategories = async () => {
      return this.request.get(productEndpoint.categories);
   };

   // Admin get one
   adminGetProduct = async (id) => {
      return this.request.get(productEndpoint.list + '/' + id);
   };
   // Admin update
   adminPatchProduct = async (id) => {
      return this.request.patch(productEndpoint.list + '/' + id);
   };

   // Client
   getMenuProducts = async (search, categoryId, page) => {
      return this.request.get(
         productEndpoint.menuProducts + `?q=${encodeURIComponent(search)}&categoryId=${categoryId}&page=${page}`,
      );
   };
}

const productSeviver = new ProductSeviver();

export default productSeviver;
