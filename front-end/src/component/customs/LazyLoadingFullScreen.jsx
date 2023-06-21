import { Box, LinearProgress, Typography } from '@mui/material';

function LazyLoadingFullScreen() {
    return (
        <Box sx={{ width: '100vw', height: '100vh' }}>
            <Box
                sx={{ display: 'flex', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box sx={{ width: '400px' }}>
                    <Typography textAlign="center" marginBottom={1}>
                        Loading
                    </Typography>
                    <LinearProgress color="primary" />
                </Box>
            </Box>
        </Box>
    );
}

export default LazyLoadingFullScreen;
