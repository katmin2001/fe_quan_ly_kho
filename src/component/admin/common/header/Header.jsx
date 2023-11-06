import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Divider, Dropdown, Layout, Row, Select, theme } from 'antd';
import AdminDepartmentService from 'api/admin/departmentService';
import { ClearAuthenticationStorage, GetDepartmentId, GetLang, SetDepartmentId, SetLang } from 'common/storage';
import { HTTP_CODE, LANGUAGE_OPTION, STATUS_ENUM } from 'constant/constants';
import i18n from 'i18n/i18n';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
const { Header } = Layout;

const LogoutRender = () => {
  const nagative = useNavigate();
  const actionLogout = () => {
    ClearAuthenticationStorage();
    nagative('/login');
  };
  return <div onClick={actionLogout}>{i18n.t('button.logout')}</div>;
};

const searchDefault = {
  name: '',
  status: [STATUS_ENUM.ACTIVE],
  meta: {
    totalPage: 1,
    total: 0,
    pageNum: 0,
    pageSize: 10,
    sortBy: null,
    sortDesc: null,
  },
};

const ProfileRender = () => {
  return (
    <a target="_blank" rel="noopener noreferrer" href="/#">
      {i18n.t('button.profile')}
    </a>
  );
};

const SettingRender = () => {
  return (
    <a target="_blank" rel="noopener noreferrer" href="/#">
      {i18n.t('button.setting')}
    </a>
  );
};

const items = [
  {
    key: '0',
    label: (
      <div style={{ cursor: 'default', pointerEvents: 'none' }}>
        <Row>
          <Col style={{ margin: 'auto' }}>
            <Avatar className="avatar-header" size={'large'} icon={<UserOutlined />} />
          </Col>
          <Col>
            <div style={{ padding: '8px' }}>
              <div>Hoang Anh Duong</div>
              <div>duonghht1419@gmail.com</div>
            </div>
          </Col>
          <Divider style={{ margin: 0 }} />
        </Row>
      </div>
    ),
  },
  {
    key: '1',
    label: <ProfileRender />,
  },
  {
    key: '2',
    label: <SettingRender />,
  },
  {
    key: '3',
    label: <LogoutRender />,
  },
];

const CustomHeader = () => {
  const nagative = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [currentLang, setCurrentLang] = useState(GetLang() === null ? LANGUAGE_OPTION.ENGLISH : GetLang());
  const [departments, setDepartments] = useState([]);
  const [currnetDepartment, setCurrnetDepartment] = useState(GetDepartmentId());
  const [loadingDepartment, setLoadingDepartment] = useState(false);
  useEffect(() => {
    let unsubscibed = false;
    getDepartment(unsubscibed);

    return () => {
      unsubscibed = true;
    };
  }, []);

  const getDepartment = (unsubscibed = false) => {
    AdminDepartmentService.search(searchDefault).then(res => {
      if (!unsubscibed && res.code === HTTP_CODE.SUCCESS) {
        const content = res.data.content;
        const dataMap = content.map((record, index) => ({ value: record.id.toString(), label: record.name }));
        console.log(dataMap);
        setDepartments(dataMap);
      }
    });
  };

  const handleChangeLanguage = v => {
    SetLang(v);
    nagative(0);
  };

  const handleChangeDepartment = v => {
    SetDepartmentId(v);
    nagative(0);
  };

  const checkCurrentDepartment = () => {
    let isExists = true;
    if (currnetDepartment === 'null' || departments.length === 0) isExists = false;
    else isExists = departments.findIndex(v => v.value === currnetDepartment.toString()) !== -1;
    console.log(isExists);
    if (!isExists) {
      setCurrnetDepartment('null');
      nagative(0);
    }
  };
  return (
    <Header
      style={{
        padding: '0px 8px',
        background: colorBgContainer,
      }}
    >
      <Row gutter={16}>
        <Col className="gutter-row" span={12}></Col>
        <Col className="gutter-row defined-block" span={12}>
          <Row>
            <Select
              value={currnetDepartment}
              style={{ width: 200, marginRight: '8px' }}
              onChange={handleChangeDepartment}
              loading={loadingDepartment}
              onDropdownVisibleChange={open => {
                console.log(open);
                if (open) {
                  getDepartment();
                } else {
                  checkCurrentDepartment();
                }
              }}
              options={departments.concat({
                value: 'null',
                label: 'No department',
              })}
            />
            <Select
              value={currentLang}
              style={{ width: 96, marginRight: '8px' }}
              onChange={handleChangeLanguage}
              options={[
                {
                  value: LANGUAGE_OPTION.ENGLISH,
                  label: 'English',
                },
                {
                  value: LANGUAGE_OPTION.JAPAN,
                  label: 'Japan',
                },
                {
                  value: LANGUAGE_OPTION.VIETNAM,
                  label: 'Vietnam',
                },
              ]}
            />
            <Dropdown menu={{ items }} trigger={['click']} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
              <Avatar className="avatar-header" size={'default'} icon={<UserOutlined />} />
            </Dropdown>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default CustomHeader;
