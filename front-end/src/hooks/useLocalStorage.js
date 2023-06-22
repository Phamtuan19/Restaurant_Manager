const useLocalStorage = () => {
    let LocalItem;

    const getLocalItem = (key) => {
        LocalItem = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : false;
        return LocalItem;
    };

    const setLocalItem = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const removeLocalItem = (key) => {
        localStorage.removeItem(key);
    };

    return { getLocalItem, setLocalItem, removeLocalItem };
};

export default useLocalStorage;
