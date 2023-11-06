import { Tabs } from "antd";
import { CREATE_EDIT_TAB } from "constant/constants";
import i18n from "i18n/i18n";
import { useEffect, useState } from "react";

const CreateEditTab = (props) => {
    const {
        setIsEditMode,
        isEditMode,
        createRender,
        editRender
    } = props;

    const [activeKey, setActiveKey] = useState(null);

    const onTabChange = () => {
        setActiveKey(CREATE_EDIT_TAB.CREATE);
        setIsEditMode(false);
    }

    useEffect(() => {
        if (isEditMode) {
            setActiveKey(CREATE_EDIT_TAB.EDIT);
        } else {
            setActiveKey(CREATE_EDIT_TAB.CREATE);
        }
    }, [isEditMode]);

    const tabItems = [
        {
            label: i18n.t("tabs.create"),
            key: CREATE_EDIT_TAB.CREATE,
            children: createRender,
        },
        {
            label: i18n.t("tabs.edit"),
            key: CREATE_EDIT_TAB.EDIT,
            children: editRender,
            disabled: true,
        },
    ]

    return (
        <Tabs
            activeKey={activeKey}
            items={tabItems}
            onChange={onTabChange}
        />
    );
};

export default CreateEditTab;