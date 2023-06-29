import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export const CoreTableActionDelete = () => {
   const handleDelete = () => {};

   return (
      <Tooltip title="Xoá">
         <IconButton color="error" onClick={handleDelete}>
            <DeleteIcon />
         </IconButton>
      </Tooltip>
   );
};

export const CoreTableActionEdit = ({ callback = () => {} }) => {
   return (
      <Tooltip title="Sửa">
         <IconButton color="success" onClick={callback}>
            <RateReviewRoundedIcon />
         </IconButton>
      </Tooltip>
   );
};

export const CoreTableActionView = ({ callback = () => {} }) => {
   return (
      <Tooltip title="Xem chi tiết">
         <IconButton color="success" onClick={callback}>
            <RemoveRedEyeIcon />
         </IconButton>
      </Tooltip>
   );
};
