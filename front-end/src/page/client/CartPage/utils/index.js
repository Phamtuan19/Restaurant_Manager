export const listInput = [
   {
      name: 'name',
      label: 'Tên của bạn',
      type: 'text',
      xs: 12,
      sm: 6,
   },
   {
      name: 'phone',
      label: 'Số điện thoại',
      type: 'text',
      xs: 12,
      sm: 6,
   },
];

const splitProvinces = (value, key) => {
   const result = value.split(key);
   return result;
};
