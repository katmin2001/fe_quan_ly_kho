
import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import i18n from 'i18n/i18n';
const { Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label
    };
}
const items = [
    getItem(i18n.t("sidebar.menu"), 'menu', <PieChartOutlined />),
    getItem(i18n.t("sidebar.order"), 'order', <DesktopOutlined />),
    getItem(i18n.t("sidebar.userManagement"), 'user-management', <UserOutlined />, [
        getItem(i18n.t("sidebar.userList"), 'user-list'),
        getItem(i18n.t("sidebar.userDetail"), 'user-detail')
    ])
];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div
                style={{
                    height: 32,
                    margin: 16,
                    background: 'rgba(255, 255, 255, 0.2)',
                }}
            />
            <Menu
                theme="dark"
                selectedKeys={[location.pathname.split("/")[1]]}
                mode="inline"
                items={items}
                onSelect={(item) => { navigate("/" + item.key) }}
            />
        </Sider>
    )
}

export default Sidebar;