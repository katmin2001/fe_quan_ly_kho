import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import CustomBreadcumb from '../common/common/breadcrumb/Breadcrumb';
import CustomFooter from './common/footer/Footer';
import CustomHeader from './common/header/Header';
import Sidebar from './common/sidebar/Sidebar';
const { Content } = Layout;

const SubAdminSite = () => {
  const { token: { colorBgContainer }, } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className="site-layout">
        <CustomHeader />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <CustomBreadcumb />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
            Bill is a cat.
          </div>
        </Content>
        <CustomFooter />
      </Layout>
    </Layout>
  );
};

export default SubAdminSite;