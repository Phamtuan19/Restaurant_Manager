import {
    Checkbox,
    Collapse,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Skeleton,
    Stack,
    styled,
} from '@mui/material';
import { useContext, useState } from 'react';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';

const listProductCategories = [
    {
        id: 1,
        title: 'Starters',
    },
    {
        id: 2,
        title: 'Main Course',
    },
    {
        id: 3,
        title: 'Soups',
    },
    {
        id: 4,
        title: 'Juices',
    },
    {
        id: 5,
        title: 'Chinese',
    },
    {
        id: 6,
        title: 'Pizza',
    },
    {
        id: 7,
        title: 'Deserts',
    },
];

function ProductCategory({ open, categoriesValue, setCategoriesValue }) {
    const [checked, setChecked] = useState([]);

    const { skeleton } = useContext(SkeletonLoading);

    const handleClick = (id, title) => {
        const currenIndex = checked.includes(id);
        const currenValue = categoriesValue.includes(title);
        if (!currenIndex && !currenValue) {
            setChecked((prev) => [...prev, id]);
            setCategoriesValue((prev) => [...prev, title]);
        } else {
            setChecked((prev) => prev.filter((item) => item !== id));
            setCategoriesValue((prev) => prev.filter((item) => item !== title));
        }
    };

    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            {listProductCategories.map((item) => {
                const labelId = `${item.title}-${item.id}`;

                return (
                    <ListItem
                        key={item.id}
                        secondaryAction={
                            skeleton ? (
                                <Skeleton variant="text" width={50} height={30} />
                            ) : (
                                <TotalCategoryItem>11</TotalCategoryItem>
                            )
                        }
                        disablePadding
                    >
                        {skeleton ? (
                            <Stack sx={{ flexDirection: 'row', gap: '0 12px' }}>
                                <Skeleton variant="text" width={30} height={30} />
                                <Skeleton variant="text" width={150} height={30} />
                            </Stack>
                        ) : (
                            <>
                                <ListItemButton role={undefined} onClick={() => handleClick(item.id, item.title)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(item.id) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`${item.title}`} />
                                </ListItemButton>
                            </>
                        )}
                    </ListItem>
                );
            })}
        </Collapse>
    );
}
const TotalCategoryItem = styled('span')({
    padding: '.5em 1.5em',
    lineHeight: 1.5,
    borderRadius: '50rem',
    backgroundColor: 'rgb(234,106,18)',
    color: 'var(--white)',
    fontSize: '.75em',
    fontWeight: 700,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    cursor: 'pointer',
});
export default ProductCategory;
