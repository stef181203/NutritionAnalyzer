import os
from huggingface_hub import InferenceClient
from dotenv import load_dotenv

load_dotenv()

class LLMClient:
    def __init__(self):
        self.client = InferenceClient(
            provider="together",
            api_key=os.getenv("HF_TOKEN")
        )

    def get_summary(self, prompt: str):
        completion = self.client.chat.completions.create(
            model="mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages=[{"role": "user", "content": prompt}]
        )
        return completion.choices[0].message