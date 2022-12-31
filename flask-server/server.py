from flask import Flask

app = Flask(__name__)

@app.route("/test")
def test():
    return {"test": ["Test1", "Test2", "Test3"]}

if __name__ == "__main__":
    #serving on port 8000 because macOS Airplay runs on 5000
    app.run(host="localhost", port=8000,debug=True)