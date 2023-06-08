import BaseService from '~/utils/BaseService';

const authEndpoint = {
    base: 'admin/',
    createTable: 'tables/create',
    adminTables: 'tables',
    tableStatus: 'tables/empty',
    modalMenuProducts: 'tables/menu/products',
    tableOrder: 'orders/apply',
    productsOrder: 'orders/products',
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

    getAdminTableStatus = async (status = 1) => {
        return await this.request.get(authEndpoint.base + authEndpoint.tableStatus + `?status=${status}`);
    };

    getTableInvoice = async () => {
        console.log('call api order');
    };

    // Modal table Menu
    getTableModalMenuProducts = async () => {
        return await this.request.get(authEndpoint.base + authEndpoint.modalMenuProducts);
    };
}

const tableService = new TableService();

export default tableService;
