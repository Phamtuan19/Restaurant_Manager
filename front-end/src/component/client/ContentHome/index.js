import { Grid, styled } from '@mui/material';
import Banner from './Banner';
import SwiperItem from './SwiperItem';

function ContentHome() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={8}>
                <Banner />
                <div className="">
                    <WrapCategory className="card-header">
                        <h3>Menu category</h3>
                    </WrapCategory>
                    <SwiperItem />
                </div>
            </Grid>
            <Grid item md={4} lg={4}>
                side
            </Grid>
        </Grid>
    );
}

const WrapCategory = styled('div')({
    h3: {
        fontSize: 'calc(1.2978rem + .5736vw)',
        fontFamily: "'Playfair Display', serif",
    },
});

export default ContentHome;
