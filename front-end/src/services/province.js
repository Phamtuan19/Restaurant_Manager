import instance from '~/utils/Axios';

const baseUrlProvince = 'https://provinces.open-api.vn/api/';

export default function province() {
    const getDistricts = async () => {
        const response = await instance.get(baseUrlProvince + 'p/1?depth=2');
        return response.districts;
    };

    const getWards = async (e) => {
        try {
            const response = await instance(`${baseUrlProvince}d/${e}?depth=2`);
            return response.wards;
        } catch (error) {
            console.log(error);
        }
    };

    return { getDistricts, getWards };
}
