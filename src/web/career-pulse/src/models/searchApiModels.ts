// Request and Response Models for API Integration

export type SearchRequest = {
    title: string;
    sorting: string;
};

export type SearchResponse = {
    items: VacancyResponse[];
};

export type VacancyResponse = {
    title: string;
    description: string;
    link: string;
    location: string;
    salary: string;
    experience: string;
    company: string;
};

// Request Parameters Model
// @ts-ignore
type SearchVacanciesRequestOld = {
    page?: number; // Default: 0
    per_page?: number; // Default: 10, Max: 100
    text?: string; // Search text with optional query language
    search_field?: string; // Fields to search in
    experience?: string; // Experience level from /dictionaries
    employment?: string; // Employment type from /dictionaries
    schedule?: string; // Work schedule from /dictionaries
    area?: string; // Region ID from /areas
    metro?: string; // Metro line or station ID from /metro
    professional_role?: string; // Professional role ID from /professional_roles
    industry?: string; // Industry ID from /industries
    employer_id?: string; // Employer ID
    currency?: string; // Currency code from /dictionaries
    salary?: number; // Salary amount
    label?: string; // Vacancy label ID from /dictionaries
    only_with_salary?: boolean; // Default: false
    period?: number; // Days for search period
    date_from?: string; // ISO 8601 date, lower bound
    date_to?: string; // ISO 8601 date, upper bound
    top_lat?: number; // Top latitude for geo-coordinates
    bottom_lat?: number; // Bottom latitude for geo-coordinates
    left_lng?: number; // Left longitude for geo-coordinates
    right_lng?: number; // Right longitude for geo-coordinates
    order_by?: string; // Sorting order from /dictionaries
    sort_point_lat?: number; // Latitude for distance sorting
    sort_point_lng?: number; // Longitude for distance sorting
    clusters?: boolean; // Default: false
    describe_arguments?: boolean; // Default: false
    no_magic?: boolean; // Default: false
    premium?: boolean; // Default: false
    responses_count_enabled?: boolean; // Default: false
    part_time?: string; // Part-time options from /dictionaries
    accept_temporary?: boolean; // Default: false
    locale?: string; // Default: "RU"
    host?: string; // Default: "hh.ru"
};

// Response Models
// @ts-ignore
type SearchVacanciesResponse = {
    items: Vacancy[]; // List of vacancies
    found: number; // Total vacancies found
    pages: number; // Total pages available
    page: number; // Current page
    per_page: number; // Vacancies per page
    clusters?: unknown; // Clusters if requested
    arguments?: Argument[];
};

type Argument = {
    argument: string;
    value: string;
    value_description: string;
    disable_url: string;
};

type VacancySnippet = {
    requirement?: string; // Short description of requirements
    responsibility?: string; // Short description of responsibilities
};

type Salary = {
    from?: number; // Lower bound of salary
    to?: number; // Upper bound of salary
    currency: string; // Currency code
    gross: boolean; // Whether the salary is gross
};

type Employer = {
    id: string; // Employer ID
    name: string; // Employer name
    url: string; // API URL of the employer
    alternate_url: string; // Web URL of the employer
    logo_urls?: EmployerLogoUrl;
    trusted: boolean; // Whether the employer is trusted
};

type EmployerLogoUrl = {
    "90"?: string;
    "240"?: string;
    original?: string;
};

type Address = {
    city?: string;
    street?: string;
    building?: string;
    description?: string;
    lat?: number; // Latitude
    lng?: number; // Longitude
    metro_stations?: AddressMetroStation[];
};

type AddressMetroStation = {
    station_id: string;
    station_name: string;
    line_id: string;
    line_name: string;
    lat: number;
    lng: number;
};

type Vacancy = {
    id: string; // Vacancy ID
    name: string; // Vacancy title
    url: string; // API URL of the vacancy
    alternate_url: string; // Web URL of the vacancy
    published_at: string; // Publication date in ISO 8601
    area: VacancyArea;
    employer: Employer; // Employer details
    salary?: Salary; // Salary details
    address?: Address; // Address details
    snippet: VacancySnippet; // Short descriptions
    schedule?: VacancySchedule;
    professional_roles?: VacancyProfessionalRole[];
    sort_point_distance?: number; // Distance for sorting
    contacts?: VacancyContact;
    experience: VacancyExperience;
    counters: {
        responses: number;
    }
};

type VacancyExperience = {
    id: string;
    name: string;
};

type VacancyContact = {
    name?: string;
    email?: string;
};

type VacancyArea = {
    id: string; // Region ID
    name: string; // Region name
    url: string; // API URL of the region
};

type VacancySchedule = {
    id: string;
    name: string;
};

type VacancyProfessionalRole = {
    id: string;
    name: string;
};
