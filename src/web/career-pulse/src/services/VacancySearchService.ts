import apiClient from "../utils/clients/apiClient.ts";
import {SearchVacanciesRequest, SearchVacanciesResponse} from "../models/searchApiModels.ts";
import {toQueryString} from "../utils/toQueryString.ts";

class VacancySearchService {
    private static route: string = '/resume';

    static async search(request: SearchVacanciesRequest): Promise<SearchVacanciesResponse> {
        const response = await apiClient.get<SearchVacanciesResponse>(`${this.route}?${toQueryString(request)}`);

        return response.data;
    }
}

export default VacancySearchService;
