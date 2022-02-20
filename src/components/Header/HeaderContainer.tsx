import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth_reduser";
import {AppStateType} from "../../redux/redux-store";
import {loginUsers} from "../../api/api";


class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {

        loginUsers()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}

        />

    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string|null
}

type MapDispatchToPropsType ={
    setAuthUserData : (id: number, email: string, login: string) => void
}
type HeaderPropsType = MapDispatchToPropsType | MapStateToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)