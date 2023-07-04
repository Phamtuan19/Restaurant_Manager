import PropTypes from 'prop-types';
import MuiFormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
const FormGroup = (props) => {
   const { hidden, children, fullWidth, ...rest } = props;
   if (hidden) {
      return null;
   }
   return (
      <Wrapper fullWidth={fullWidth} {...rest}>
         {children}
      </Wrapper>
   );
};

const Wrapper = styled(MuiFormGroup, {
   shouldForwardProp: (prop) => !['fullWidth'].includes(prop)
})(({ fullWidth }) => ({
   '& + &': {
      marginTop: 16
   },
   ...(fullWidth && {
      width: '100%'
   })
}));

FormGroup.propTypes = {
   children: PropTypes.node.isRequired,
   fullWidth: PropTypes.bool,
   hidden: PropTypes.bool
};
export default FormGroup;
