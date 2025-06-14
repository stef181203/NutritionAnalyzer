from fastapi import HTTPException
from huggingface_hub import InferenceClient
from clients.llm_client import LLMClient
from clients.nutrition_client import NutritionAPIClient
from utils.constants import SUMMARIZE_TEXT_PROMPT
from utils.helpers import InputHelper

class CommunicationService(InferenceClient):
    @staticmethod
    async def analyze_text(text: str):
        first_prompt = SUMMARIZE_TEXT_PROMPT.format(text=text)
        first_response = await CommunicationService.get_summarized_text(first_prompt)
        first_content = first_response.content

        if "no ingredients" in first_content.lower():
            raise HTTPException(status_code=422, detail="Input is not a valid recipe or list of ingredients")

        second_response = await CommunicationService.get_nutritional_values(first_content)
        meal = InputHelper.parse_ingredients(second_response["foods"])

        return meal.model_dump(by_alias=False)

    @staticmethod
    async def get_summarized_text(prompt: str):
        client = LLMClient()
        return client.get_summary(prompt)

    @staticmethod
    async def get_nutritional_values(query: str):
        client = NutritionAPIClient()
        return client.get_nutrition_data(query)