import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '~/utils/firebase';
import setToastMessage from '~/Helpers/toastMessage';

const firebaseUploadImage = async (data) => {
    if (data) {
        try {
            const imageUpload = data.target.files[0];
            const storageRef = ref(storage, `files/${imageUpload.name}` + v4());

            const snapshot = await uploadBytes(storageRef, imageUpload);
            const image = await getDownloadURL(snapshot.ref);
            return image;
        } catch (error) {
            setToastMessage('Đã có lỗi xảy ra!', 'error');
            console.log(error);
        }
    } else {
        setToastMessage('Đã có lỗi xảy ra!', 'error');
    }
};

export default firebaseUploadImage;
