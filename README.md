# TASK-2 🚀 Multi-Container Application using Docker Compose

> A production-style **3-Tier Microservices Application** built with **Docker Compose**, demonstrating container orchestration, networking, environment variables, persistent storage, and reverse proxy configuration.

![Docker](https://img.shields.io/badge/Docker-Compose-blue?logo=docker)
![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?logo=mysql)
![Nginx](https://img.shields.io/badge/Nginx-Latest-brightgreen?logo=nginx)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

# 📖 Project Overview

This project demonstrates how to deploy a **multi-container application** using **Docker Compose** following a standard **3-tier architecture**.

The application consists of:

* 🌐 **Frontend** – NGINX Web Server
* ⚙️ **Backend** – Node.js REST API
* 🗄️ **Database** – MySQL 8.0

The frontend communicates with the backend through an NGINX reverse proxy, while the backend securely connects to the MySQL database over a private Docker network.

---

# 🏗️ Architecture

```text
                    User
                     │
                     ▼
            +----------------+
            |     NGINX      |
            | Frontend (80)  |
            +----------------+
                     │
             Reverse Proxy
                     │
                     ▼
            +----------------+
            | Node.js API    |
            | Backend (3000) |
            +----------------+
                     │
              Docker Network
                     │
                     ▼
            +----------------+
            |    MySQL 8.0   |
            | Database 3306  |
            +----------------+
```

---

# 📂 Project Structure

```text
docker-compose-multicontainer/
│
├── docker-compose.yml
├── .env
├── README.md
│
├── app/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── web/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── index.html
│
└── db/
    └── init.sql
```

---

# ✨ Features

* Docker Compose orchestration
* Three-tier architecture
* Container-to-container communication
* Docker networking
* Environment variables using `.env`
* Persistent MySQL storage
* NGINX Reverse Proxy
* Automatic database initialization
* Named Docker volumes
* Easy deployment with a single command

---

# 🛠️ Technologies Used

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| Docker         | Containerization              |
| Docker Compose | Multi-container orchestration |
| NGINX          | Frontend & Reverse Proxy      |
| Node.js        | Backend API                   |
| Express.js     | REST API Framework            |
| MySQL 8.0      | Relational Database           |

---

# 📋 Prerequisites

Before running this project, ensure you have installed:

* Docker Engine
* Docker Compose
* Git

Verify installation:

```bash
docker --version
docker compose version
```

---

# ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
MYSQL_ROOT_PASSWORD=root123

MYSQL_DATABASE=mydb

MYSQL_USER=devuser

MYSQL_PASSWORD=devpass123
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/<your-username>/docker-compose-multicontainer.git

cd docker-compose-multicontainer
```

---

## Build Containers

```bash
docker compose build
```

---

## Start Application

```bash
docker compose up -d
```

---

## Verify Containers

```bash
docker ps
```

Expected:

```
nginx-web

node-backend

mysql-db
```

---

# 🌍 Access the Application

Frontend

```
http://localhost
```

Backend API

```
http://localhost/api
```

Example Response

```json
{
  "status": "Application Running",
  "database": "Connected",
  "serverTime": "2026-07-29T14:22:51.000Z"
}
```

---

# 🔄 Docker Networking

Docker Compose automatically creates a private network.

Service communication:

```
web
   │
   ▼
app
   │
   ▼
db
```

The backend accesses MySQL using the service name:

```
DB_HOST=db
```

No IP addresses are required.

---

# 💾 Persistent Storage

The database uses a **named Docker volume**.

```yaml
volumes:
  mysql-data:
```

Database data remains available even after containers are removed.

---

# 🧪 Useful Commands

### Build

```bash
docker compose build
```

### Start

```bash
docker compose up -d
```

### Stop

```bash
docker compose down
```

### Restart

```bash
docker compose restart
```

### Logs

```bash
docker compose logs
```

### Backend Logs

```bash
docker compose logs app
```

### Database Logs

```bash
docker compose logs db
```

### Enter Backend Container

```bash
docker compose exec app sh
```

### Enter MySQL

```bash
docker compose exec db mysql -u devuser -p
```

### Remove Everything Including Volumes

```bash
docker compose down -v
```

---

# 🔍 Verify Networking

List Docker Networks

```bash
docker network ls
```

Inspect Network

```bash
docker network inspect <network-name>
```

Ping Database

```bash
docker compose exec app ping db
```

---

# 📸 Expected Output

## Frontend

```
Docker Compose Multi-Container Application

Frontend : NGINX

Backend : Node.js

Database : MySQL
```

## API

```json
{
    "status":"Application Running",
    "database":"Connected"
}
```

---

# 🚀 Future Improvements

* Add Health Checks
* Add Redis Cache
* Add Authentication (JWT)
* Add Docker Secrets
* Add HTTPS using Let's Encrypt
* Add Monitoring with Prometheus & Grafana
* Add CI/CD with GitHub Actions
* Deploy using Kubernetes
* Deploy to AWS, Azure, or GCP
* Add Unit & Integration Tests

---

# 🎯 Learning Objectives

By completing this project you will learn:

* Docker Compose fundamentals
* Multi-container deployments
* Docker networking
* Persistent storage
* Environment variable management
* Reverse proxy configuration
* Container communication
* Production-ready project organization

---

# 📚 References

* Docker Compose
* Docker Networking
* Docker Volumes
* NGINX Reverse Proxy
* Node.js
* Express.js
* MySQL

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

# ⭐ Support

If you found this project helpful:

⭐ Star the repository

🍴 Fork the repository

🛠️ Share your improvements

---

# 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sudheesh K**

---

> ⭐ If this project helped you understand Docker Compose, consider giving it a Star!

