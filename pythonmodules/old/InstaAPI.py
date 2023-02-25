import uvicorn
from fastapi import FastAPI, Response

app = FastAPI()

def read_file():
    with open("./InstaURLS.json", "r") as f:
        return f.read()

@app.get("/InstaAPI")
async def read_insta_urls():
    content = read_file()
    return Response(content=content)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8003)
