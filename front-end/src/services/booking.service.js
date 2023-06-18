import BaseService from '~/utils/BaseService';

const bookingEndpoint = {
    base: 'client/',
    booking: 'booking/create',
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
}

const bookingService = new BookingService();

export default bookingService;
