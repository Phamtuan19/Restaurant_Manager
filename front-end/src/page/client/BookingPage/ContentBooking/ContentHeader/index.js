import { Box, Stack, styled } from '@mui/material';
import { v4 } from 'uuid';

const listNote = [
    {
        title: 'Bàn trống',
        color: 'var(--color-blur)',
    },
    {
        title: 'Bàn đã đặt',
        color: '#FFBF00',
    },
    {
        title: 'Bàn đang sử dụng',
        color: 'var(--color-red)',
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
                    return (
                        <Stack
                            key={v4()}
                            sx={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                textTransform: 'capitalize',
                                fontSize: '14px',
                            }}
                        >
                            <Box sx={{ ...styleStatusTable, backgroundColor: item.color }}></Box>
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

const styleStatusTable = {
    width: '20px',
    height: '20px',
    borderRadius: '4px',
    marginRight: '12px',
};

export default ContentHeader;
