import { Button, Form, Input, Select } from "antd";
import { MaxString, MinString, Required } from "common/validate";
import { ROLE_OPTION } from "constant/constants";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const onFinish = (values) => {
    console.log("search", values)
}

const onFinishFailed = () => {
    console.log("search")
}

const StoreCreate = () => {
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
                roles: [4]
            }}
        >
            <Form.Item
                label="Username"
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
                label="Password"
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
                label="Role"
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

            <Form.Item className="text-right">
                <Button type="primary" htmlType="submit">
                    Create
                </Button>
            </Form.Item>
        </Form>
    )
}

export default StoreCreate;