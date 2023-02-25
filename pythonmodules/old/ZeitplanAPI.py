import uvicorn
from fastapi import FastAPI, Response

app = FastAPI()

@app.get("/ZeitplanAPI")
async def root():
    file=open("./Zeitplan.json", "r")
    return Response(content = file.read())

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8007)