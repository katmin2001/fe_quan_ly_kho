import { Button, Form, Input, Select } from "antd";
import { MaxString, MinString, Required } from "common/validate";
import { ROLE_OPTION } from "constant/constants";
import i18n from "i18n/i18n"
import { useEffect, useState } from "react";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const onFinish = (values) => {
    console.log("search1", values)
}

const onFinishFailed = () => {
    console.log("search")
}

const UserEdit = ({ userInfo }) => {
    const [userEditForm] = Form.useForm();
    useEffect(() => {
        if (userInfo) {
            userEditForm.setFieldsValue({
                username: userInfo.username,
                password: "chi co the thay doi",
                roles: userInfo.roles
            });
        }
    }, [userInfo])
    return (
        <Form
            form={userEditForm}
            className="w100"
            name="User edit form"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
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

            <Form.Item className="text-right">
                <Button type="primary" htmlType="submit">
                    {i18n.t("button.edit")}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default UserEdit;