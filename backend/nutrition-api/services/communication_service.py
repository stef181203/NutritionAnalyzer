import os
from huggingface_hub import InferenceClient
from dotenv import load_dotenv
from constants import SUMMARIZE_TEXT_PROMPT

load_dotenv()

class CommunicationService(InferenceClient):
    @staticmethod
    async def analyze_text(text: str):
        first_prompt = SUMMARIZE_TEXT_PROMPT.format(text=text)
        first_response = await CommunicationService.get_summarized_text(first_prompt)
        ingredients_list = first_response.content.strip().split("\n")

        # TODO: implement logic for calling the second service method for nutrition analysis

        return ingredients_list

    @staticmethod
    async def get_summarized_text(prompt: str):
        client = InferenceClient(
            provider="together",
            api_key=os.getenv("HF_TOKEN"),
        )

        completion = client.chat.completions.create(
            model="mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
        )

        return completion.choices[0].message

    @staticmethod
    async def get_nutritional_values(prompt: str):
        # TODO: implement this
        return