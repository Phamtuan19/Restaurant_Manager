import fomatMoney from './fomatMoney';

export default function totalPrice(array = [], initial = 0) {
    const price = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
    }, initial);

    return fomatMoney(price);
}
