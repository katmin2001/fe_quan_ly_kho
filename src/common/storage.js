import { ITEM_STORAGE } from "constant/constants";

const GetLang = () => {
    return localStorage.getItem(ITEM_STORAGE.LANG) || null;
}
const SetLang = (value) => {
    localStorage.setItem(ITEM_STORAGE.LANG, value);
}
const ClearAuthenticationStorage = () => {
    localStorage.removeItem(ITEM_STORAGE.ACCESS_TOKEN);
    localStorage.removeItem(ITEM_STORAGE.REFRESH_TOKEN);
}
const GetAccessToken = () => {
    return localStorage.getItem(ITEM_STORAGE.ACCESS_TOKEN) || null;
}
const SetAccessToken = (value) => {
    localStorage.setItem(ITEM_STORAGE.ACCESS_TOKEN, value);
}
const GetRefreshToken = () => {
    return localStorage.getItem(ITEM_STORAGE.REFRESH_TOKEN) || null;
}
const SetRefreshToken = (value) => {
    localStorage.setItem(ITEM_STORAGE.REFRESH_TOKEN, value);
}
const SetDepartmentId = (value) => {
    localStorage.setItem(ITEM_STORAGE.DEPARTMENT_ID, value);
}

const GetDepartmentId = () => {
    return localStorage.getItem(ITEM_STORAGE.DEPARTMENT_ID) || null;
}

export {
    GetLang, 
    SetLang, 
    ClearAuthenticationStorage, 
    GetAccessToken,
    SetAccessToken,
    GetRefreshToken,
    SetRefreshToken,
    SetDepartmentId,
    GetDepartmentId
}