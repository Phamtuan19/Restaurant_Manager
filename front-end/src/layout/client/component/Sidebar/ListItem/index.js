import SvgHome from '~/assets/imageSvg/SvgHome';
import { SidebarBody, LinkItem, ItemTitle } from './style';
import SvgMenu from '~/assets/imageSvg/SvgMenu';

const ListItemSidebar = [
    {
        path: '/',
        iconComponent: SvgHome,
        title: 'trang chủ',
    },
    {
        path: '/menu',
        iconComponent: SvgMenu,
        title: 'Thực đơn',
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
                        <IconComponent className="sidebarActive_Item_Icon" width="28px" fill="#07143b" />
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
