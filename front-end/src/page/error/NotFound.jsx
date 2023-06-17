import { Box, Button, Typography } from '@mui/material';
import { Grid } from 'swiper';

function NotFound() {
    return (
        <Grid
            container
            sx={{ height: '100vh', padding: '30px', justifyContent: 'center', alignItems: 'center' }}
            spacing={2}
        >
            <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '55px', alignItems: 'left' }}>
                    <Typography variant="body1" sx={{ color: 'blue' }}>
                        404 Error
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 2 }}>
                        Không tìm thấy trang
                    </Typography>
                    <Typography variant="body2" sx={{ width: '100%', color: '#0f6da0', mt: 2, opacity: 0.7 }}>
                        Xin lỗi, trang bạn đang tìm kiếm không tồn tại. Đây là liên kết hữu ích nhất:
                    </Typography>
                    <Button variant="contained" color="primary" href="/" sx={{ width: '200px', height: '40px', mt: 2 }}>
                        Quay về trang chủ
                        {/* <HomeIcon sx={{ marginLeft: '4px', fontSize: 20 }} /> */}
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1683527482~exp=1683528082~hmac=5395486bf364f8b0fe2d500741267ee619b6b28d78fb3318099ed8005966ebd8"
                        alt=""
                        width="100%"
                        height="auto"
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default NotFound;
