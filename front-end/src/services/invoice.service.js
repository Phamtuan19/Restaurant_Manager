import BaseService from '~/utils/BaseService';

const invoiceEndpoint = {
   cartCreate: 'cart/create/invoice',
};

class InvoiceService extends BaseService {
   constructor(params) {
      super(params);
      this.setRequest();
   }

   cartCreate = async (data) => {
      return this.request.post(invoiceEndpoint.cartCreate, data);
   };
}

const invoiceService = new InvoiceService();

export default invoiceService;
