import { Col, Row } from 'antd';
import AdminDepartmentService from 'api/admin/departmentService';
import CreateEditTab from 'component/common/CreateEditTab';
import DepartmentCreate from 'component/common/department-management/DepartmentCreate';
import DepartmentSearch from 'component/common/department-management/DepartmentSearch';
import DepartmentTable from 'component/common/department-management/DepartmentTable';
import { HTTP_CODE } from 'constant/constants';
import { useEffect, useMemo, useState } from 'react';

const DepartmentManagement = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [departmentInfo, setDepartmentInfo] = useState();
  const [departmentData, setDepartmentData] = useState([]);
  const [searchData, setSearchData] = useState({
    name: '',
    status: [],
  });
  const [metaList, setMetaList] = useState({
    totalPage: 1,
    total: 0,
    pageNum: 0,
    pageSize: 10,
    sortBy: null,
    sortDesc: null,
  });
  const pageNum = useMemo(() => ({ pageNum: metaList.pageNum }), [metaList.pageNum]);
  useEffect(() => {
    let unsubscibed = false;
    seachDepartment(unsubscibed);
    return () => {
      unsubscibed = true;
    };
  }, [pageNum]);

  const changeEditMode = id => {
    getDepartment(id);
    setIsEditMode(true);
  };

  const seachDepartment = (search = false, unsubscibed = false) => {
    AdminDepartmentService.search({
      ...searchData,
      meta: metaList,
    }).then(res => {
      if (!unsubscibed && res.code === HTTP_CODE.SUCCESS) {
        const content = res.data.content;
        const meta = res.data.meta;
        const dataMap = content.map((record, index) => ({ ...record, key: index }));
        setDepartmentData(dataMap);
        setMetaList(meta);
      }
    });
  };

  const refreshData = () => {
    seachDepartment();
  };

  const getDepartment = id => {
    if (id !== null) {
      AdminDepartmentService.detail(id).then(res => {
        if (res.code === HTTP_CODE.SUCCESS) {
          const data = res.data;
          setDepartmentInfo(data);
        }
      });
    }
  };

  const handleDelete = id => {
    if (id != null) {
      AdminDepartmentService.delete(id).then(res => {
        if (res.code === HTTP_CODE.SUCCESS) {
          refreshData();
        }
      });
    }
  };

  const handleChangePage = ({ current, pageSize }) => {
    setMetaList(prev => ({ ...prev, pageNum: current - 1 }));
  };

  return (
    <div>
      <Row>
        <DepartmentSearch onSearch={seachDepartment} onChangeData={setSearchData} />
      </Row>
      <Row gutter={16}>
        <Col span={18}>
          <DepartmentTable
            data={departmentData}
            onRefresh={refreshData}
            changeEditMode={changeEditMode}
            pagination={metaList}
            onChangePage={handleChangePage}
            onDelete={handleDelete}
          />
        </Col>
        <Col span={6}>
          <CreateEditTab
            setIsEditMode={setIsEditMode}
            isEditMode={isEditMode}
            createRender={<DepartmentCreate name={'create'} isCreateMode={true} onRefresh={refreshData} />}
            editRender={<DepartmentCreate name={'edit'} isCreateMode={false} formData={departmentInfo} onRefresh={refreshData} />}
          />
        </Col>
      </Row>
    </div>
  );
};

export default DepartmentManagement;
