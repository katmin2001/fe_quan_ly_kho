import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { BREADCRUMB_LANG } from 'constant/constants';
import i18n from 'i18n/i18n'

const findBreadcrumbLang = (value) => {
    return i18n.t(BREADCRUMB_LANG[value]);
}

const CustomBreadcumb = () => {
    const location = useLocation();
    return (
        <Breadcrumb
            style={{
                margin: '16px 0',
            }}
        >
            {location.pathname.split("/").map(
                (item, index) => <Breadcrumb.Item key={index}>{findBreadcrumbLang(item)}</Breadcrumb.Item>
            )}
        </Breadcrumb>
    );
};

export default CustomBreadcumb;