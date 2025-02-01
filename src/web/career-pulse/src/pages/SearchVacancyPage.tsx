import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import SearchBar from "../components/search/SearchBar.tsx";
import VacancyCard from "../components/search/VacancyCard.tsx";
import {PageRoute} from "../utils/navigation/PageRoute.tsx";
import VacancySearchService from "../services/VacancySearchService.ts";
import {SearchVacanciesRequest, Vacancy} from "../searchApiModels.ts";

interface VacancyMock {
    id: string;
    name: string;
    employer: string;
    salary?: string;
    experience: string;
    location: string;
    url: string;
}

const mockVacancies: VacancyMock[] = [
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
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchVacancies = async () => {
            try {
                setLoading(true); // Начинаем загрузку

                let request: SearchVacanciesRequest = {
                    text: text
                };

                let vacancies = await VacancySearchService.search(request);

                // Имитация задержки
                setTimeout(() => {
                    setVacancies(vacancies.items); // Устанавливаем вакансии после задержки
                }, 2000); // Задержка 2 секунды
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false); // Завершаем загрузку
            }

        };

        fetchVacancies(); // Вызываем асинхронную функцию для загрузки данных
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

            {loading ? (
                <Box display="flex" justifyContent="center" my={4}>
                    <CircularProgress/>
                </Box>
            ) : vacancies.length > 0 ? (
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
