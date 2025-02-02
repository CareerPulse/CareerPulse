import {SearchVacanciesResponse, Vacancy} from "../models/searchApiModels.ts";
import apiClient from "../utils/clients/apiClient.ts";

class VacancyService {
    private static route: string = '/vacancy';

    static async getSaved(): Promise<Vacancy[]> {
        const response = await apiClient.get<SearchVacanciesResponse>(`${this.route}/saved`);

        return response.data.items;
    }

    static async getSavedMock(): Promise<Vacancy[]> {
        return [];
    }
}

export default VacancyService;
