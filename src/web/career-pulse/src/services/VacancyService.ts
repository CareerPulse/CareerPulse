import apiClient from "../utils/clients/apiClient.ts";
import {SearchResponse, VacancyResponse} from "../models/searchApiModels.ts";

class VacancyService {
    private static route: string = '/vacancy';

    static async getSaved(): Promise<VacancyResponse[]> {
        const response = await apiClient.get<SearchResponse>(`${this.route}/saved`);

        return response.data.list;
    }

    static async getSavedMock(): Promise<VacancyResponse[]> {
        return [];
    }
}

export default VacancyService;
