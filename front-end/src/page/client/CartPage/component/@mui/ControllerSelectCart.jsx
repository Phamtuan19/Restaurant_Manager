import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
// mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

/**
 *
 * @param {*} props
 * @interface Props {label: string, options: string[]}
 */

const ControllerSelectCart = (props) => {
   const { label, options, value } = props;
   const { control, isShowMessageError = true, name, placeholder, disabled, ...rest } = props;
   return (
      <Controller
         render={({ field, fieldState: { error } }) => (
            <FormControl fullWidth>
               <InputLabel size="small" id="demo-simple-select-label">
                  {label}
               </InputLabel>
               <Select
                  id={name}
                  fullWidth
                  error={Boolean(error)}
                  placeholder={disabled ? void 0 : placeholder}
                  disabled={disabled}
                  {...field}
                  {...rest}
                  labelId="demo-simple-select-label"
                  label={label}
                  value={value || ''}
               >
                  {options?.map((item, index) => (
                     <MenuItem key={index} value={item.code}>
                        {item.name}
                     </MenuItem>
                  ))}
               </Select>
               {isShowMessageError && error?.message && (
                  <FormHelperText sx={{ color: '#d32f2f' }} variant="outlined">
                     {error.message}
                  </FormHelperText>
               )}
            </FormControl>
         )}
         name={name}
         control={control}
      />
   );
};
ControllerSelectCart.propTypes = {
   options: PropTypes.array.isRequired,
   label: PropTypes.string,
};

export const PropTypeSelect = PropTypes.arrayOf(
   PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
   }),
).isRequired;
export default ControllerSelectCart;
