import os
import requests
from fastapi import HTTPException
from dotenv import load_dotenv

load_dotenv()

class NutritionAPIClient:
    def __init__(self):
        self.url = os.getenv("NUTRITIONIX_URL")
        self.headers = {
            "x-app-id": os.getenv("NUTRITIONIX_APP_ID"),
            "x-app-key": os.getenv("NUTRITIONIX_APP_KEY"),
            "Content-Type": "application/json"
        }

    def get_nutrition_data(self, query: str):
        data = {"query": query, "timezone": "US/Eastern"}
        response = requests.post(self.url, json=data, headers=self.headers)
        if response.status_code == 200:
            return response.json()
        else:
            raise HTTPException(status_code=response.status_code, detail="Nutritionix API error")