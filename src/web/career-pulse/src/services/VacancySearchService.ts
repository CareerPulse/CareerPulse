import apiClient from "../utils/clients/apiClient.ts";
import {toQueryString} from "../utils/toQueryString.ts";
import {SearchRequest, SearchResponse} from "../models/searchApiModels.ts";

class VacancySearchService {
    private static route: string = '/resume';

    static async search(request: SearchRequest): Promise<SearchResponse> {
        console.log(JSON.stringify(request));

        const response = await apiClient.get<SearchResponse>(`${this.route}?${toQueryString(request)}`);

        return response.data;
    }
}

export default VacancySearchService;
