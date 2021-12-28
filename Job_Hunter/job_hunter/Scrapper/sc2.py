import requests
from bs4 import BeautifulSoup
import datetime,time

x = datetime.datetime.now()



data={
    "skill":"",
    "title":"",
    "description":"",
    "company":"not-specified",
    "location":"not-specified",
    "link":"",
    "salary":"not-specified",
    "time":x.strftime("%d-%b-%y")

}



# returns clean search with the parameters passed
def scrape_jobs_rozee(position,location,skills):
    URL = f"http://api.scraperapi.com?api_key=08ce1d9dbacc70a7e3eb189a637b1a7c&url=https://resume.brightspyre.com/jobs?query={position}"
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find(class_="col-md-6 margin-bottom-twenty margin-top-twenty")
    job_elems = results.find_all("div", class_="col-md-10 padding-top-ten")
    if job_elems:
        for job_elem in job_elems:
            title_elem = job_elem.find("a", class_="text-decoration-none")
            data["title"]=str(title_elem.text).strip()
            location_elem = job_elem.find("li", class_="tags-default")
            if location_elem:
                data["location"]=str(location_elem.text).strip().replace("#","")
            link_elem=job_elem.find("a", class_="text-decoration-none")['href']
            data["link"]="https://resume.brightspyre.com/"+str(link_elem)
            description_elem = job_elem.find("span", class_="text-muted-custom")
            data["description"]=str(description_elem.text).strip()
            print(data)
            j=Job(Skills=skills,JobTitle=data["title"],JobDescription=data["description"],Salary=data["salary"],URL=data["link"],Province=data["location"],City=data["location"],Address=data["location"],DatePosted=data["time"])
            j.save()
