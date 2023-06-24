import BaseService from '~/utils/BaseService';

const authEndpoint = {
   base: 'admin/orders/',

   getMenuProducts: 'order/menu/products',
   getMenuCategories: 'order/menu/categories',

   postOrderTable: 'apply/invoice/',
   postOrderMove: 'move',
   postOrderPay: 'pay/',

   orderOnline: 'client/order-online',
};

class OrdersService extends BaseService {
   constructor(params) {
      super(params);
      this.setRequest();
   }

   getMenuOrderCategories = async () => {
      return await this.request.get(authEndpoint.base + authEndpoint.getMenuCategories);
   };

   getMenuOrderProducts = async (query) => {
      return await this.request.get(authEndpoint.base + authEndpoint.getMenuProducts + `?category=${query}`);
   };

   postOrderCategoriesAdmin = async (tableId, dataProduct) => {
      return await this.request.post(authEndpoint.base + authEndpoint.postOrderTable + tableId, dataProduct);
   };

   postOrderMove = async (data) => {
      return await this.request.post(authEndpoint.base + authEndpoint.postOrderMove, data);
   };

   postOrderPay = async (tableId) => {
      return await this.request.post(authEndpoint.base + authEndpoint.postOrderPay + tableId);
   };

   postOrderAdmin = async (tableId, dataProduct) => {
      return await this.request.post(authEndpoint.base + authEndpoint.postOrderTable + tableId, dataProduct);
   };

   postOrderOnline = async (dataOrder) => {
      return await this.request.post(authEndpoint.orderOnline, dataOrder);
   };
}

const ordersService = new OrdersService();

export default ordersService;
