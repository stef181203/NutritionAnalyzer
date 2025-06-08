from fastapi import APIRouter
from services.communication_service import CommunicationService

router = APIRouter()

@router.post("/analyze-text")
async def get_results(data: str):
    results = await CommunicationService.analyze_text(data)
    return results