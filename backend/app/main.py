from fastapi import FastAPI

from app.api.health import router as health_router

app = FastAPI(
    title="Customer Churn Prediction API",
    description="Predict telecom customer churn using a trained Gradient Boosting model.",
    version="1.0.0"
)

app.include_router(health_router)