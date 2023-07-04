import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';

export const createTheme = () => {
    const theme = createMuiTheme({
        ...palette,
        ...typography,
    });
    theme.components = overrides(theme);

    return responsiveFontSizes(theme);
};
