const fomatMoney = (val) => {
    return val.toLocaleString('vi', { style: 'currency', currency: 'VND' });
};

export default fomatMoney;
