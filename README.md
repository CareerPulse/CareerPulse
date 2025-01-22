# CareerPulse

![CareerPulse Logo]()

**CareerPulse** is a modern job aggregation platform designed to help job seekers find relevant vacancies from multiple
sources (e.g., hh.ru, zarplata.ru) in one place. The platform provides personalized job recommendations, real-time
notifications, and a seamless user experience.

---

## Features

- **Job Aggregation**: Fetch and unify job postings from multiple sources.
- **Personalized Search**: Filter jobs by location, salary, and skills.
- **Favorites**: Save jobs for later viewing.
- **Real-time Notifications**: Get notified about new job postings that match your criteria.
- **User-friendly Interface**: Clean and intuitive design for easy navigation.

---

## Technologies

- **Backend**: Java (Spring Boot), .NET (ASP.NET Core)
- **Frontend**: React.js
- **Database**: PostgreSQL
- **API Integration**: REST, gRPC
- **Containerization**: Docker, Docker Compose

---

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

### Running the Project with Docker Compose

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/CareerPulse.git
   cd CareerPulse
   ```

2. **Set up environment variables**:
    - Create a `.env` file in the root directory.
    - Add the required environment variables (e.g., database credentials, API keys):
      ```env
      POSTGRES_USER=your_db_user
      POSTGRES_PASSWORD=your_db_password
      POSTGRES_DB=careerpulse
      ```

3. **Build and start the containers**:
   ```bash
   docker-compose up --build
   ```

4. **Access the application**:
    - Backend API: `http://localhost:8080`
    - Frontend: `http://localhost:3000`
    - PostgreSQL: `localhost:5432`
    - Redis: `localhost:6379`

---

## Project Structure

```
CareerPulse/
├── backend/                # Backend services (Java, .NET)
│   ├── careerpulse-api/    # REST API
│   ├── careerpulse-grpc/   # gRPC services
├── frontend/               # Frontend application
├── docker-compose.yml      # Docker Compose configuration
├── .env                    # Environment variables
└── README.md               # Project documentation
```

---

## API Documentation

The API documentation is available at `http://localhost:8080/swagger/index.html` after starting the backend service.

---

## Acknowledgments

- Thanks to [hh.ru](https://hh.ru) and [zarplata.ru](https://zarplata.ru) for their APIs.
