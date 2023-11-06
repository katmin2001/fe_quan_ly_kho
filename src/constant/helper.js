// import Properties from '@/constants/properties';
import { GetAccessToken } from 'common/storage';

const configHeaderApi = (data = null) => {
    const accessToken = GetAccessToken() ? `Bearer ${GetAccessToken()}` : '';
    console.log(accessToken)
    let headers = {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-CmdId': '',
        'Accept-Language': 'ja',
        'Authorization': accessToken,
        'X-SentTime': '123456',
    };
    if (typeof (data) === 'number' || typeof (data) === 'string') {
        headers["Content-Type"] = "application/json";
    }
    return headers;
};


export {
    configHeaderApi
};