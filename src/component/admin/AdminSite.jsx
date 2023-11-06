import { Layout, theme } from 'antd';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, } from 'react-router-dom';
import CustomBreadcumb from '../common/common/breadcrumb/Breadcrumb';
import CustomFooter from './common/footer/Footer';
import CustomHeader from './common/header/Header';
import Sidebar from './common/sidebar/Sidebar';
const { Content } = Layout;

const AdminSite = () => {
  const { token: { colorBgContainer }, } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("AdminSiteEffect");
    if (location.pathname === "/admin") {
      navigate("/admin/home")
    }
  }, [location, navigate])

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
          </div>
        </Content>
        <CustomFooter />
      </Layout>
    </Layout>
  );
};

export default AdminSite;