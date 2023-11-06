import { Col, Row } from "antd";
import CreateEditTab from "component/common/CreateEditTab";
import RoleCreate from "component/common/layout-management/LayoutCreate";
import RoleSearch from "component/common/layout-management/LayoutSearch";
import RoleTable from "component/common/layout-management/LayoutTable";
import { useState } from "react";

const RoleManagement = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [roleInfo, setRoleInfo] = useState();

    const changeEditMode = (value) => {
        setRoleInfo(value);
        setIsEditMode(true);
    }
    
    return (
        <div>
            <Row>
                <RoleSearch />
            </Row>
            <Row gutter={16}>
                <Col span={18}>
                    <RoleTable changeEditMode={changeEditMode} />
                </Col>
                <Col span={6}>
                    <CreateEditTab
                        setIsEditMode={setIsEditMode}
                        isEditMode={isEditMode}
                        createRender={<RoleCreate isCreateMode={true} />}
                        editRender={<RoleCreate isCreateMode={false} formData={roleInfo} />}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default RoleManagement;