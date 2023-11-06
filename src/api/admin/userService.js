import http from "common/http";
import {ADMIN} from "constant/api-path";

const AdminUserService = {
    create(request) {
        return http.POST(ADMIN.USER.CREATE, request, true, true);
    },
    edit(request) {
        return http.POST(ADMIN.USER.EDIT, request, false, true);
    },
    detail(request) {
        return http.GET(ADMIN.USER.DETAIL + `/${request}`, null, false, true);
    },
    search(request) {
        return http.POST(ADMIN.USER.SEARCH, request, false, true);
    }
}

export default AdminUserService;