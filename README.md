# Full Stack E-commerce Application

This repository contains a complete e-commerce application with separate frontend and backend components, each with their own containerization and deployment configurations.

## 📁 Project Structure

```
FullStack/
├── ecom-frontend/           # React frontend application
│   ├── Dockerfile          # Frontend container configuration
│   ├── nginx.conf          # Nginx configuration for production
│   ├── docker-compose.yml  # Frontend service (Docker)
│   ├── podman-compose.yml  # Frontend service (Podman)
│   └── src/                # React source code
├── ecom-backend/           # Node.js backend application
│   ├── Dockerfile          # Backend container configuration
│   ├── docker-compose.yml  # Backend service (Docker)
│   ├── podman-compose.yml  # Backend service (Podman)
│   ├── deploy.sh          # Podman deployment script
│   ├── k8s/               # Kubernetes manifests
│   │   ├── deploy.sh      # Kubernetes deployment script
│   │   ├── README.md      # Kubernetes documentation
│   │   └── *.yaml         # Kubernetes manifests
│   └── src/               # Backend source code
└── README.md              # This file
```

## 🚀 Quick Start

### Frontend (React)
```bash
cd ecom-frontend

# Using Docker
docker-compose up -d

# Using Podman
podman-compose up -d

# Access at: http://localhost:3000
```

### Backend (Node.js)
```bash
cd ecom-backend

# Using Docker
docker-compose up -d

# Using Podman
podman-compose up -d

# Access API at: http://localhost:4201
```

### Kubernetes Deployment
```bash
cd ecom-backend/k8s
./deploy.sh
```

## 📚 Documentation

- **Frontend**: See `ecom-frontend/` for React application details
- **Backend**: See `ecom-backend/README.md` for API documentation
- **Kubernetes**: See `ecom-backend/k8s/README.md` for K8s deployment guide

## 🛠️ Technologies Used

- **Frontend**: React, nginx
- **Backend**: Node.js, Express, MongoDB
- **Containerization**: Docker, Podman
- **Orchestration**: Kubernetes
- **Database**: MongoDB

## 🔧 Development

Each component can be developed and deployed independently:

1. **Frontend**: React development server with hot reload
2. **Backend**: Node.js development with nodemon
3. **Database**: MongoDB with persistent storage
4. **Production**: Containerized with nginx (frontend) and optimized Node.js (backend)

## 📄 License

This project is licensed under the MIT License. 