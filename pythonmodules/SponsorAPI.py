import uvicorn
from fastapi import FastAPI, Response

app = FastAPI()

@app.get("/SponsorAPI")
async def root():
    with open("./Sponsors.json", "r") as file:
        return Response(content = file.read())

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8004)