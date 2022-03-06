import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const withAuthRedirect = (Component:any) => {

    class RedirectComponent extends React.Component<any, any> {
        render() {
            let navigate = useNavigate();
            let LoggedIn = !this.props.isAuth;
            useEffect(() => {
                if (LoggedIn) {
                    return navigate("/login");
                }
            }, [LoggedIn]);
            return RedirectComponent;
        }
    }
}