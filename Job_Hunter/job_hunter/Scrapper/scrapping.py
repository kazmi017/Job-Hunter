import requests
from bs4 import BeautifulSoup
from job_hunter.models import Job
import datetime,time

x = datetime.datetime.now()



data={
    "title":"",
    "description":"",
    "company":"",
    "location":"",
    "link":"",
    "salary":"not-specified",
    "time":x.strftime("%d-%b-%y")

}



# returns clean search with the parameters passed
def scrape_jobs_indeed(position,location,skills):
    URL = f"http://api.scraperapi.com?api_key=08ce1d9dbacc70a7e3eb189a637b1a7c&url=https://pk.indeed.com/jobs?q={position}&l={location}&fromage=1"
    page = requests.get(URL)
    # print(page.text)
    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find(id="resultsCol")
    result=results.find(id="mosaic-zone-jobcards")
    # print(result.text)
    job_elems = result.find_all("a", class_="sponTapItem")
    for job_elem in job_elems:
        # keep in mind that each job_elem is another BeautifulSoup object!
        title_elem = job_elem.find("div", class_="heading4 color-text-primary singleLineTitle tapItem-gutter")
        title_elem=str(title_elem.text).replace("new","")
        data["title"]=title_elem
        company_elem = job_elem.find("span", class_="companyName")
        data["company"]=str(company_elem.text).strip()

        location_elem = job_elem.find("div", class_="companyLocation")
        data["location"]=str(location_elem.text).strip()
        link_elem=job_elem['href']
        data["link"]="https://pk.indeed.com"+str(link_elem)
        description_elem = job_elem.find("div", class_="job-snippet")
        data["description"]=str(description_elem.text).strip()
        j=Job(Skills=skills,JobTitle=data["title"],JobDescription=data["description"],Salary=data["salary"],URL=data["link"],Province=data["location"],City=data["location"],Address=data["location"],DatePosted=data["time"])
        j.save()


