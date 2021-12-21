import requests
from bs4 import BeautifulSoup
import argparse
from job_hunter.models import Job
import datetime,time

x = datetime.datetime.now()



data={
    "skill":"",
    "title":"",
    "description":"",
    "company":"",
    "location":"",
    "link":"",
    "salary":"not-specified",
    "time":x.strftime("%d-%b-%y")

}



# returns clean search with the parameters passed
def scrape_jobs(position,location,skills):
    # print(position+location+skills)
    URL = f"http://api.scraperapi.com?api_key=f9da680341c9f31e2293611231a73bf7&url=https://www.linkedin.com/jobs/search/?keywords={position}&location={location}"
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find(id="main-content")
    job_elems = results.find_all("div", class_="base-card")
    for job_elem in job_elems:
        # keep in mind that each job_elem is another BeautifulSoup object!
        title_elem = job_elem.find("h3", class_="base-search-card__title")
        data["title"]=str(title_elem.text).strip()
        company_elem = job_elem.find("a", class_="hidden-nested-link")
        data["company"]=str(company_elem.text).strip()
        location_elem = job_elem.find("span", class_="job-search-card__location")
        data["location"]=str(location_elem.text).strip().replace("ā","a")
        link_elem=job_elem.find("a", class_="base-card__full-link")['href']
        data["link"]=str(link_elem)
        # print(data)
        page = requests.get("http://api.scraperapi.com?api_key=f9da680341c9f31e2293611231a73bf7&url="+link_elem)

        soup = BeautifulSoup(page.content, "html.parser")
        results_new = soup.find(id="main-content")
        # print(results_new)
        link_body = results_new.find("div", class_="show-more-less-html__markup show-more-less-html__markup--clamp-after-5")
        # description_elem = link_body.find_all("p")
        # print(link_body.text)
        data["description"]=str(link_body.text).strip().replace("\u00a0","").replace("\u0101m","")
        j=Job(Skills=skills,JobTitle=data["title"],JobDescription=data["description"],Salary=data["salary"],URL=data["link"],Province=data["location"],City=data["location"],Address=data["location"],DatePosted=data["time"])
        j.save()
