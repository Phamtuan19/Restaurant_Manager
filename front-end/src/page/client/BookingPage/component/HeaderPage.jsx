import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

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

const HeaderPage = () => {
    return (
        <Stack sx={style}>
            <Typography component="h3" fontSize="1.6rem">
                Danh sách bàn
            </Typography>
            <Stack sx={styleContent}>
                {listNote.map((item, index) => {
                    return (
                        <Stack
                            key={index}
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
};

const style = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '1rem 1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid #fff',
    borderRadius: '1.5rem',
    gap: '12px 32px',
};

const styleContent = {
    gap: '12px 32px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
};

const styleStatusTable = {
    width: '20px',
    height: '20px',
    borderRadius: '4px',
    marginRight: '12px',
};

export default HeaderPage;
