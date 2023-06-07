const fomatMoney = (val = 0) => {
    return val.toLocaleString('vi', { style: 'currency', currency: 'VND' });
};

export default fomatMoney;
