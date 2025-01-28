import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {TextField, Button, Box, Typography, Container} from "@mui/material";
import {PageRoute} from "../utils/navigation/PageRoute.tsx";

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Здесь вы можете обработать вход в аккаунт
        console.log("Logged in!");
        navigate(PageRoute.main);
    };

    return (
        <Container maxWidth="sm"
                   style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px"}}>
            <Typography variant="h4" gutterBottom>
                Вход в аккаунт
            </Typography>
            <Box component="form" width="100%" mt={2}>
                <TextField label="Email" variant="outlined" fullWidth margin="normal"/>
                <TextField label="Пароль" variant="outlined" type="password" fullWidth margin="normal"/>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{marginTop: "16px"}}
                    onClick={handleLogin}
                >
                    Войти
                </Button>
            </Box>
            <Typography variant="body2" style={{marginTop: "16px"}}>
                Нет аккаунта? <Link to={PageRoute.register}>Зарегистрируйтесь</Link>
            </Typography>
        </Container>
    );
};
