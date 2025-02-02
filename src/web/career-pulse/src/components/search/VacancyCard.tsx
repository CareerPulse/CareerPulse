import React from "react";
import {Box, Button, Typography, Card, CardContent} from "@mui/material";
import {Vacancy} from "../../models/searchApiModels.ts";

// interface VacancyMock {
//     id: string;
//     name: string;
//     employer: string;
//     salary?: string;
//     experience: string;
//     location: string;
//     url: string;
// }

interface VacancyCardProps {
    vacancy: Vacancy;
}

const VacancyCard: React.FC<VacancyCardProps> = ({vacancy}) => {
    return (
        <Card variant="outlined" sx={{mb: 2}}>
            <CardContent>
                <Typography variant="h6" fontWeight="bold">{vacancy.name}</Typography>
                <Typography variant="body2" color="text.secondary">{vacancy.employer.name}</Typography>
                {vacancy.salary && <Typography variant="body2">Зарплата: {vacancy.salary.gross} {vacancy.salary.currency}</Typography>}
                <Typography variant="body2">Опыт работы: {vacancy.experience.name}</Typography>
                <Typography variant="body2" color="text.secondary">{vacancy.address?.city}</Typography>
                <Box mt={2}>
                    <Button variant="contained" color="primary" href={vacancy.alternate_url} target="_blank">
                        Перейти к вакансии
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default VacancyCard;
