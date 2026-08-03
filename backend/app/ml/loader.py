import joblib

from app.config import MODEL_PATH

model = joblib.load(MODEL_PATH)