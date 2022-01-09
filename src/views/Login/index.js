import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
    const _email = "gokhan_kayser@hotmail.com"
    const _password = "123456g!"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    return (
        <Box
            component="form"
            sx={{
                margin: "30% 5%",
                '& .MuiTextField-root': { mb: 2, width: "100%" },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                id="outlined-required"
                label="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="outlined"
                fullWidth
                style={{ marginBottom: "5%" }}
                onClick={() => {
                    email === _email && password === _password ? navigate("/application") : alert("aman aman")
                }}
            >Login</Button>
            <Link to="/Register" >Do not have an account yet?</Link>
        </Box>
    )
}
