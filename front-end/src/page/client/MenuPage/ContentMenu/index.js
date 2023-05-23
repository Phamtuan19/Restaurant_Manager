import { Grid } from '@mui/material';
import Categories from './Categorise';
import Content from './Content';

function ContentMenu() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={3}>
                <Categories />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
                <Content />
            </Grid>
        </Grid>
    );
}

export default ContentMenu;
