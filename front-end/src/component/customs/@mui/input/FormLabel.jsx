import MuiFormLabel, { formLabelClasses } from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const FormLabel = (props) => {
   const { title, name, required, gutterBottom, noWrap, TypographyProps, sx, ...rest } = props;

   return (
      <MuiFormLabel
         sx={{
            display: 'block',
            mb: gutterBottom ? '0.35em' : 0,
            [`& .${formLabelClasses.asterisk}`]: {
               color: 'error.light',
            },
            ...(noWrap && {
               whiteSpace: 'nowrap',
            }),
            ...sx,
         }}
         htmlFor={name}
         required={required}
         {...rest}
      >
         <Typography component="span" variant="body2" sx={{ fontWeight: '500' }} {...TypographyProps}>
            {title}
         </Typography>
      </MuiFormLabel>
   );
};

FormLabel.propTypes = {
   title: PropTypes.string,
   name: PropTypes.string,
   gutterBottom: PropTypes.bool,
   noWrap: PropTypes.bool,
   required: PropTypes.bool,
   TypographyProps: PropTypes.object,
};
export default FormLabel;
