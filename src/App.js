import { ConfigProvider } from 'antd';
import AdminSite from 'component/admin/AdminSite';
import LayoutCreate from 'component/common/layout-management/LayoutCreate';
import LayoutComponent from 'component/common/layout-component/LayoutComponent';
import SubAdminSite from 'component/subadmin/SubAdminSite';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DepartmentManagement from 'view/admin/department-management/DepartmentManagement';
import LayoutManagement from 'view/admin/layout-management/LayoutManagement';
import RoleManagement from 'view/admin/role-management/RoleManagement';
import UserManagement from 'view/admin/user-management/UserManagement';
import AuthenticationPage from 'view/common/authentication/AuthenticationPage';
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import './App.css';

function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<SubAdminSite />}>
            <Route path='/menu' element={<div>menu</div>} />
            <Route path='/order' element={<div>order</div>} />
            <Route path='/user-list' element={<div>user-list</div>} />
            <Route path='/user-detail' element={<div>user-detail</div>} />
          </Route>
          <Route path={"/admin"} element={<AdminSite />}>
            <Route path='/admin/home' element={<div>admin home</div>} />
            <Route path='/admin/layout-management' element={<LayoutManagement />} />
            <Route path='/admin/department-management' element={<DepartmentManagement />} />
            <Route path='/admin/role-management' element={<RoleManagement />} />
            <Route path='/admin/user-management' element={<UserManagement />} />
          </Route>
          <Route path='/admin/layout-create' element={<LayoutCreate />
          }
          />
          {/* <Route path='/admin/layout-create' element={<LayoutComponent
            className='layout'
            rowHeight={30}
            items={4}
            onLayoutChange={function () { }}
            cols={12}
          />
          }
          /> */}
          <Route path='/view/department/:departmentName' element={<LayoutComponent
            className='layout'
            rowHeight={30}
            items={4}
            onLayoutChange={function () { }}
            cols={12}
          />} />
          <Route path="/login" element={<AuthenticationPage tab={"loginPage"} />} />
          <Route path="/signup" element={<AuthenticationPage tab={"signupPage"} />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
