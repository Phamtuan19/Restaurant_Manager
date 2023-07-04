import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
/**
 * @param {*} props
 * @interface  Props<T> extends Omit<TextFieldProps, 'name'> {name: FieldPath<T>control: Control<T>};
 * @returns Form controller JSX element
 */

const ControllerTextField = (props) => {
   const { control, name, defaultValue, type, placeholder, disabled, sx, ...rest } = props;
   return (
      <Controller
         render={({ field, fieldState: { error } }) => (
            <TextField
               id={name}
               fullWidth
               error={Boolean(error)}
               helperText={error?.message && error.message}
               placeholder={disabled ? void 0 : placeholder}
               disabled={disabled}
               {...field}
               {...rest}
            />
         )}
         defaultValue={defaultValue || ''}
         name={name}
         control={control}
      />
   );
};

ControllerTextField.propTypes = {
   control: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   placeholder: PropTypes.string,
   disabled: PropTypes.bool,
};
export default ControllerTextField;
