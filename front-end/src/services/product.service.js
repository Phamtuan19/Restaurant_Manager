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
   // Admin update
   adminPatchProduct = async (id) => {
      return this.request.patch(authEndpoint.list + '/' + id);
   };

   // Client
   getMenuProducts = async (search, categoryId, page) => {
      if (!Array.isArray(categoryId) && categoryId.length > 0) {
         categoryId = [categoryId];
      }

      return this.request.get(
         authEndpoint.menuProducts + `?q=${encodeURIComponent(search)}&categoryId=${[categoryId]}&page=${page}`,
      );
   };
   getMenuFilter = async () => {
      return this.request.get(authEndpoint.menuFilter);
   };
}

const productSeviver = new ProductSeviver();

export default productSeviver;
