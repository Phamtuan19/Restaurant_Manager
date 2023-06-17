import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';

export const createTheme = () => {
    const theme = createMuiTheme({
        ...palette,
        ...typography,
    });

    return responsiveFontSizes(theme);
};
