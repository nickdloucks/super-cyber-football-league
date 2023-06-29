from fastapi import APIRouter
from app.v1.services.teams_svc import get_teams

router = APIRouter()

@router.get('/teams', tags='teams')
async def read_teams():
    return get_teams()