import {AppBar, Toolbar, Typography, Button, Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {PageRoute} from "../utils/navigation/PageRoute.tsx";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static" color="transparent" style={{boxShadow: "none"}}>
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                {/* Лого и название */}
                <Box sx={{display: "flex", alignItems: "center", cursor: "pointer"}} onClick={() => navigate(PageRoute.main)}>
                    <Typography variant="h6" fontWeight="bold" sx={{mr: 2}}>
                        CareerPulse
                    </Typography>
                </Box>

                <Button color="inherit" onClick={() => navigate(PageRoute.login)}>
                    Войти
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
