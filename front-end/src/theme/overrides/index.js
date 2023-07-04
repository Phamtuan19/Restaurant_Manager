import Button from './Button';
import InputLabel from './InputLabel';
import Select from './Select';
import TextField from './TextField';
import OutlinedInput from './OutlinedInput';
import TableCell from './TableCell';
const overrides = (theme) =>
   Object.assign(
      {},
      TextField(theme),
      Button(theme),
      Select(theme),
      InputLabel(theme),
      OutlinedInput(theme),
      TableCell(theme)
   );

export default overrides;
