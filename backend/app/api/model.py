from fastapi import APIRouter
import pandas as pd

from app.config import DATA_PATH
from app.config import REPORT_PATH
from app.config import FEATURE_PATH

df = pd.read_csv(DATA_PATH)
report_df = pd.read_csv(REPORT_PATH)
feature_df = pd.read_csv(FEATURE_PATH)

top_feature = (
    feature_df
    .sort_values("Importance", ascending=False)
    .head(5)
    .rename(columns={"Feature": "feature", "Importance": "importance"})
)

model = report_df[report_df["Model"] == "Gradient Boosting"]

router = APIRouter()


@router.get("/model-info")
def model_info():

    accuracy = float(model["Accuracy"].iloc[0])
    roc_auc = float(model["ROC AUC"].iloc[0])
    
    total_customers = len(df)
    
    churn_rate = round(
        (df["Churn"] == "Yes").mean() * 100,
        2
    )

    return {

        "accuracy":accuracy,

        "roc_auc":roc_auc,

        "total_customers":total_customers,

        "churn_rate":churn_rate

    }


@router.get("/feature-importance")
def feature_importance():

    return top_feature.to_dict(orient="records")


@router.get("/report")
def report():

    return report_df.to_dict(orient="records")