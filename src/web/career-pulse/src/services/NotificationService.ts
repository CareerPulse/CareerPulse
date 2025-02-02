import apiClient from "../utils/clients/apiClient.ts";
import {NotificationResponse} from "../models/notificationsApiModels.ts";

class NotificationService {
    private static route: string = '/notifications';

    static async getAll(): Promise<NotificationResponse[]> {
        const response = await apiClient.get<NotificationResponse[]>(this.route);

        return response.data;
    }

    static async getAllMock(): Promise<NotificationResponse[]> {
        return [
            {id: 1, message: 'Новое сообщение от работодателя', date: '2025-02-02T10:00:00Z'},
            {id: 2, message: 'Вакансия обновлена', date: '2025-02-01T15:30:00Z'},
            {id: 3, message: 'Приглашение на собеседование', date: '2025-01-31T08:45:00Z'}
        ];
    }
}

export default NotificationService;
