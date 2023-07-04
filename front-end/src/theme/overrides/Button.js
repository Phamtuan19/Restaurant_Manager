const Button = () => {
   return {
      MuiButton: {
         defaultProps: {
            variant: 'contained',
            size: 'medium',
            disableElevation: true
         },
         styleOverrides: {
            root: {
               textTransform: 'none'
            }
         }
      }
   };
};

export default Button;
