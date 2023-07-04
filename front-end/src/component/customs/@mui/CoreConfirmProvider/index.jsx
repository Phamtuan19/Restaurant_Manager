/* eslint-disable react-hooks/exhaustive-deps */
import { LoadingButton } from '@mui/lab';
import React, { createContext, useCallback, useContext, useState } from 'react';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { styled } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Paper, Typography } from '@mui/material';

const ConfirmContext = createContext();

export const useConfirm = () => {
   const confirm = useContext(ConfirmContext);
   return confirm;
};

const CoreConfirmProvider = (props) => {
   const [configs, setConfigs] = useState({});
   const [open, setOpen] = useState(false);
   const [loading, setLoading] = useState(false);

   const confirm = useCallback(
      (configs) => {
         setConfigs(configs);
         setOpen(true);
      },
      [configs],
   );

   const hanldeOk = async () => {
      setLoading(true);
      try {
         setOpen(false);
         await configs?.onOk();
      } catch (error) {}
      setLoading(false);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <ConfirmContext.Provider value={confirm}>
         {props.children}
         <Dialog open={open} PaperComponent={StyledPaper} keepMounted onClose={handleClose} maxWidth="sm">
            {configs?.title && (
               <DialogTitle
                  className="text-center"
                  variant="h4"
                  sx={{ '& .MuiTypography-root ': { fontSize: '19px', fontWeight: '600' } }}
               >
                  {configs?.title}
               </DialogTitle>
            )}
            {configs?.content && (
               <DialogContent sx={{ fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                  {configs?.isIcon && (configs?.icon ?? <DeleteForeverRoundedIcon fontSize="large" color="error" />)}
                  <Typography>{configs?.content}</Typography>
               </DialogContent>
            )}
            <Divider sx={{ margin: '10px' }} />
            <DialogActions>
               <Button size="small" variant="outlined" color="primary" className="text-gray-400" onClick={handleClose}>
                  Đóng
               </Button>
               {configs.btnLoading ? (
                  <LoadingButton
                     variant="contained"
                     loading={loading}
                     className="text-white"
                     color={configs?.color ?? 'primary'}
                     onClick={hanldeOk}
                     size="small"
                  >
                     {configs?.okText ?? 'Xoá'}
                  </LoadingButton>
               ) : (
                  ''
               )}
            </DialogActions>
         </Dialog>
      </ConfirmContext.Provider>
   );
};
const StyledPaper = styled(Paper)`
   padding: 10px;
   min-width: 25rem;
   max-width: 100%;
`;
export default CoreConfirmProvider;
