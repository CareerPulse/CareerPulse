import React, {useState} from "react";
import {
    Box,
    Button,
    TextField,
    FormControl,
    FormControlLabel,
    Checkbox,
    MenuItem,
    Select,
    InputLabel,
    Typography,
    Stack,
} from "@mui/material";
import {PageRoute} from "../utils/navigation/PageRoute.tsx";
import {useNavigate} from "react-router-dom";
import {toQueryString} from "../utils/toQueryString.ts";

const AdvancedSearchPage = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        text: "",
        search_field: "",
        experience: "",
        employment: "",
        schedule: "",
        salary: "",
        only_with_salary: false,
        order_by: "",
    });

    const handleInputChange = (name: string, value: unknown) => {
        setFilters((prev) => ({
            ...prev,
            [name as string]: value,
        }));
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = event.target;
        setFilters((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleSubmit = () => {
        console.log("Filters applied:", filters);
        navigate(`${PageRoute.searchVacancy}?${toQueryString(filters)}`);

        // Здесь можно передать параметры на сервер
    };

    return (
        <Box p={4}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Продвинутый поиск вакансий
            </Typography>

            <Stack spacing={4}>
                {/* Ключевые слова */}
                <Box>
                    <TextField
                        fullWidth
                        label="Ключевые слова"
                        name="text"
                        value={filters.text}
                        onChange={(event) => handleInputChange(event.target.name, event.target.value)}
                        placeholder="Например, директор по продажам"
                        variant="outlined"
                    />
                </Box>

                {/* Искать только */}
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="search_field-label">Искать только</InputLabel>
                        <Select
                            labelId="search_field-label"
                            name="search_field"
                            value={filters.search_field}
                            onChange={(event) => handleInputChange(event.target.name, event.target.value)}
                            variant="standard">
                            <MenuItem value="">Все поля</MenuItem>
                            <MenuItem value="name">В названии вакансии</MenuItem>
                            <MenuItem value="company_name">В названии компании</MenuItem>
                            <MenuItem value="description">В описании вакансии</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Требуемый опыт работы */}
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="experience-label">Требуемый опыт</InputLabel>
                        <Select
                            labelId="experience-label"
                            name="experience"
                            value={filters.experience}
                            variant="standard"
                            onChange={(event) => handleInputChange(event.target.name, event.target.value)}
                        >
                            <MenuItem value="">Не имеет значения</MenuItem>
                            <MenuItem value="noExperience">Нет опыта</MenuItem>
                            <MenuItem value="between1And3">От 1 года до 3 лет</MenuItem>
                            <MenuItem value="between3And6">От 3 до 6 лет</MenuItem>
                            <MenuItem value="moreThan6">Более 6 лет</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Тип занятости */}
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="employment-label">Тип занятости</InputLabel>
                        <Select
                            labelId="employment-label"
                            name="employment"
                            value={filters.employment}
                            variant="standard"
                            onChange={(event) => handleInputChange(event.target.name, event.target.value)}
                        >
                            <MenuItem value="">Любая</MenuItem>
                            <MenuItem value="full">Полная занятость</MenuItem>
                            <MenuItem value="part">Частичная занятость</MenuItem>
                            <MenuItem value="project">Проектная работа</MenuItem>
                            <MenuItem value="volunteer">Волонтерство</MenuItem>
                            <MenuItem value="internship">Стажировка</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* График работы */}
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="schedule-label">График работы</InputLabel>
                        <Select
                            labelId="schedule-label"
                            name="schedule"
                            value={filters.schedule}
                            variant="standard"
                            onChange={(event) => handleInputChange(event.target.name, event.target.value)}
                        >
                            <MenuItem value="">Любой</MenuItem>
                            <MenuItem value="fullDay">Полный день</MenuItem>
                            <MenuItem value="shift">Сменный график</MenuItem>
                            <MenuItem value="flexible">Гибкий график</MenuItem>
                            <MenuItem value="remote">Удаленная работа</MenuItem>
                            <MenuItem value="rotational">Вахтовый метод</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Уровень дохода */}
                <Box>
                    <TextField
                        fullWidth
                        label="Уровень дохода (₽)"
                        name="salary"
                        type="number"
                        value={filters.salary}
                        onChange={(event) => handleInputChange(event.target.name, event.target.value)}
                        placeholder="Например, 100000"
                        variant="outlined"
                    />
                </Box>

                {/* Только с указанным уровнем дохода */}
                <Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="only_with_salary"
                                checked={filters.only_with_salary}
                                onChange={handleCheckboxChange}
                            />
                        }
                        label="Показывать только вакансии с указанным уровнем дохода"
                    />
                </Box>

                {/* Сортировка */}
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="order_by-label">Сортировка</InputLabel>
                        <Select
                            labelId="order_by-label"
                            name="order_by"
                            value={filters.order_by}
                            variant="standard"
                            onChange={(event) => handleInputChange(event.target.name, event.target.value)}
                        >
                            <MenuItem value="">По умолчанию</MenuItem>
                            <MenuItem value="relevance">По соответствию</MenuItem>
                            <MenuItem value="salary_desc">По убыванию зарплат</MenuItem>
                            <MenuItem value="salary_asc">По возрастанию зарплаты</MenuItem>
                            <MenuItem value="publication_time">По дате изменения</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Stack>

            {/* Кнопка поиска */}
            <Box mt={4} textAlign="center">
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Поиск
                </Button>
            </Box>
        </Box>
    );
};

export default AdvancedSearchPage;
