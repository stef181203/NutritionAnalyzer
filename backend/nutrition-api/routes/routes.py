from fastapi import APIRouter
from models.schemas import TextInputRequest
from services.communication_service import CommunicationService

router = APIRouter()

@router.post("/analyze-text")
async def get_results(data: TextInputRequest):
    results = await CommunicationService.analyze_text(data.text)
    return results