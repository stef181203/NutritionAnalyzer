from fastapi import HTTPException

from fastapi import APIRouter

from models.schemas import TextRequest
from services.communication_service import CommunicationService
from utils.helpers import InputHelper

router = APIRouter()

@router.post("/analyze-text")
async def get_results(data: TextRequest):
    if not InputHelper.is_valid_ingredient_input(data.text):
        raise HTTPException(status_code=422, detail="Input is not a valid recipe or list of ingredients")

    results = await CommunicationService.analyze_text(data.text)
    return results