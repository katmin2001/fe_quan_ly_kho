import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import i18n from 'i18n/i18n';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const { Sider } = Layout;
function getItem(label, disabled, key, icon, children) {
  return {
    key,
    disabled,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(i18n.t('sidebar.home'), false, 'admin/home', <PieChartOutlined />),
  getItem(i18n.t('sidebar.departmentManagement'), false, 'admin/department-management', <PieChartOutlined />),
  getItem(i18n.t('sidebar.layoutManagement'), false,'admin/layout-management', <PieChartOutlined />),
  getItem(i18n.t('sidebar.storeManagement'), false,'admin/store-management', <PieChartOutlined />),
  getItem(i18n.t('sidebar.userManagement'), false,'admin/user-management', <UserOutlined />),
  getItem(i18n.t('sidebar.roleManagement'), false,'admin/role-management', <UserOutlined />),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
      <div
        style={{
          height: 32,
          margin: 16,
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      />
      <Menu
        theme="dark"
        selectedKeys={['admin/' + location.pathname.split('/')[2]]}
        mode="inline"
        items={items}
        onSelect={item => {
          navigate('/' + item.key);
        }}
      />
    </Sider>
  );
};

export default Sidebar;
