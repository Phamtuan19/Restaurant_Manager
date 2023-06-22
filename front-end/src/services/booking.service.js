import BaseService from '~/utils/BaseService';

const bookingEndpoint = {
   base: 'client/booking/',
   booking: 'create',
   menu: 'menu',
};

class BookingService extends BaseService {
   BASE_ENDPOINT = bookingEndpoint.base;

   constructor(params) {
      super(params);
      this.setRequest();
   }

   postCreateBooking = async (data) => {
      return this.request.post(this.BASE_ENDPOINT + bookingEndpoint.booking, data);
   };

   getMenuBooking = async (search, categoryId, page) => {
      return this.request.get(
         this.BASE_ENDPOINT + bookingEndpoint.menu + `?q=${search}&categoryId=${categoryId}&page=${page}`,
      );
   };
}

const bookingService = new BookingService();

export default bookingService;
