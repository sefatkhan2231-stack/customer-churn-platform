from app.ml.predictor import predict

def predict_customer(customer):

    prediction, probability = predict(customer)


    return {
        "prediction": "Yes" if prediction == 1 else "No",
        "probability": round(probability, 4)
    }