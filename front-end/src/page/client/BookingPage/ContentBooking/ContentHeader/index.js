import { Stack, styled } from '@mui/material';
import { BlurNotes, RedNotes, YellowNotes } from '~/page/admin/TablePage/ContentTable/ViewTable/customComponent';

const listNote = [
    {
        component: BlurNotes,
        title: 'Bàn trống',
    },
    {
        component: YellowNotes,
        title: 'Bàn đã đặt',
    },
    {
        component: RedNotes,
        title: 'Bàn đang sử dụng',
    },
];

function ContentHeader() {
    return (
        <Stack
            sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                padding: '1rem 1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: '1px solid #fff',
                borderRadius: '1.5rem',
                gap: '12px 32px',
            }}
        >
            <HeaderTitle>Danh sách bàn</HeaderTitle>
            <Stack sx={{ gap: '12px 32px', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                {listNote.map((item, index) => {
                    const Component = item.component;

                    return (
                        <Stack
                            key={index}
                            sx={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                color: '#959895',
                                textTransform: 'capitalize',
                                fontSize: '14px',
                            }}
                        >
                            <Component />
                            {item.title}
                        </Stack>
                    );
                })}
            </Stack>
        </Stack>
    );
}

const HeaderTitle = styled('h3')({
    fontSize: '1.6rem',
    fontFamily: '"Roboto Slab",serif',
    color: 'var(--black)',
});

export default ContentHeader;
