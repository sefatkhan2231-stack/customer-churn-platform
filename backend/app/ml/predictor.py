import pandas as pd
import numpy as np
import json
from pathlib import Path

from app.ml.loader import model

CONFIG_PATH = Path(__file__).resolve().parents[2] / "saved_models" / "model_config.json"

with open(CONFIG_PATH, "r") as f:
    CONFIG = json.load(f)

MONTHLY_CHARGE_THRESHOLD = CONFIG["decision_threshold"]


SERVICE_COLUMNS = [
    "PhoneService",
    "MultipleLines",
    "OnlineSecurity",
    "OnlineBackup",
    "DeviceProtection",
    "TechSupport",
    "StreamingTV",
    "StreamingMovies",
]

AUTO_PAYMENT_METHODS = [
    "Bank transfer (automatic)",
    "Credit card (automatic)",
]


def engineer_features(df: pd.DataFrame) -> pd.DataFrame:

    #NumServices
    df["NumServices"] = df[SERVICE_COLUMNS].eq("Yes").sum(axis=1)

    #CustomerLoyalty
    def loyalty_group(tenure):
        if tenure <= 12:
            return "New"
        elif tenure <= 48:
            return "Regular"
        else:
            return "Loyal"

    df["CustomerLoyalty"] = df["tenure"].apply(loyalty_group)


    #AutoPayment
    df["AutoPayment"] = (
        df["PaymentMethod"]
        .isin(AUTO_PAYMENT_METHODS)
        .astype(int)
    )

    #PaperlessAutoPay
    df["PaperlessAutoPay"] = (
        (df["PaperlessBilling"] == "Yes")
        & (df["AutoPayment"] == 1)
    ).astype(int)

    #AvgMonthlySpend
    df["AvgMonthlySpend"] = np.where(
        df["tenure"] == 0,
        0,
        df["TotalCharges"] / df["tenure"]
    )

    #HighMonthlyCharge

    df["HighMonthlyCharge"] = (
        df["MonthlyCharges"] > MONTHLY_CHARGE_THRESHOLD
    ).astype(int)

    #HighValueCustomer
    df["HighValueCustomer"] = (
        (df["MonthlyCharges"] > MONTHLY_CHARGE_THRESHOLD)
        & (df["tenure"] > 24)
    ).astype(int)

    return df

def predict(data: dict):

    df = pd.DataFrame([data])
    df = engineer_features(df)

    Prediction = model.predict(df)[0]

    probability = float(
        model.predict_proba(df)[0][1]
    )

    return Prediction, probability