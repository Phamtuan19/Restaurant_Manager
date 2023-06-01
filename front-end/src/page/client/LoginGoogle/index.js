import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function LoginGoogle() {
    const [userInfo, setUserInfo] = useState([]);
    const location = useLocation();

    console.log(userInfo);
    useEffect(() => {
        const resultGoogleCallbackApi = async () => {
            try {
                const response = await axios( process.env.REACT_APP_BASE_URL + 'auth/google/callback' + location.search);
                setUserInfo(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        resultGoogleCallbackApi();
    }, []);

    return (
        <div>
            <details>
                <p>Here is your info: </p>
            </details>
        </div>
    );
}

export default LoginGoogle;
