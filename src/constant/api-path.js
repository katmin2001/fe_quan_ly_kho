const USER = {
    LAYOUT: {
        CREATE: "/api/layout/create",
        EDIT: "/api/layout/edit/{0}",
        SEARCH: "/api/layout/search",
        DETAIL: "/api/layout/detail/{0}",
        DELETE: "/api/layout/delete",
    }
}

const COMMON = {
    AUTH: {
        LOGIN: "/api/auth/login",
        SIGNUP: "/api/auth/signup",
    }
}

const ADMIN = {
    USER: {
        CREATE: "/api/admin/user/add",
        EDIT: "/api/admin/user/edit",
        SEARCH: "/api/admin/user/search",
        DETAIL: "/api/admin/user/detail",
    },
    DEPARTMENT: {
        CREATE: "/api/admin/department/create",
        EDIT: "/api/admin/department/edit",
        SEARCH: "/api/admin/department/search",
        DETAIL: "/api/admin/department/detail",
        DELETE: "/api/admin/department/delete",
    }
}

export {
    USER, COMMON, ADMIN
}