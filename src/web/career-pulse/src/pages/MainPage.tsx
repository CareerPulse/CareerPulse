import {Box, Container, Typography} from "@mui/material";
import SearchBar from "../components/search/SearchBar.tsx";
import {useNavigate} from "react-router-dom";
import {PageRoute} from "../utils/navigation/PageRoute.tsx";

const MainPage = () => {
    const navigate = useNavigate();

    const handleSearch = (value: string) => {
        if (value.trim()) {
            navigate(`${PageRoute.searchVacancy}?text=${encodeURIComponent(value)}`);
        }
    };

    return (
        <Container
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <Box mb={3} textAlign="center">
                <Typography style={{fontWeight: "bold", fontSize: 42}}>CareerPulse</Typography>
                <Typography style={{fontSize: 18}}>Твой помощник в поиске работы</Typography>
            </Box>
            <SearchBar onSearch={handleSearch}/>
        </Container>
    );
};

export default MainPage;
