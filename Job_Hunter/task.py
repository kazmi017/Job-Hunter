import requests

url = "http://127.0.0.1:8000/sc/"


response = requests.request("GET", url)

print(response.text)