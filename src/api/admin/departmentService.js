import http from "common/http";
import {ADMIN} from "constant/api-path";

const AdminDepartmentService = {
    create(request) {
        return http.POST(ADMIN.DEPARTMENT.CREATE, request, true, true);
    },
    edit(request) {
        return http.POST(ADMIN.DEPARTMENT.EDIT, request, false, true);
    },
    detail(id) {
        return http.GET(ADMIN.DEPARTMENT.DETAIL + `/${id}`, null, false, true);
    },
    delete(id) {
        return http.GET(ADMIN.DEPARTMENT.DELETE + `/${id}`, null, false, true);
    },
    search(request) {
        return http.POST(ADMIN.DEPARTMENT.SEARCH, request, false, true);
    },
}

export default AdminDepartmentService;