import { Button, ButtonToolbar, Form, Schema } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { RouteConst } from "../Routes/RouteConst";
import { actions } from "../../redux/actions/actions";
import { forwardRef, useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./LoginForm.module.css"
import React from "react";

const { StringType, NumberType } = Schema.Types;
const model = Schema.Model({
    name: StringType().isRequired('This field is required.'),
    email: StringType()
        .isEmail('Please enter a valid email address.')
        .isRequired('This field is required.'),
    password: StringType().isRequired('This field is required.'),
    verifyPassword: StringType()
        .addRule((value, data) => {
            if (value !== data.password) {
                return false;
            }

            return true;
        }, 'The two passwords do not match')
        .isRequired('This field is required.')
});

const TextField = forwardRef((props, ref) => {
    const { name, label, accepter, ...rest } = props;
    return (
        <Form.Group controlId={`${name}-4`} ref={ref}>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );
})

const LoginForm = () => {
    const [isAuth, setIsAuth] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const formRef = useRef();

    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: "",
        verifyPassword: ""
    });

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            return;
        }
        dispatch(actions.setLogin(formValue));
        setIsAuth(true);
    };

    useEffect(() => {
        if (isAuth) {
            navigate(RouteConst.EDIT_RESUME);
        }
    });


    return (
        <div className={s.loginForm}>
            <Form model={model} formValue={formValue} onChange={setFormValue} ref={formRef}>
                <TextField name="name" label="Username" />
                <TextField name="email" label="Email" />
                <TextField name="password" label="Password" type="password" autoComplete="off" className="formDivElement" />
                <TextField
                    name="verifyPassword"
                    label="Verify password"
                    type="password"
                    autoComplete="off"
                    className="formDivElement"
                />
                <ButtonToolbar>
                    <Button className={s.button} appearance="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </ButtonToolbar>
            </Form>
        </div>
    );
};

export default LoginForm;