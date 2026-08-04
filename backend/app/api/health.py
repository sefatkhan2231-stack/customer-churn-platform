from fastapi import APIRouter
import pandas as pd

from app.config import DATA_PATH
from app.config import REPORT_PATH

router = APIRouter(
    tags=["Health"]
)


@router.get("/")
def health_check():
    return {
        "status": "running",
        "message": "Customer Churn Prediction API"
    }


@router.get("/model-info")
def model_info():

    df = pd.read_csv(DATA_PATH)
    report = pd.read_csv(REPORT_PATH)

    model = report[report["Model"] == "Gradient Boosting"]

    accuracy = float(model["Accuracy"].iloc[0])
    roc_auc = float(model["ROC AUC"].iloc[0])

    total_customers = len(df)

    churn_rate = round(
        (df["Churn"] == "Yes").mean() * 100,
        2
    )

    return {
        "model": "Gradient Boosting",
        "accuracy": accuracy,
        "roc_auc": roc_auc,
        "version": "1.0",
        "total_customers": total_customers,
        "churn_rate": churn_rate,
    }