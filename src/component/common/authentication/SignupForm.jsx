import { Button, Form, Input } from "antd";
import { IsPasswordMatch, MaxString, MinString, Required } from "common/validate";
import i18n from "i18n/i18n"

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const SignupForm = () => {
    return (
        <Form
            name="Signup form"
            layout={"vertical"}
            style={{
                maxWidth: "500px",
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label={i18n.t("signupPage.username")}
                name="username"
                required
                rules={[
                    { validator: Required },
                    { validator: (_, v) => MinString(_, v, 8) },
                    { validator: (_, v) => MaxString(_, v, 50) }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={i18n.t("signupPage.email")}
                name="email"
                required
                rules={[
                    { validator: Required },
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={i18n.t("signupPage.password")}
                name="password"
                required
                rules={[
                    { validator: Required },
                    { validator: (_, v) => MinString(_, v, 8) },
                    { validator: (_, v) => MaxString(_, v, 50) }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label={i18n.t("signupPage.rePassword")}
                name="rePassword"
                required
                rules={[
                    { validator: Required },
                    { validator: (_, v) => MinString(_, v, 8) },
                    { validator: (_, v) => MaxString(_, v, 50) },
                    ({ getFieldValue }) => ({ validator: (_, value) => IsPasswordMatch(_, value, getFieldValue('password')) }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item className="text-center">
                <Button type="primary" htmlType="submit">
                    {i18n.t("button.submit")}
                </Button>
            </Form.Item>
        </Form >
    )
};

export default SignupForm;