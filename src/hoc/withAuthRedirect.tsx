import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";


export const withAuthRedirect = (Component: any) => (props: any) => {

    let navigate = useNavigate();
    let LoggedIn = !props.isAuth;
    useEffect(() => {
        if (LoggedIn) {
            return navigate("/login");
        }
    }, [LoggedIn]);
    return <Component {...props}/>
}

