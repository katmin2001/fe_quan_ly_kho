import { Button, Form, Input } from "antd";
import { Required, MaxString, MinString } from "common/validate";
import AuthenService from "api/common/authenService";
import { useNavigate } from "react-router-dom";
import { HTTP_CODE } from "constant/constants";
import { SetAccessToken, SetRefreshToken } from "common/storage";
import i18n from "i18n/i18n"

const LoginForm = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log(values)
        AuthenService.login(values).then((res) => {
            if (res.code === HTTP_CODE.SUCCESS) {
                const data = res.data;
                SetAccessToken(data.accessToken);
                SetRefreshToken(data.refreshToken);
                navigate("/admin");
            }
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
        name="Login form"
        layout={"vertical"}
        style={{
            maxWidth: "500px",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label={i18n.t("loginPage.username")}
            name="username"
            max={10}
            required
        >
            <Input />
        </Form.Item>

        <Form.Item
            label={i18n.t("loginPage.password")}
            name="password"
            required
        >
            <Input.Password />
        </Form.Item>

        <Form.Item className="text-center">
            <Button type="primary" htmlType="submit">
                {i18n.t("button.submit")}
            </Button>
        </Form.Item>
    </Form>
    )
}

export default LoginForm;