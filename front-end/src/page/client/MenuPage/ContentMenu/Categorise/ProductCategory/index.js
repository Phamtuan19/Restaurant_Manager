import { Checkbox, Collapse, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import { useState } from 'react';
import { v4 } from 'uuid';

function ProductCategory({ open, categoriesValue, setCategoriesValue, categoryList }) {
    const [checked, setChecked] = useState([]);

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
            {(categoryList || []).map((item) => {
                const labelId = `${item.title}-${item.id}`;

                return (
                    <ListItem
                        key={v4()}
                        secondaryAction={<TotalCategoryItem>{item.products_count}</TotalCategoryItem>}
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={() => handleClick(item.id, item.name)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(item.id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${item.name}`} />
                        </ListItemButton>
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
    backgroundColor: 'var(--color-default)',
    color: 'var(--white)',
    fontSize: '.75em',
    fontWeight: 700,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    cursor: 'pointer',
});
export default ProductCategory;
