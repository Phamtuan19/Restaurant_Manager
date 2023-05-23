import { Grid, styled } from '@mui/material';
import './Footer.css';
import { Link } from 'react-router-dom';

const useLink = [
    {
        name: 'Các chủ đề',
        path: '#',
    },
    {
        name: 'Chủ đề bổ sung',
        path: '#',
    },
    {
        name: 'Mẫu dành cho quản trị viên',
        path: '#',
    },
    {
        name: 'Mẫu trang website',
        path: '#',
    },
    {
        name: 'Ứng dụng Flutter',
        path: '#',
    },
];
const serviceLink = [
    {
        name: 'Tiền thưởng',
        path: '#',
    },
    {
        name: 'Hope UI',
        path: '#',
    },
    {
        name: 'Graphina',
        path: '#',
    },
    {
        name: 'Kinh doanh',
        path: '#',
    },
    {
        name: 'WordPress',
        path: '#',
    },
    {
        name: 'Phát triển ứng dụng dành cho điện thoại di động',
        path: '#',
    },
];
const contacts = [
    {
        name: 'Hỗ trợ kỹ thuật',
        path: '#',
    },
    {
        name: 'Nhận báo giá',
        path: '#',
    },
    {
        name: 'Liên hệ chúng tôi',
        path: '#',
    },
    {
        name: 'Chính sách hỗ trợ',
        path: '#',
    },
    {
        name: 'Giấy phép',
        path: '#',
    },
];
const company = [
    {
        name: 'Số Điện thoại: 0346027***',
        path: '#',
    },
    {
        name: 'Email: phamtuan19hd@gmail.com',
        path: '#',
    },
    {
        name: 'Địa chỉ: 26 Phú Kiều-Kiều Mai-Phúc Diễn-Từ Liêm-Hà Nội',
        path: '#',
    },
];

function Footer() {
    return (
        <footer
            className="footer_home spad"
            style={{ paddingLeft: '24px', marginTop: '2rem', backgroundColor: 'rgb(255 255 255/40%) !important' }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <div
                        className="footer__about footer__widget"
                        style={{ width: '100%', paddingLeft: '24px', borderRight: '1px solid #3331' }}
                    >
                        <FooterTitle>Sản phẩm</FooterTitle>
                        <ul style={{ width: '100%' }}>
                            {useLink.map((ele, index) => (
                                <li key={index}>
                                    <Link to={ele.path} className="text-decoration-none">
                                        {ele.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div
                        className="footer__widget"
                        style={{ width: '100%', paddingLeft: '24px', borderRight: '1px solid #3331' }}
                    >
                        <FooterTitle>Blog</FooterTitle>
                        <ul style={{ width: '100%' }}>
                            {serviceLink.map((ele, index) => (
                                <li key={index}>
                                    <Link to={ele.path} className="text-decoration-none">
                                        {ele.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div
                        className="footer__widget"
                        style={{ width: '100%', paddingLeft: '24px', borderRight: '1px solid #3331' }}
                    >
                        <FooterTitle>Hỗ trợ</FooterTitle>
                        <ul style={{ width: '100%' }}>
                            {contacts.map((ele, index) => (
                                <li key={index}>
                                    <Link to={ele.path} className="text-decoration-none">
                                        {ele.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div className="footer__widget" style={{ width: '100%', paddingLeft: '24px' }}>
                        <FooterTitle>Liên hệ</FooterTitle>
                        <ul style={{ width: '100%' }}>
                            {company.map((ele, index) => (
                                <li key={index}>
                                    <Link to={ele.path} className="text-decoration-none">
                                        {ele.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </footer>
    );
}

const FooterTitle = styled('h6')({
    fontSize: '1rem',
    fontFamily: '"Roboto Slab", serif',
});

export default Footer;
