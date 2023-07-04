const OutlinedInput = (theme) => {
   return {
      MuiOutlinedInput: {
         styleOverrides: {
            root: {},
            input: {
               '&.Mui-disabled': {
                  color: theme.palette.text.primary,
                  // backgroundColor: theme.palette.education.background.disableField,
                  WebkitTextFillColor: theme.palette.text.primary,
                  userSelect: 'revert',
               },
            },
         },
      },
   };
};

export default OutlinedInput;
