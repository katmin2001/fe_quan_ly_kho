import Authentication from "component/common/authentication/Authentication";

const AuthenticationPage = (props) => {
    const { tab } = props
    return (
        <Authentication tab={tab} />
    )
}

export default AuthenticationPage;