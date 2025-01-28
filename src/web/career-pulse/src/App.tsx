import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme.ts";
import {PageRoute} from "./utils/navigation/PageRoute.tsx";
import './App.css'
import MainPage from "./pages/MainPage.tsx";
import SearchResultPage from "./pages/SearchResultPage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {RegisterPage} from "./pages/RegisterPage.tsx";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <AppContent/>
            </Router>
        </ThemeProvider>
    );
}

function AppContent() {
    return (
        <Container sx={{display: 'flex', width: '100%', height: '100vh'}}>
            <Container sx={{padding: '20px'}}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path={PageRoute.search} element={<SearchResultPage/>}/>
                    <Route path={PageRoute.login} element={<LoginPage/>}/>
                    <Route path={PageRoute.register} element={<RegisterPage/>}/>
                    <Route path="*" element={<Navigate replace to="/"/>}/>
                </Routes>
            </Container>
        </Container>
    );
}
