import React from "react";
import {useFormik} from "formik";

const Login = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    )
}

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            toggle: false,
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    placeholder={"login"}
                    name="login"
                    onChange={formik.handleChange}
                    value={formik.values.login}
                />
            </div>
            <div>
                <input
                    placeholder={"Password"}
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>
            <div>
                <input
                    type={"checkbox"}
                    name="toggle"
                    onChange={formik.handleChange}
                /> {`${formik.values.toggle}`} Remember me
            </div>

            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};


export default Login