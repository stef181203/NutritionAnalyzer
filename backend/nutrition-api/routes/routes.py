from fastapi import APIRouter

from models.schemas import TextRequest
from services.communication_service import CommunicationService

router = APIRouter()

@router.post("/analyze-text")
async def get_results(data: TextRequest):
    results = await CommunicationService.analyze_text(data.text)
    return results