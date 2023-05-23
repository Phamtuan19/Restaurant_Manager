import { Box, Stack, styled } from '@mui/material';
import { BlurNotes, RedNotes, Wrap, YellowNotes } from './customComponent';
import TableItem from './TableItem';

const listTable = [
    {
        id: 1,
        title: '1 - T1',
    },
    {
        id: 2,
        title: '2 - T1',
    },
    {
        id: 3,
        title: '3 - T1',
    },
    {
        id: 4,
        title: '4 - T1',
    },
    {
        id: 5,
        title: '5 - T1',
    },
    {
        id: 6,
        title: '6 - T1',
    },
    {
        id: 7,
        title: '7 - T1',
    },
    {
        id: 8,
        title: '8 - T1',
    },
    {
        id: 9,
        title: '9 - T1',
    },
    {
        id: 10,
        title: '10 - T1',
    },
    {
        id: 11,
        title: '11 - T1',
    },
    {
        id: 12,
        title: '12 - T1',
    },
    {
        id: 13,
        title: '13 - T1',
    },
    {
        id: 14,
        title: '14 - T1',
    },
    {
        id: 15,
        title: '15 - T1',
    },
    {
        id: 16,
        title: '16 - T1',
    },
    {
        id: 17,
        title: '17 - T1',
    },
    {
        id: 18,
        title: '18 - T1',
    },
    {
        id: 19,
        title: '19 - T1',
    },
    {
        id: 20,
        title: '20 - T1',
    },
];

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

function ViewTable() {
    return (
        <Wrap>
            <NoteComponent />

            <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                <Box
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        backgroundColor: 'var(--white)',
                        borderRadius: '10px',
                        padding: '1.5rem 0',
                        gap: '12px 11px',
                    }}
                >
                    {listTable.map((item) => {
                        return <TableItem key={item.id} title={item.title} />;
                    })}
                </Box>
            </Stack>
        </Wrap>
    );
}

const NoteComponent = () => {
    return (
        <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <HeaderTitle>Danh sách sản phẩm</HeaderTitle>
            <Stack sx={{ gap: '0 32px', flexDirection: 'row', alignItems: 'center' }}>
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
};

const HeaderTitle = styled('h3')({
    fontSize: '1.6rem',
    fontFamily: '"Roboto Slab",serif',
    color: 'var(--black)',
});

export default ViewTable;
