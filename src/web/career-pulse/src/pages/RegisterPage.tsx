import {Box, Button, Container, TextField, Typography} from "@mui/material";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {PageRoute} from "../utils/navigation/PageRoute.tsx";

export const RegisterPage: React.FC = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        console.log("Registered!");
        navigate("/");
    };

    return (
        <Container maxWidth="sm"
                   style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px"}}>
            <Typography variant="h4" gutterBottom>
                Регистрация
            </Typography>
            <Box component="form" width="100%" mt={2}>
                <TextField label="Имя" variant="outlined" fullWidth margin="normal"/>
                <TextField label="Email" variant="outlined" fullWidth margin="normal"/>
                <TextField label="Пароль" variant="outlined" type="password" fullWidth margin="normal"/>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{marginTop: "16px"}}
                    onClick={handleRegister}
                >
                    Зарегистрироваться
                </Button>
            </Box>
            <Typography variant="body2" style={{marginTop: "16px"}}>
                Уже есть аккаунт? <Link to={PageRoute.login}>Войдите</Link>
            </Typography>
        </Container>
    );
};
