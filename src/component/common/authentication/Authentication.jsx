import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import i18n from "i18n/i18n";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./style.css";

const LoginTabRender = (
    <div className="login-tab">{i18n.t("tabs.loginPage")}</div>
);

// const SignupTabRender = (
//     <div className="signup-tab">{i18n.t("tabs.signupPage")}</div>
// );

const tabList = [
    {
        key: 'loginPage',
        tab: LoginTabRender,
    },
    // {
    //     key: 'signupPage',
    //     tab: SignupTabRender,
    // },
];

const contentList = {
    loginPage:  <LoginForm />,
    // signupPage: <SignupForm />,
}

const Authentication = (props) => {
    const navigate = useNavigate();
    const activeTabKey = props.tab;
    const onTabChange = (key) => {
        if (key === 'signupPage') {
            navigate("/signup");
        } else {
            navigate("/login");
        }
    };
    return (
        <div>
            <div className="login-background"></div>
            <Card
                className="login-form"
                size="default"
                tabList={tabList}
                activeTabKey={activeTabKey}
                onTabChange={(key) => {
                    onTabChange(key);
                }}
            >
                {contentList[activeTabKey]}
            </Card>
        </div>
    )
}

export default Authentication;