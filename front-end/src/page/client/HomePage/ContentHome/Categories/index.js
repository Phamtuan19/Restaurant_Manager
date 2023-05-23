import { styled } from '@mui/material';
import { Button } from '~/component/client/Button';
import { Card } from '~/component/client/Card';
import { TitleViewAll } from '~/component/client/TitleViewAll';

const listCategories = [
    'Burgers',
    'Fizza',
    'Soup',
    'Dessert',
    'Dessert',
    'Biscuits',
    'cheese',
    'Tomato soup',
    'Chicken fingers',
    'Chicken ',
    'nuggets',
    'Flatbread pizza',
    'Mini pizzas',
    'Burgers',
    'Fizza',
    'Soup',
    'Dessert',
    'Dessert',
    'Biscuits',
    'cheese',
    'Tomato soup',
    'Chicken fingers',
    'Chicken ',
    'nuggets',
    'Flatbread pizza',
    'Mini pizzas',
];

function Categories() {
    return (
        <Card>
            <TitleViewAll
                title="Categories"
                sx={{ padding: '1.5rem 0', borderBottom: '1px solid #e3e1e1', margin: '0 1.5rem' }}
            />
            <WrapContent>
                {listCategories.map((item, index) => (
                    <Button key={index} styleProps={{ ...styleButton }}>{item}</Button>
                ))}
            </WrapContent>
        </Card>
    );
}

const WrapContent = styled('div')({
    padding: '1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
});

const styleButton = {
    backgroundColor: 'var(--whithe)',
    color: '#ea6a12',
    borderColor: '#ea6a12',
    overflow: 'hidden !important',
    position: 'relative',
    zIndex: 2,

    '&:hover': {
        backgroundColor: 'transparent',
        color: '#fff !important',

        ':after': {
            clipPath: 'circle(100%)',
            transition: 'clip-path .5s ease,-webkit-clip-path .5s ease',
        },
    },

    '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: '#ea6a12',
        webkitClipPath: 'circle(0 at 50% 50%)',
        clipPath: 'circle(0 at 50% 50%)',
        zIndex: -1,
    },
};

export default Categories;
