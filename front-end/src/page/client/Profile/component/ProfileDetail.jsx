import { Box, Typography } from '@mui/material';
import React from 'react';
import FieldItem from './FieldItem';

const ProfileDetail = ({ user }) => {
   return (
      <>
         <Box mt="40px">
            <Typography
               component="h2"
               variant="h5"
               sx={{
                  fontWeight: '400',
                  p: '12px 0 5px 12px',
                  mb: '20px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
               }}
            >
               Thông tin cá nhân
            </Typography>
         </Box>

         <FieldItem
            title="Họ tên"
            value={user.name}
            name="name"
            placeholder="Thêm tên của bạn"
            description="Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn."
            btnEdit={true}
         />
         <FieldItem
            title="Số điện thoại"
            value={user.phone}
            name="phone"
            placeholder="Thêm số điện thoạin"
            description="Số điện thoại liên lạc của bạn."
            btnEdit={true}
         />
         <FieldItem
            title="Email"
            value={user.email}
            name="email"
            placeholder="Eg. hoclaptrinh@f8.edu.vn"
            description="Email đăng nhập của bạn."
         />
      </>
   );
};

export default ProfileDetail;
