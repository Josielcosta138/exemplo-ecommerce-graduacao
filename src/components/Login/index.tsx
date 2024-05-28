import { FC } from "react";
import "./index.css";
import { TextField } from "@mui/material";

const Login : FC = () => {
    return <>
        <div className="div-login">
            <div className="div-login-linha">
                <TextField 
                    label="Email"
                    type="email"
                />
            </div>
            <div className="div-login-linha">
                <TextField 
                    label="Senha"
                    type="password"
                />
            </div>
        </div>

    </>
}
export default Login;