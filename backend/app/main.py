from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.health import router as health_router
from app.api.prediction import router as prediction_router
from app.api.model import router as model_router

app = FastAPI(
    title="Customer Churn Prediction API",
    description="Predict telecom customer churn using a trained Gradient Boosting model.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(prediction_router)
app.include_router(model_router)