
import { Home, Menu, ShoppingCart } from '~/component/Icons';
import { ItemTitle, LinkItem, SidebarBody } from './styleComponent';

const ListItemSidebar = [
    {
        path: '/',
        iconComponent: Home,
        title: 'trang chủ',
    },
    {
        path: '/menu',
        iconComponent: Menu,
        title: 'Thực đơn',
    },
    {
        path: '/shopping-cart',
        iconComponent: ShoppingCart,
        title: 'Giỏ hàng',
    },
];

function ListItem({ sidebarActive }) {
    return (
        <SidebarBody sx={{ padding: `${sidebarActive ? '24px' : '24px 8px'}` }}>
            {ListItemSidebar.map((item, index) => {
                const IconComponent = item.iconComponent;

                return (
                    <LinkItem
                        key={index}
                        to={item.path}
                        style={{
                            justifyContent: `${sidebarActive ? 'space-evenly' : 'center'}`,
                            flexDirection: 'row',
                            alignItems: 'center',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <IconComponent className="sidebarActive_Item_Icon"  fill="#07143b" />
                        <ItemTitle
                            className="sidebarActive_Item_Title"
                            style={{
                                display: `${sidebarActive ? 'block' : 'none'}`,
                            }}
                        >
                            {item.title}
                        </ItemTitle>
                    </LinkItem>
                );
            })}
        </SidebarBody>
    );
}

export default ListItem;
