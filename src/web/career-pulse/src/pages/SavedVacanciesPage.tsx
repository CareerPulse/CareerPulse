import {useState, useEffect} from 'react';
import {Container, Box, Typography, CircularProgress} from '@mui/material';
import VacancyService from "../services/VacancyService.ts";
import VacancyCard from "../components/search/VacancyCard.tsx";
import {VacancyResponse} from "../models/searchApiModels.ts";

const SavedVacanciesPage = () => {
    const [vacancies, setVacancies] = useState<VacancyResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchSavedVacancies = async () => {
            try {
                setLoading(true);
                const savedVacancies = await VacancyService.getSavedMock();
                setVacancies(savedVacancies);
            } catch (e) {
                console.error("Ошибка при загрузке сохранённых вакансий:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchSavedVacancies();
    }, []);

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Сохранённые вакансии
                </Typography>

                {loading ? (
                    <Box display="flex" justifyContent="center" my={4}>
                        <CircularProgress/>
                    </Box>
                ) : vacancies.length > 0 ? (
                    vacancies.map((vacancy) => (
                        <VacancyCard key={vacancy.link} vacancy={vacancy}/>
                    ))
                ) : (
                    <Typography variant="h6" textAlign="center">
                        Сохранённых вакансий нет
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default SavedVacanciesPage;
