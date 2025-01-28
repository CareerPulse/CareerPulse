import apiClient from "../utils/clients/apiClient.ts";
import {SearchVacanciesRequest, SearchVacanciesResponse} from "../searchApiModels.ts";
import {toQueryString} from "../utils/toQueryString.ts";

class SearchService {
    private static route: string = '/search';

    static async search(request: SearchVacanciesRequest): Promise<SearchVacanciesResponse> {
        const response = await apiClient.get<SearchVacanciesResponse>(`${this.route}?${toQueryString(request)}`);

        return response.data;
    }
}

export default SearchService;
