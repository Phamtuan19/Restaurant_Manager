import { Box, styled } from '@mui/material';
import InputCustom from '~/component/admin/InputCustom';
import ViewTable from './ViewTable';

function ContentTable() {
    return (
        <Box>
            <WrapContentTable>
                <Box sx={{ padding: '12px 1rem', borderBottom: '0.5px solid #e3e1e1' }}>
                    <InputCustom
                        sx={{ width: '100%', lineHeight: '24px', paddingLeft: '24px' }}
                        placeholder="Tìm kiếm bàn ..."
                    />
                </Box>
            </WrapContentTable>
            <ViewTable />
        </Box>
    );
}

const WrapContentTable = styled('div')({
    position: 'fixed',
    top: 'calc(var(--height-header-admin))',
    left: 'calc(var(--width-sidebar-admin) + 3px)',
    bottom: 0,
    width: 'var(--width-navbar-table-page)',
    backgroundColor: 'var(--white)',
    boxShadow: 'var(--box-shadow-fa)',
    borderTop: '0.5px solid #e3e1e1',
});

// const WrapInput = styled('div')({
//     padding: '12px 1rem',
//     borderBottom: '0.5px solid #e3e1e1',
// });

export default ContentTable;
