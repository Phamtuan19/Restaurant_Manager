import BaseService from '~/utils/BaseService';

const authEndpoint = {
    base: 'admin/',
    createTable: 'tables/create',
    adminTables: 'tables',
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
}

const tableService = new TableService();

export default tableService;
