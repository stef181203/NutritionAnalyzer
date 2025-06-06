from fastapi import APIRouter
from models.schemas import TextInputRequest

router = APIRouter()

@router.post("/analyze-text")
async def get_results(data: TextInputRequest):
    # TODO: Implement service logic for communicating with a free online model
    return data