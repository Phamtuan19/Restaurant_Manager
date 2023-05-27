export const addCart = (data) => {
    return {
        type: 'cart/add-cart',
        payload: data,
    };
};
export const setQuantityCartItem = (data) => {
    return {
        type: 'cart/cart-quantity-item',
        payload: data,
    };
};

export const deleteCartItem = (data) => {
    return {
        type: 'cart/cart-delete-item',
        payload: data,
    };
};
