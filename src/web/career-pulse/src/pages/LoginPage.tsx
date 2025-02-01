import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {AuthCard} from "../components/auth/AuthCard.tsx";
import {AuthContainer} from "../components/auth/AuthContainer.tsx";
import {PageRoute} from "../utils/navigation/PageRoute.tsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const handleEmail = (value: string) => {
        setEmail(value);
    };

    const handlePassword = (value: string) => {
        setPassword(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (emailError || passwordError) {
            event.preventDefault();
            return;
        }

        localStorage.setItem("email", email);
        navigate(PageRoute.main);
    };

    const validateInputs = () => {
        let isValid = true;

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password || password.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    return (
        <AuthContainer direction="column" justifyContent="space-between">
            <AuthCard variant="outlined">
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)'}}
                >
                    Вход
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2,
                    }}
                >
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <TextField
                            error={emailError}
                            helperText={emailErrorMessage}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            autoComplete="email"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={emailError ? 'error' : 'primary'}
                            onChange={event => {
                                handleEmail(event.target.value)
                            }}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Пароль</FormLabel>
                        <TextField
                            error={passwordError}
                            helperText={passwordErrorMessage}
                            name="password"
                            placeholder="••••••"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={passwordError ? 'error' : 'primary'}
                            onChange={event => {
                                handlePassword(event.target.value)
                            }}
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Запомнить меня"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={validateInputs}
                    >
                        Войти
                    </Button>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Typography sx={{textAlign: 'center'}}>
                        Нет аккаунта?{' '}
                        <Link
                            href={PageRoute.register}
                            variant="body2"
                            sx={{alignSelf: 'center'}}
                        >
                            Зарегистрироваться
                        </Link>
                    </Typography>
                </Box>
            </AuthCard>
        </AuthContainer>
    );
}
