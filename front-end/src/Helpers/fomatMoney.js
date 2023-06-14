const fomatMoney = (val = 0) => {
    return val.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export default fomatMoney;
