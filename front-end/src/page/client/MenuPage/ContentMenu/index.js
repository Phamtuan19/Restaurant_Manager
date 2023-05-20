import { Grid } from '@mui/material';
import Categories from './Categorise';
import Content from './Content';
import ContentRight from './ContentRight';

function ContentMenu() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
                <Categories />
            </Grid>
            <Grid item xs={12} lg={6}>
                <Content />
            </Grid>
            <Grid item xs={12} lg={3}>
                <ContentRight />
            </Grid>
        </Grid>
    );
}

export default ContentMenu;
