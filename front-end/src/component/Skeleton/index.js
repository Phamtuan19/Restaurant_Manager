import { Box, styled } from '@mui/material';

function Skeleton({ className = '' }) {
    return <WrapSkeleton sx={className}></WrapSkeleton>;
}

const WrapSkeleton = styled(Box)({
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--loading-grey)',
    background: 'var(--bg-skeleton)',
    backgroundSize: '200% 100%',
    backgroundPositionX: '180%',
    animation: '1s loading ease-in-out infinite',
});

export default Skeleton;
