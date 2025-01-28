import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Container, Typography} from "@mui/material";
import SearchBar from "../components/search/SearchBar.tsx";
import VacancyCard from "../components/search/VacancyCard.tsx";
import {PageRoute} from "../utils/navigation/PageRoute.tsx";

interface Vacancy {
    id: string;
    name: string;
    employer: string;
    salary?: string;
    experience: string;
    location: string;
    url: string;
}

const mockVacancies: Vacancy[] = [
    {
        id: "1",
        name: "Личный помощник",
        employer: "Lesyabishap",
        salary: "от 100 000 ₽ в месяц",
        experience: "Без опыта",
        location: "Казань, Козья слобода",
        url: "https://hh.ru/vacancy/1",
    },
    {
        id: "2",
        name: "Менеджер проектов",
        employer: "ООО Прогресс",
        salary: "от 150 000 ₽ в месяц",
        experience: "1–3 года",
        location: "Москва",
        url: "https://hh.ru/vacancy/2",
    },
];

const SearchVacancyPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const text = queryParams.get("text") || "";

    const [vacancies, setVacancies] = useState<Vacancy[]>([]);

    useEffect(() => {
        // Замените mockVacancies на реальный запрос к API
        setVacancies(mockVacancies)//.filter(v => v.name.toLowerCase().includes(text.toLowerCase())));
    }, [text]);

    const handleSearch = (value: string) => {
        // Логика обработки поиска
        navigate(`${PageRoute.searchVacancy}?text=${encodeURIComponent(value)}`);

        console.log("Поиск:", value);
    };

    return (
        <Container>
            <Box my={4}>
                <SearchBar onSearch={handleSearch} searchQuery={text}/>
            </Box>
            {vacancies.length > 0 ? (
                vacancies.map((vacancy) => (
                    <VacancyCard key={vacancy.id} vacancy={vacancy}/>
                ))
            ) : (
                <Typography variant="h6" textAlign="center">
                    Вакансии не найдены
                </Typography>
            )}
        </Container>
    );
};

export default SearchVacancyPage;
