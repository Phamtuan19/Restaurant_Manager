import fomatMoney from './fomatMoney';

export default function totalPrice(array = [], initial = 0) {
    if (array.length > 0) {
        const price = array.reduce((accumulator, currentValue) => {
            console.log(currentValue);
            return accumulator + currentValue.price * currentValue.quantity;
        }, initial);
        return fomatMoney(price);
    }

    return fomatMoney(0);
}
