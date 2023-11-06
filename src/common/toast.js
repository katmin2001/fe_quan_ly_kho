import { notification } from 'antd';
import { HTTP_CODE } from "constant/constants";

const Toast = (baseResponse) => {
  let type = 'default';
  switch (baseResponse.code) {
    case HTTP_CODE.SUCCESS:
      type = 'success';
      break;
    case HTTP_CODE.BAD_REQUEST:
      type = 'error';
      break;
    case HTTP_CODE.NOT_POUND:
      type = 'warning';
      break;
    default:
      type = 'info';
  }

  notification[type]({
    message: type,
    description: baseResponse?.message,
  });
};

export default Toast;
