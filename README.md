# Customer Churn Prediction Platform

An end-to-end Machine Learning web application that predicts customer churn using customer demographic and service information.

The project includes:

- Machine Learning model training
- Data preprocessing
- REST API with FastAPI
- Interactive React dashboard
- Model performance visualization
- Customer churn prediction
- Deployment-ready architecture

---

## Live Demo

**Frontend**

[https://your-vercel-url.vercel.app](https://customer-churn-platform-mu.vercel.app/)

**Backend API**

[https://your-render-url.onrender.com](https://customer-churn-platform-wg9x.onrender.com)

---

# Features

- Customer Churn Prediction
- Interactive Dashboard
- Feature Importance Visualization
- Model Comparison
- Prediction Probability
- FastAPI REST API
- React + TypeScript Frontend
- Responsive UI
- Deployment on Vercel & Render

---

# Tech Stack

## Machine Learning

- Python
- Pandas
- NumPy
- Scikit-learn
- XGBoost
- Imbalanced-learn (SMOTE)
- Joblib

## Backend

- FastAPI
- Uvicorn
- Pydantic

## Frontend

- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Axios
- Recharts
- React Icons

---

# Project Structure

```
customer-churn-platform/

│
├── backend/
│   ├── app/
│   │
│   ├── datasets/
│   ├── notebooks/
│   ├── saved_models/
│   ├── requirements.txt
│   └── main.py
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── README.md
└── docker-compose.yml
```

---

# Machine Learning Pipeline

1. Load Dataset
2. Data Cleaning
3. Exploratory Data Analysis
4. Feature Engineering
5. Train/Test Split
6. Handle Class Imbalance using SMOTE
7. Train Multiple Models
8. Hyperparameter Tuning
9. Evaluate Models
10. Save Best Model
11. Deploy Model

---

# Dataset

Dataset Used:

IBM Telco Customer Churn Dataset

Features include:

- Gender
- Senior Citizen
- Partner
- Dependents
- Tenure
- Phone Service
- Internet Service
- Contract
- Monthly Charges
- Total Charges

Target:

```
Churn
```

---

# Model Performance

| Model | Accuracy | ROC-AUC |
|--------|----------|----------|
| Logistic Regression | 79% | 0.82 |
| Random Forest | 80% | 0.84 |
| Gradient Boosting | 80% | 0.84 |
| XGBoost | 81% | 0.85 |

Best Model:

```
Gradient Boosting
```

---

# API Endpoints

## Health Check

```
GET /
```

Response

```json
{
    "status":"running",
    "message":"Customer Churn Prediction API"
}
```

---

## Predict Churn

```
POST /predict
```

Request

```json
{
  "gender":"Male",
  "SeniorCitizen":0,
  "Partner":"Yes",
  "Dependents":"No",
  "tenure":12,
  "PhoneService":"Yes",
  "MultipleLines":"No",
  "InternetService":"Fiber optic",
  "OnlineSecurity":"No",
  "OnlineBackup":"Yes",
  "DeviceProtection":"Yes",
  "TechSupport":"No",
  "StreamingTV":"Yes",
  "StreamingMovies":"Yes",
  "Contract":"Month-to-month",
  "PaperlessBilling":"Yes",
  "PaymentMethod":"Electronic check",
  "MonthlyCharges":89.5,
  "TotalCharges":1200.75
}
```

Response

```json
{
    "prediction":"Yes",
    "probability":0.5642
}
```

---

## Model Information

```
GET /model-info
```

---

## Feature Importance

```
GET /feature-importance
```

---

## Model Comparison

```
GET /model-comparison
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/customer-churn-platform.git

cd customer-churn-platform
```

---

# Backend Setup

```bash
cd backend

python -m venv .venv
```

Windows

```bash
.venv\Scripts\activate
```

Linux/Mac

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run API

```bash
uvicorn app.main:app --reload
```

API

```
http://localhost:8000
```

Swagger

```
http://localhost:8000/docs
```

---

# Frontend Setup

```bash
cd frontend

npm install
```

Run

```bash
npm run dev
```

Application

```
http://localhost:5173
```

---

# Deployment

Frontend

- Vercel

Backend

- Render

---

# Future Improvements

- SHAP Explainability
- Customer CSV Upload
- Batch Prediction
- Authentication
- PostgreSQL Integration
- Docker Deployment
- CI/CD with GitHub Actions
- Model Retraining Pipeline

---

# Screenshots

## Dashboard

_Add screenshot here_

---

## Prediction Form

_Add screenshot here_

---

## Prediction Result

_Add screenshot here_

---

## Feature Importance

_Add screenshot here_

---

## Model Comparison

_Add screenshot here_

---

# Author

**Md. Sefat Khan**

GitHub

[https://github.com/yourusername](https://github.com/sefatkhan2231-stack/customer-churn-platform.git)

LinkedIn

www.linkedin.com/in/sefat-khan-44296b2b8

---

# License

This project is licensed under the MIT License.
