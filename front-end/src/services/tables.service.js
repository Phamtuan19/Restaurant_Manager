import BaseService from '~/utils/BaseService';

const authEndpoint = {
   base: 'admin/',
   create: 'admin/tables/create',
   adminTables: 'tables',
   tableStatus: 'tables/empty',
   modalMenuProducts: 'tables/menu/products',

   tableList: 'booking/tables',
   getInvoiceTable: 'orders/invoice/',
};

class TableService extends BaseService {
   constructor(params) {
      super(params);
      this.setRequest();
   }

   // *************************************** API ADMIN ***************************************

   create = async (data) => {
      return await this.request.post(authEndpoint.create, data);
   };

   // *************************************** API COMMON ***************************************

   tableList = async () => {
      return await this.request.get(authEndpoint.tableList);
   };

   getAdminTables = async () => {
      return await this.request.get(authEndpoint.base + authEndpoint.adminTables);
   };



 

   getAdminTableStatus = async (status = 1, tableId) => {
      return await this.request.get(
         authEndpoint.base + authEndpoint.tableStatus + `?status=${status}&tableId=${tableId}`,
      );
   };

   getInvoiceTable = async (tableId) => {
      return await this.request.get(authEndpoint.base + authEndpoint.getInvoiceTable + tableId);
   };

   // Modal table Menu
   getTableModalMenuProducts = async () => {
      return await this.request.get(authEndpoint.base + authEndpoint.modalMenuProducts);
   };
}

const tableService = new TableService();

export default tableService;
