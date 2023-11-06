const ITEM_STORAGE = {
    LANG: 'lang',
    ACCESS_TOKEN: "accessToken",
    REFRESH_TOKEN: "refreshToken",
    DEPARTMENT_ID: "departmentId"
}

const LANGUAGE_OPTION = {
    ENGLISH: 'en',
    VIETNAM: 'vi',
    JAPAN: 'ja'
}

const BREADCRUMB_LANG = {
    "home": "breadcrumb.home",
    "admin": "breadcrumb.admin",
    "menu": "breadcrumb.menu",
    "order": "breadcrumb.order",
    "user-management": "breadcrumb.userManagement",
    "store-management": "breadcrumb.storeManagement",
}

const ROLE_OPTION = [
    { label: "ADMIN_ROLE", value: "ADMIN_ROLE" },
    { label: "SUB_ADMIN_ROLE", value: "SUB_ADMIN_ROLE" },
    { label: "CUSTOMER_ROLE", value: "CUSTOMER_ROLE" },
    { label: "USER_ROLE", value: "USER_ROLE" },
]

const STATUS_OPTION = [
    { label: "ACTIVE", value: 1 },
    { label: "INACTIVE", value: 2 }
]

const STATUS_ENUM = {
    ACTIVE: 1,
    INACTIVE: 2,
    DELETE: 3,
}

const BLOCK_TYPE_OPTION = [
    { label: "Text Only", value: 0 },
    { label: "AYCHO", value: 1 },
    { label: "File", value: 2 },
    { label: "Table Schedule", value: 3 },
    { label: "O'Clock", value: 4 },
    { label: "Whether Table", value: 5 },
]

const HTTP_CODE = {
    SUCCESS: 'API_200',
    BAD_REQUEST: "API_304",
    NOT_POUND: "API_404",
}

const CREATE_EDIT_TAB = {
    CREATE: 'Create',
    EDIT: 'Edit'
}

export {
    ITEM_STORAGE,
    LANGUAGE_OPTION,
    BREADCRUMB_LANG,
    ROLE_OPTION,
    HTTP_CODE,
    CREATE_EDIT_TAB,
    BLOCK_TYPE_OPTION,
    STATUS_OPTION,
    STATUS_ENUM
}