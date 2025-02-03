import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import SearchBar from "../components/search/SearchBar.tsx";
import VacancyCard from "../components/search/VacancyCard.tsx";
import {PageRoute} from "../utils/navigation/PageRoute.tsx";
import VacancySearchService from "../services/VacancySearchService.ts";
import {SearchRequest, VacancyResponse} from "../models/searchApiModels.ts";

const SearchVacancyPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const parseSearchParams = (params: URLSearchParams): SearchRequest => {
        return {
            sorting: params.get("sorting") || "ASC",
            title: decodeURIComponent(params.get("title") || ""),
            // text: params.get("text") || undefined,
            // search_field: params.get("search_field") || undefined,
            // experience: params.get("experience") || undefined,
            // employment: params.get("employment") || undefined,
            // schedule: params.get("schedule") || undefined,
            // salary: params.get("salary") ? Number(params.get("salary")) : undefined,
            // only_with_salary: params.get("only_with_salary") === "true",
            // order_by: params.get("order_by") || undefined
        };
    };

    const [vacancies, setVacancies] = useState<VacancyResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchVacancies = async () => {
            try {
                setLoading(true); // Начинаем загрузку

                const request = parseSearchParams(queryParams);
                let response = await VacancySearchService.search(request);

                setVacancies(response.items);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };

        fetchVacancies();
    }, [location.search]);

    const handleSearch = (value: string) => {
        const newParams = new URLSearchParams(queryParams);
        newParams.set("title", encodeURIComponent(value));

        navigate(`${PageRoute.searchVacancy}?${newParams.toString()}`);
    };

    const handleAdvancedSearch = () => {
        navigate(`${PageRoute.advancedSearchVacancy}?${queryParams.toString()}`);
    };

    return (
        <Container>
            <Box my={4}>
                <SearchBar onSearch={handleSearch}
                           onAdvancedSearch={handleAdvancedSearch}
                           searchQuery={queryParams.get("title") || ""}/>
            </Box>

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
                    Вакансии не найдены
                </Typography>
            )}
        </Container>
    );
};

export default SearchVacancyPage;
