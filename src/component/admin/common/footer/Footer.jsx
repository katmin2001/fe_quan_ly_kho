import { Layout } from 'antd';
import i18n from "i18n/i18n";
const { Footer } = Layout;

const CustomFooter = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            { i18n.t('content.footer') }
        </Footer>
    );
};

export default CustomFooter;