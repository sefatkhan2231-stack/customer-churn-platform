from fastapi import APIRouter

from app.schemas.customer import Customer
from app.schemas.prediction import PredictionResponse

from app.services.prediction_service import predict_customer


router = APIRouter(
    prefix="/predict",
    tags=["Prediction"]
)


@router.post(
    "",
    response_model=PredictionResponse
)

def Predict(customer: Customer):

    result = predict_customer(
        customer.model_dump()
    )

    return result