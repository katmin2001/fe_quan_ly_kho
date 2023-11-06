import http from "common/http";
import {COMMON} from "constant/api-path";

const AuthenService = {
    login (request) {
        return http.POST(COMMON.AUTH.LOGIN, request, false, true);
    },
    // signup (request) {
    //     return http.POST(COMMON.AUTH.SIGNUP, request, false, true);
    // }
}

export default AuthenService;