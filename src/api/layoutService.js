import http from "common/http";
import "common/prototype";
import { USER } from "constant/api-path";

const LayoutService = {
    create(request) {
        return http.POST(USER.LAYOUT.CREATE, request, true, true);
    },
    edit(request) {
        return http.POST(USER.LAYOUT.EDIT, request, false, true);
    },
    detail(id) {
        return http.GET(USER.LAYOUT.DETAIL.format(id), null, false, true);
    },
    delete(id) {
        return http.GET(USER.LAYOUT.DELETE.format(id), null, false, true);
    },
    search(request) {
        return http.POST(USER.LAYOUT.SEARCH, request, false, true);
    },
}

export default LayoutService;