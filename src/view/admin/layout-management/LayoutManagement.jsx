import { Button, Col, Row } from 'antd';
import LayoutService from 'api/layoutService';
import { GetDepartmentId } from 'common/storage';
import LayoutSearch from 'component/common/layout-management/LayoutSearch';
import LayoutTable from 'component/common/layout-management/LayoutTable';
import i18n from 'i18n/i18n';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FuctionBlock = () => {
  const navigate = useNavigate();
  return (
    <div className="w100 text-right mb-8">
      <Button className="mr-8" type="primary" onClick={() => navigate('/admin/layout-create')}>
        {i18n.t('button.create')}
      </Button>
    </div>
  );
};

const LayoutManagement = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [roleInfo, setRoleInfo] = useState();
  const [dataTable, setDataTable] = useState([]);
  const changeEditMode = value => {
    setRoleInfo(value);
    setIsEditMode(true);
  };
  const [searchData, setSearchData] = useState({
    name: '',
    status: [],
    departmentId: GetDepartmentId(),
  });
  const [metaList, setMetaList] = useState({
    totalPage: 1,
    total: 0,
    pageNum: 0,
    pageSize: 10,
    sortBy: null,
    sortDesc: null,
  });

  useEffect(() => {
    getLayoutList();
  }, []);

  const getLayoutList = () => {
    LayoutService.search({ ...searchData, meta: metaList }).then(res => {
      console.log(res);
      setDataTable(res.data.content);
    });
  };

  return (
    <div>
      <Row>
        <LayoutSearch onSearch={getLayoutList} onChangeData={setSearchData} />
      </Row>
      <FuctionBlock />
      <Row gutter={16}>
        <Col span={24}>
          <LayoutTable dataTable={dataTable} changeEditMode={changeEditMode} />
        </Col>
      </Row>
    </div>
  );
};

export default LayoutManagement;
