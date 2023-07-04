import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller } from 'react-hook-form';

const ControllerCheckbox = (props) => {
   const { control, name, onChangeSelect, ...rest } = props;
   return (
      <Controller
         render={({ field, fieldState: { error } }) => (
            <FormControl error={Boolean(error)}>
               <FormControlLabel
                  {...rest}
                  {...field}
                  onChange={(event) => {
                     const checked = event.target.checked;
                     field.onChange(checked);
                     if (onChangeSelect) {
                        onChangeSelect(checked);
                     }
                  }}
                  control={<Checkbox id={name} checked={field.value} />}
               />
               {error?.message && <FormHelperText variant='standard'>{error.message}</FormHelperText>}
            </FormControl>
         )}
         name={name}
         control={control}
      />
   );
};

export default ControllerCheckbox;
