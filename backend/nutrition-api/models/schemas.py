from pydantic import BaseModel

class TextInputRequest(BaseModel):
    text: str