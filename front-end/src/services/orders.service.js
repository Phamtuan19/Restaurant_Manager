import BaseService from '~/utils/BaseService';

const authEndpoint = {
    base: 'admin/orders/',

    postOrderTable: 'apply/invoice/',
    postOrderMove: 'move',
};

class OrdersService extends BaseService {
    constructor(params) {
        super(params);
        this.setRequest();
    }

    postOrderAdmin = async (tableId, dataProduct) => {
        return await this.request.post(authEndpoint.base + authEndpoint.postOrderTable + tableId, dataProduct);
    };

    postOrderMove = async (data) => {
        return await this.request.post(authEndpoint.base + authEndpoint.postOrderMove, data);
    };
}

const ordersService = new OrdersService();

export default ordersService;
