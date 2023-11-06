import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Switch } from "antd";
import AdminUserService from "api/admin/userService";
import { MaxString, MinString, Required } from "common/validate";
import { HTTP_CODE, ROLE_OPTION } from "constant/constants";
import i18n from "i18n/i18n";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const onFinishFailed = () => {
    console.log("search")
}

const UserCreate = ({refreshData}) => {
    const onFinish = (values) => {
        // console.log("search", values);
        AdminUserService.create(values).then((res) => {
            // console.log("ADMIN create user", res);
            if (res.code === HTTP_CODE.SUCCESS) {
                const data = res.data;
                refreshData();
                // console.log(data);
            }
        });
    }
    return (
        <Form
            className="w100"
            name="User create form"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{
                username: "",
                password: "",
                roles: ["USER_ROLE"],
                status: true
            }}
        >
            <Form.Item
                label={i18n.t("userManagement.username")}
                name="username"
                max={10}
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
                label={i18n.t("userManagement.password")}
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
                label={i18n.t("userManagement.roles")}
                name="roles"
                required
            >
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    onChange={handleChange}
                    options={ROLE_OPTION}
                />
            </Form.Item>

            <Form.Item
                label={i18n.t("userManagement.status")}
                name="status"
                required
            >
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked={true}
                />
            </Form.Item>

            <Form.Item className="text-right">
                <Button type="primary" htmlType="submit">
                    {i18n.t("button.create")}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default UserCreate;