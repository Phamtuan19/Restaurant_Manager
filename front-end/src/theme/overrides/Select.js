const Select = () => {
   return {
      MuiSelect: {
         defaultProps: {
            size: 'small',
            MenuProps: {
               disableAutoFocusItem: true,
               PaperProps: {
                  elevation: 1,
                  square: true
               }
            }
         }
      }
   };
};
export default Select;
