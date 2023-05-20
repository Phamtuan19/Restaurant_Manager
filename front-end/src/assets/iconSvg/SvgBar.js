import { styled } from '@mui/material';

function SvgBar({ width = '1.6rem', height = '1.6rem', fill = 'none', sxIcon, sx }) {
    return (
        <Wrap sx={sx}>
            <svg
                style={sxIcon}
                width={width}
                height={height}
                xmlns="http://www.w3.org/2000/svg"
                fill="#adb5bd"
                viewBox="0 0 24 24"
            >
                <path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
            </svg>
        </Wrap>
    );
}

const Wrap = styled('div')({
    marginLeft: '12px',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #e9ecef',
    borderRadius: '5px',
    cursor: 'pointer',

    '&:hover': {
        border: '1px solid #adb5bd',
    },
});

export default SvgBar;
