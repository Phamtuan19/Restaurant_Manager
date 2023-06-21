import { useSetNotifyState } from '@App/redux/slices/toastMessage.slice';
import { Alert, Snackbar } from '@mui/material';
import { useSelector } from 'react-redux';

const ToastMessage = () => {
   const messageState = useSelector((state) => state.toastMessage.messageState);
   const { setToastInformation } = useSetNotifyState();
   const closeToast = (_event, reason) => {
      if (reason === 'clickaway') {
         return;
      }
      setToastInformation({
         message: null
      });
   };
   return (
      <>
         {messageState?.message && Object.keys(messageState).length > 0 ? (
            <Snackbar
               anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
               open={Object.keys(messageState).length > 0}
               autoHideDuration={3000}
               onClose={closeToast}>
               <Alert onClose={closeToast} severity={messageState.status} sx={{ width: '100%' }}>
                  {messageState.message}
               </Alert>
            </Snackbar>
         ) : (
            <></>
         )}
      </>
   );
};

export default ToastMessage;
