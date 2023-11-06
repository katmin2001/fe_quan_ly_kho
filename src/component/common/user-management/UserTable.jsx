import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Space, Switch, Table, Tag } from "antd";

import i18n from "i18n/i18n";
import { useState } from "react";

const StatusRender = ({ status }) => {
    const [checked, setChecked] = useState(status === 1 ? true : false);
    return (
        <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={checked}
            onChange={(checked) => { console.log(checked); setChecked(checked) }}
        />
    )
}

const ActionRender = ({ record, changeEditMode }) => {
    return (
        <Space size="middle">
            <Button onClick={() => changeEditMode(record)}>{i18n.t("button.detail")}</Button>
            <Button>{i18n.t("button.delete")}</Button>
        </Space>
    );
}

const UserTable = (props) => {
    const { changeEditMode, userList } = props
    const columns = [
        {
            title: i18n.t("userManagement.username"),
            dataIndex: 'username',
            width: "20%",
            textWrap: 'word-break',
            ellipsis: true,
            key: 'username',
            render: (text) => <a href="/#">{text}</a>,
        },
        {
            title: i18n.t("userManagement.roles"),
            key: 'roles',
            dataIndex: 'roles',
            textWrap: 'word-break',
            ellipsis: false,
            render: (_, { roles }) => (roles.map((role) => {
                let color;
                switch (role) {
                    case "ADMIN_ROLE":
                        color = 'purple';
                        break;
                    case "SUB_ADMIN_ROLE":
                        color = 'red';
                        break;
                    case "CUSTOMER_ROLE":
                        color = 'green';
                        break;
                    case "USER_ROLE":
                        color = 'grey';
                        break;
                    default:
                        color = 'volcano';
                        break;
                }
                return (
                    <Tag color={color} key={role}>
                        {role}
                    </Tag>
                );
            })),
        },
        {
            title: i18n.t("userManagement.status"),
            key: 'tags',
            width: "80px",
            dataIndex: 'tags',
            textWrap: 'word-break',
            ellipsis: false,
            render: (_, { status }) => (<StatusRender status={status} />),
        },
        {
            title: i18n.t("userManagement.action"),
            key: 'action',
            width: "20%",
            textWrap: 'word-break',
            ellipsis: false,
            render: (_, record) => (<ActionRender record={record} changeEditMode={changeEditMode} />),
        },
    ];
    return (
        <Table columns={columns} dataSource={userList} scroll={{ y: 555 }} />
    );
}

export default UserTable;