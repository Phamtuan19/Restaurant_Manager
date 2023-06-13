import { Box, Button, MenuItem, Select, Stack } from '@mui/material';
import { useState } from 'react';
import ModalAddTable from './ModalAddTable';

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

function Header() {
    const [openModal, SetOpenModal] = useState(false);
    const [floor, setFloor] = useState(1);

    const handleOpen = () => {
        SetOpenModal(true);
    };
    const handleClose = () => {
        SetOpenModal(false);
    };

    return (
        <Stack>
            <Stack
                sx={{
                    marginBottom: '2rem',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ fontSize: '1.6rem' }}>Danh sách bàn</Box>

                <Box sx={{ display: 'flex', width: 250, gap: '0 12px' }}>
                    <Select
                        sx={{ flex: 1 }}
                        fullWidth
                        id="floor"
                        size="small"
                        width="100px"
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                    >
                        <MenuItem value="1" defaultChecked>
                            Tầng 1
                        </MenuItem>
                        <MenuItem value="2">Tầng 2</MenuItem>
                        <MenuItem value="3">Tầng 3</MenuItem>
                        <MenuItem value="4">Tầng 4</MenuItem>
                    </Select>

                    <Button variant="contained" onClick={handleOpen}>
                        Thêm bàn
                    </Button>
                </Box>
            </Stack>
            <Stack sx={{ gap: '0 32px', flexDirection: 'row', alignItems: 'center' }}>
                {listNote.map((item, index) => {
                    return (
                        <Stack key={index} sx={styleStatusTable}>
                            <Box sx={{ ...styleBoxStatus, backgroundColor: item.color }}></Box>
                            {item.title}
                        </Stack>
                    );
                })}
            </Stack>

            <ModalAddTable open={openModal} handleClose={handleClose} />
        </Stack>
    );
}

const styleStatusTable = {
    flexDirection: 'row',
    alignItems: 'center',
    textTransform: 'capitalize',
    fontSize: '14px',
};
const styleBoxStatus = {
    width: '20px',
    height: '20px',
    borderRadius: '4px',
    marginRight: '12px',
};

export default Header;
