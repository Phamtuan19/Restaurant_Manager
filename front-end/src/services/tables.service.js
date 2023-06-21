import BaseService from '~/utils/BaseService';

const authEndpoint = {
   base: 'admin/',
   createTable: 'tables/create',
   adminTables: 'tables',
   tableStatus: 'tables/empty',
   modalMenuProducts: 'tables/menu/products',

   getTableClient: 'client/table',
   getInvoiceTable: 'orders/invoice/',
};

class TableService extends BaseService {
   constructor(params) {
      super(params);
      this.setRequest();
   }

   postTableCreate = async (data) => {
      return await this.request.post(authEndpoint.base + authEndpoint.createTable, data);
   };

   getAdminTables = async () => {
      return await this.request.get(authEndpoint.base + authEndpoint.adminTables);
   };

   getClientTables = async () => {
      return await this.request.get(authEndpoint.getTableClient);
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
