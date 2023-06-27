from fastapi import FastAPI
# import sqlite3
# import hashlib

scfl_server = FastAPI()

@scfl_server.get("/")
async def root():
    return {"message": "This is the SCFL server"}        


