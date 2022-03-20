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
            if (values.login.length>1 ? alert(JSON.stringify(values, null, 2)) : formik.errors.login) {}
        },
        validate: values => {
            let errors = {
                login: '',
                password: '',
            };

            if (!values.login) {
                errors.login = 'Required!'
            } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.login)) {
                errors.login = 'Invalid email format!'
            }
            if (!values.password) {
                errors.password = "Required!"
            }

        }

    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div >
                <label htmlFor='login'>
                    {formik.errors.login && <div className="error">{formik.errors.login}
                    </div>}
                </label>
                <input
                    placeholder={"login"}
                    name="login"
                    onChange={formik.handleChange}
                    value={formik.values.login}
                    type={"email"}
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