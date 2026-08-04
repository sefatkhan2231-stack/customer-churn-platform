from pathlib import Path

from dotenv import load_dotenv

import os

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = BASE_DIR / os.getenv(
    "MODEL_PATH",
    "saved_models/best_model.pkl",
)

DATA_PATH = BASE_DIR / "datasets" / "processed" / "cleaned_telco2.csv"

REPORT_PATH = BASE_DIR / "reports" / "model_results.csv"

FEATURE_PATH = BASE_DIR / "reports" / "featureImportance.csv"

UPLOAD_DIR = BASE_DIR / os.getenv(
    "UPLOAD_DIR",
    "uploads",
)

UPLOAD_DIR.mkdir(exist_ok=True)