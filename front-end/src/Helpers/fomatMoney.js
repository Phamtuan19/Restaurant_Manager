const fomatMoney = (val = 0) => {
   const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
   });

   return formatter.format(Number(val));
};

export default fomatMoney;
