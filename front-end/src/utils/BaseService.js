const { default: createInstance } = require('./Axios');

class BaseService {
    BASE_URL = process.env.REACT_APP_BASE_URL_API;

    BASE_ENDPOINT = '';

    constructor(props) {
        this.setRequest();
    }

    setRequest() {
        this.request = createInstance(this.BASE_URL, this.middleware);
    }
}

export default BaseService;
