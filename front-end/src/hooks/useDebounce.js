import { useEffect, useRef, useState } from 'react';

function useDebounce(value, delay) {
   const [debounceValue, setDebounceValue] = useState('');
   const timer = useRef(null);
   useEffect(() => {
      timer.current = setTimeout(() => {
         setDebounceValue(value);
      }, delay);
      return () => clearTimeout(timer.current);
   }, [value, delay]);
   return debounceValue;
}

export default useDebounce;
