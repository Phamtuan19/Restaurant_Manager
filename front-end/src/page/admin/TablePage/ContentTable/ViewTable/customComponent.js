export const { styled } = require('@mui/material');

export const Wrap = styled('div')({
    marginLeft: 'calc(var(--width-navbar-table-page) - 1rem)',
    paddingLeft: '1rem',
    minWidth: 'calc(100% - calc(var(--width-navbar-table-page) - 1rem))',
    overflow: 'hidden',
});

export const YellowNotes = styled('div')({
    width: '20px',
    height: '20px',
    backgroundColor: '#FFBF00',
    borderRadius: '4px',
    marginRight: '12px',
});
export const RedNotes = styled('div')({
    width: '20px',
    height: '20px',
    backgroundColor: 'var(--color-red)',
    borderRadius: '4px',
    marginRight: '12px',
});
export const BlurNotes = styled('div')({
    width: '20px',
    height: '20px',
    backgroundColor: 'var(--color-blur)',
    borderRadius: '4px',
    marginRight: '12px',
});


