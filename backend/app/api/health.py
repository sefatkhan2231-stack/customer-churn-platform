from fastapi import APIRouter

router = APIRouter(
    prefix="",
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
    return {
        "model": "Gradient Boosting",
        "accuracy": 0.80,
        "roc_auc": 0.84,
        "version": "1.0"
    }