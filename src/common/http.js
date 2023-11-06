import Library from "axios";
import Properties from "constant/properties";
import { ClearAuthenticationStorage } from "common/storage";
import Toast from "common/toast";
import { configHeaderApi } from "constant/helper"

let http = Library.create({
  baseURL: Properties.SERVER_LINK
});
http.defaults.timeout = 3600000;

const GET = (url, params, toast = false, loading = false) => {
  openLoading(loading);
  return new Promise((resolve, rejected) => {
    http.get(
      url,
      {
        headers: configHeaderApi(),
        params: { ...params }
      })
      .then(rawResponse => {
        handlerToast(toast, rawResponse);
        resolve(rawResponse.data);
      })
      .catch(error => {
        checkError(error);
        rejected(error);
      })
      .finally(() => {
        closeLoading(loading);
      })
  });
};

const POST = (url, data, toast = false, loading = false, cancelToken=null) => {
  openLoading(loading);
  return new Promise((resolve, rejected) => {
    http.post(url, data, {
      headers: configHeaderApi(data)
    })
      .then(rawResponse => {
        handlerToast(toast, rawResponse);
        resolve(rawResponse.data);
      })
      .catch(error => {
        checkError(error);
        rejected(error);
      })
      .finally(() => {
        closeLoading(loading);
      })
  });
};

const PUT = (url, data, toast = false, loading = false) => {
  openLoading(loading);
  return new Promise((resolve, rejected) => {
    http.put(url, data, {
      headers: configHeaderApi()
    })
      .then(rawResponse => {
        handlerToast(toast, rawResponse);
        resolve(rawResponse.data);
      })
      .catch(error => {
        checkError(error);
        rejected(error);
      })
      .finally(() => {
        closeLoading(loading);
      })
  });
};

const DELETE = (url, data, toast = false, loading = false) => {
  openLoading(loading);
  return new Promise((resolve, rejected) => {
    http.delete(url, {
      headers: configHeaderApi(),
      data: data
    })
      .then(rawResponse => {
        handlerToast(toast, rawResponse);
        resolve(rawResponse.data);
      })
      .catch(error => {
        checkError(error);
        rejected(error);
      })
      .finally(() => {
        closeLoading(loading);
      })
  });
};

const checkError = (error) => {
  if (error.message.includes('401')) {
    ClearAuthenticationStorage();
    window.location.href = '/login';
  }
  if (error.message.includes('403')) {
    window.location.href = '#/403'
  }
};

const openLoading = (show) => {
  if (!show) {
    return;
  }
  document.getElementById("loading-global").style.display = 'grid';
};

const closeLoading = (show) => {
  if (!show) {
    return;
  }
  document.getElementById("loading-global").style.display = 'none';
};

const handlerToast = (show, baseResponse) => {
  if (!show) {
    return;
  }
  Toast(baseResponse.data);
};

const Http = {
  GET,
  POST,
  PUT,
  DELETE
}

export default Http;
