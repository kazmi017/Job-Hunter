import requests
from bs4 import BeautifulSoup
import json

data={"title":""}


def p1():
    URL = "https://pk.linkedin.com/jobs/search?keywords=&location=Pakistan&locationId=&geoId=101022442&f_TPR=&f_PP=102866583&position=1&pageNum=0"
    page = requests.get(URL)



    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find(id="main-content")
    job_elements = results.find_all("div", class_="base-card base-card--link base-search-card base-search-card--link job-search-card")


    for job_element in job_elements:
        title_element = job_element.find("h3", class_="base-search-card__title")
        company_element = job_element.find("h3", class_="base-search-card__subtitle")
        location_element = job_element.find("p", class_="job-search-card__location")
        data["title"]=str(title_element.text).strip()


def p2():
    URL = "https://pk.linkedin.com/jobs/search?keywords=flutter&location=Pakistan&locationId=&geoId=101022442&f_TPR=&f_PP=102866583&position=1&pageNum=1"
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find(id="main-content")
    job_elements = results.find_all("div", class_="base-card base-card--link base-search-card base-search-card--link job-search-card")


    for job_element in job_elements:
        title_element = job_element.find("h3", class_="base-search-card__title")
        company_element = job_element.find("h3", class_="base-search-card__subtitle")
        location_element = job_element.find("p", class_="job-search-card__location")
        data["title"]=str(title_element.text).strip()

def p3():
    URL = "https://pk.linkedin.com/jobs/search?keywords=react&location=Pakistan&locationId=&geoId=101022442&f_TPR=&f_PP=102866583&position=1&pageNum=2"
    page = requests.get(URL)
    
    
    
    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find(id="main-content")
    job_elements = results.find_all("div", class_="base-card base-card--link base-search-card base-search-card--link job-search-card")
    
    
    for job_element in job_elements:
        title_element = job_element.find("h3", class_="base-search-card__title")
        company_element = job_element.find("h3", class_="base-search-card__subtitle")
        location_element = job_element.find("p", class_="job-search-card__location")
        data["title"]=str(title_element.text).strip()

p1()
p2()
p3()
print(data)