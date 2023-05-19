import axios from 'axios';

const baseUrlProvince = 'https://provinces.open-api.vn/api/';

export const districts = async () => {
    try {
        const response = await axios(`${baseUrlProvince}p/1?depth=2`);
        return response.data.districts;
    } catch (error) {
        console.log(error);
    }
};

export const wards = async (e) => {
    try {
        const response = await axios(`${baseUrlProvince}d/${e}?depth=2`);
        console.log(response.data);
        return response.data.wards;
    } catch (error) {
        console.log(error);
    }
};
