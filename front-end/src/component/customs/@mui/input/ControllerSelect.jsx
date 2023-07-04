import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
// mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material';

/**
 *
 * @param {*} props
 * @interface Props {label: string, options: string[]}
 */

const ControllerSelect = (props) => {
   const { label, options, valuepath, titlepath } = props;
   const { control, isShowMessageError = true, name, placeholder, disabled, ...rest } = props;
   return (
      <Controller
         render={({ field, fieldState: { error } }) => (
            <FormControl fullWidth>
               <InputLabel size="small" id="demo-simple-select-label">
                  {label}
               </InputLabel>
               <Select
                  type="select"
                  id={name}
                  fullWidth
                  error={Boolean(error)}
                  placeholder={disabled ? void 0 : placeholder}
                  disabled={disabled}
                  labelId="demo-simple-select-label"
                  {...field}
                  {...rest}
               >
                  {options.map((item, index) => (
                     <MenuItem key={index} value={item[valuepath]}>
                        {item[titlepath]}
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
         defaultValue=""
         name={name}
         control={control}
      />
   );
};

ControllerSelect.propTypes = {
   options: PropTypes.array.isRequired,
   label: PropTypes.string,
   valuepath: PropTypes.string.isRequired,
   titlepath: PropTypes.string.isRequired,
};

export const PropTypeSelect = PropTypes.arrayOf(
   PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
   }),
).isRequired;
export default ControllerSelect;
