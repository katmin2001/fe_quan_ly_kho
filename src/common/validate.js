import "./prototype";
import i18n from "i18n/i18n";

const Required = async (_, v) => {
    if (!v) {
        throw new Error(i18n.t("validate.required").format(i18n.t(_.field)))
    }
}

const MaxString = async (_, v, max) => {
    if (!!v && v.length > max) {
        throw new Error(i18n.t("validate.maxString").format(_.field, max))
    }
}

const MinString = async (_, v, min) => {
    if (!!v && v.length < min) {
        throw new Error(i18n.t("validate.minString").format(_.field, min))
    }
}

const IsPasswordMatch = async (_, v, pass) => {
    if (!!v && v !== pass) {
        throw new Error(i18n.t("validate.passwordNotMatch"))
    }
}

export {
    Required, MaxString, MinString, IsPasswordMatch
}