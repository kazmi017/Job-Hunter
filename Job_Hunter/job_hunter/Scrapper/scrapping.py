import requests
from bs4 import BeautifulSoup
import datetime

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
def scrape_jobs():
    URL = f"http://api.scraperapi.com?api_key=f9da680341c9f31e2293611231a73bf7&url=https://pk.indeed.com/jobs?q=android%20developer&l=Islamabad"
    page = requests.get(URL)
    # print(page.text)
    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find(id="resultsCol")
    result=results.find(id="mosaic-zone-jobcards")
    # print(result.text)
    job_elems = result.find_all("div", class_="job_seen_beacon")
    for job_elem in job_elems:
        # keep in mind that each job_elem is another BeautifulSoup object!
        title_elem = job_elem.find("div", class_="heading4 color-text-primary singleLineTitle tapItem-gutter")
        title_elem=str(title_elem.text).replace("new","")
        data["title"]=title_elem
        print(data["title"])
    #     company_elem = job_elem.find("a", class_="hidden-nested-link")
    #     data["company"]=str(company_elem.text).strip()
    #     location_elem = job_elem.find("span", class_="job-search-card__location")
    #     data["location"]=str(location_elem.text).strip()
    #     link_elem=job_elem.find("a", class_="base-card__full-link")['href']
    #     data["link"]=str(link_elem)
    #     # print(data)
    #     page = requests.get(link_elem)
    #     soup = BeautifulSoup(page.content, "html.parser")
    #     results_new = soup.find(id="main-content")
    #     # print(results_new)
    #     link_body = results_new.find("div", class_="show-more-less-html__markup show-more-less-html__markup--clamp-after-5")
    #     # description_elem = link_body.find_all("p")
    #     # print(link_body.text)
    #     data["description"]=str(link_body.text).strip().replace("\u00a0","").replace("\u0101m","")
    #     j=Job(JobTitle=data["title"],JobDescription=data["description"],Salary=data["salary"],URL=data["link"],Province=data["location"],City=data["location"],Address=data["location"],DatePosted=data["time"])
    #     j.save()

scrape_jobs()