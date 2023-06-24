import axios from 'axios';

const baseUrlProvince = 'https://provinces.open-api.vn/api/';

class ProviceService {
   getDistricts = async () => {
      const response = await axios.get(baseUrlProvince + 'p/1?depth=2');
      return response.data.districts;
   };

   getWards = async (e) => {
      try {
         const response = await axios.get(`${baseUrlProvince}d/${e}?depth=2`);
         return response.data.wards;
      } catch (error) {
         console.log(error);
      }
   };
}

const proviceService = new ProviceService();

export default proviceService;
