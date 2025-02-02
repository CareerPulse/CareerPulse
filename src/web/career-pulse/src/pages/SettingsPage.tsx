import {useState} from "react";
import {Box, Button, FormGroup, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SettingsPage = () => {
    const [city, setCity] = useState("Казань");
    const [notifications, setNotifications] = useState({
        messages: true,
        updates: false,
        promotions: false,
    });
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleCityChange = (event: any) => {
        setCity(event.target.value);
    };

    const handleNotificationChange = (event: any) => {
        setNotifications({
            ...notifications,
            [event.target.name]: event.target.checked,
        });
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: any) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = () => {
        if (password && password !== confirmPassword) {
            alert("Пароли не совпадают");
            return;
        }
        alert("Настройки сохранены");
    };

    return (
        <Box p={4}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Настройки
            </Typography>

            <Box mb={4}>
                <FormControl fullWidth>
                    <InputLabel id="city-label">Город</InputLabel>
                    <Select labelId="city-label" value={city} onChange={handleCityChange}>
                        <MenuItem value="Казань">Казань</MenuItem>
                        <MenuItem value="Москва">Москва</MenuItem>
                        <MenuItem value="Санкт-Петербург">Санкт-Петербург</MenuItem>
                        <MenuItem value="Новосибирск">Новосибирск</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box mb={4}>
                <Typography variant="h6">Уведомления</Typography>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={notifications.messages} onChange={handleNotificationChange}
                                           name="messages"/>} label="Сообщения"/>
                    <FormControlLabel
                        control={<Checkbox checked={notifications.updates} onChange={handleNotificationChange}
                                           name="updates"/>} label="Обновления"/>
                    <FormControlLabel
                        control={<Checkbox checked={notifications.promotions} onChange={handleNotificationChange}
                                           name="promotions"/>} label="Акции и предложения"/>
                </FormGroup>
            </Box>

            <Box mb={4}>
                <Typography variant="h6">Изменение пароля</Typography>
                <TextField fullWidth type="password" label="Новый пароль" value={password}
                           onChange={handlePasswordChange} margin="normal"/>
                <TextField fullWidth type="password" label="Подтвердите пароль" value={confirmPassword}
                           onChange={handleConfirmPasswordChange} margin="normal"/>
            </Box>

            <Box textAlign="center">
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Сохранить настройки
                </Button>
            </Box>
        </Box>
    );
};

export default SettingsPage;
