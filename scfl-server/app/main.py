from fastapi import FastAPI
from app.v1.routes import teams_rte
# import sqlite3
# import hashlib

scfl_server = FastAPI()
scfl_server.include_router(teams_rte.router)

@scfl_server.get("/")
async def root():
    return {"message": "This is the SCFL server"}        


