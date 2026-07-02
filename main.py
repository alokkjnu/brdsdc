
"""
Baba Ramdev Smarak Mahavidyalaya Website
VayuAPI + Jinja2 Templating
"""

from vayuapi import VayuAPI, Jinja2Templates, StaticFiles, Request

app = VayuAPI(
    title="BRSM - Baba Ramdev Smarak Mahavidyalaya",
    version="1.0.0",
    description="Official website of Baba Ramdev Smarak Mahavidyalaya, Bartar, Nonahara,Ghazipur (U.P.)",
    docs_enabled=False,
)

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Initialize Jinja2 templates
templates = Jinja2Templates(directory="templates")

# ─────────────────────────────────────────────
# Shared context helper
# ─────────────────────────────────────────────
def base_ctx(request: Request, title: str = "", page: str = "") -> dict:
    return {
        "request": request,
        "site_title": "BRSM",
        "college_name_en": "BABA RAMDEV SMARAK MAHAVIDYALAYA",
        "college_name_hi": "बाबा रामदेव स्मारक महाविद्यालय",
        "college_location_en": "BARTAR, NONAHARA, GHAZIPUR (U.P.)",
        "college_location_hi": "बरतर, नोनहरा, गाज़ीपुर (उ0प्र0)",
        "college_code": "0513",
        "affiliation": "Veer Bahadur Singh Purvanchal University, Jaunpur (U.P.)",
        "affiliation_hi": "वीर बहादुर सिंह पूर्वांचल विश्वविद्यालय जौनपुर (उ0प्र0)",
        "page_title": title,
        "active_page": page,
    }


# ─────────────────────────────────────────────
# HOME
# ─────────────────────────────────────────────
@app.get("/")
async def home(request: Request):
    ctx = base_ctx(request, "Home", "home")
    return templates.TemplateResponse("index.html", ctx)


# ─────────────────────────────────────────────
# ABOUT US
# ─────────────────────────────────────────────
@app.get("/about")
async def about(request: Request):
    ctx = base_ctx(request, "About the College", "about")
    ctx["sub_page"] = "about"
    return templates.TemplateResponse("about/about.html", ctx)

@app.get("/about/vision-mission")
async def vision_mission(request: Request):
    ctx = base_ctx(request, "Vision & Mission", "about")
    ctx["sub_page"] = "vision"
    return templates.TemplateResponse("about/vision_mission.html", ctx)

@app.get("/about/aishe")
async def aishe(request: Request):
    ctx = base_ctx(request, "AISHE Certificate", "about")
    ctx["sub_page"] = "aishe"
    return templates.TemplateResponse("about/aishe.html", ctx)

@app.get("/about/development-plan")
async def development_plan(request: Request):
    ctx = base_ctx(request, "College Development Plan", "about")
    ctx["sub_page"] = "devplan"
    return templates.TemplateResponse("about/development_plan.html", ctx)

@app.get("/about/affiliation")
async def affiliation(request: Request):
    ctx = base_ctx(request, "Affiliation University", "about")
    ctx["sub_page"] = "affiliation"
    return templates.TemplateResponse("about/affiliation.html", ctx)

@app.get("/about/accreditation")
async def accreditation(request: Request):
    ctx = base_ctx(request, "Accreditation Status", "about")
    ctx["sub_page"] = "accreditation"
    return templates.TemplateResponse("about/accreditation.html", ctx)

@app.get("/about/facilities")
async def facilities(request: Request):
    ctx = base_ctx(request, "Facilities", "about")
    ctx["sub_page"] = "facilities"
    return templates.TemplateResponse("about/facilities.html", ctx)


# ─────────────────────────────────────────────
# ADMINISTRATION
# ─────────────────────────────────────────────
@app.get("/admin-msg/principal")
async def principal_msg(request: Request):
    ctx = base_ctx(request, "Principal's Message", "admin_msg")
    ctx["sub_page"] = "principal"
    return templates.TemplateResponse("administration/principal.html", ctx)

@app.get("/admin-msg/manager")
async def manager_msg(request: Request):
    ctx = base_ctx(request, "Manager's Message", "admin_msg")
    ctx["sub_page"] = "manager"
    return templates.TemplateResponse("administration/manager.html", ctx)

@app.get("/admin-msg/director")
async def director_msg(request: Request):
    ctx = base_ctx(request, "Director's Message", "admin_msg")
    ctx["sub_page"] = "director"
    return templates.TemplateResponse("administration/director.html", ctx)


# ─────────────────────────────────────────────
# ACADEMIC
# ─────────────────────────────────────────────
@app.get("/academic/programmes")
async def programmes(request: Request):
    ctx = base_ctx(request, "Academic Programmes", "academic")
    ctx["sub_page"] = "programmes"
    return templates.TemplateResponse("academic/programmes.html", ctx)

@app.get("/academic/examination")
async def examination(request: Request):
    ctx = base_ctx(request, "Examination", "academic")
    ctx["sub_page"] = "examination"
    return templates.TemplateResponse("academic/examination.html", ctx)

@app.get("/academic/statutes")
async def statutes(request: Request):
    ctx = base_ctx(request, "Statutes & Ordinances", "academic")
    ctx["sub_page"] = "statutes"
    return templates.TemplateResponse("academic/statutes.html", ctx)

@app.get("/academic/library")
async def library(request: Request):
    ctx = base_ctx(request, "Library", "academic")
    ctx["sub_page"] = "library"
    return templates.TemplateResponse("academic/library.html", ctx)

@app.get("/academic/calendar")
async def academic_calendar(request: Request):
    ctx = base_ctx(request, "Academic Calendar", "academic")
    ctx["sub_page"] = "calendar"
    return templates.TemplateResponse("academic/calendar.html", ctx)


# ─────────────────────────────────────────────
# ADMISSION & FEES
# ─────────────────────────────────────────────
@app.get("/admission/process")
async def admission_process(request: Request):
    ctx = base_ctx(request, "Admission Process", "admission")
    ctx["sub_page"] = "process"
    return templates.TemplateResponse("admission/process.html", ctx)

@app.get("/admission/fee-structure")
async def fee_structure(request: Request):
    ctx = base_ctx(request, "Fee Structure", "admission")
    ctx["sub_page"] = "fee"
    return templates.TemplateResponse("admission/fee_structure.html", ctx)

@app.get("/admission/reservation-roster")
async def reservation_roster(request: Request):
    ctx = base_ctx(request, "Reservation Roster", "admission")
    ctx["sub_page"] = "roster"
    return templates.TemplateResponse("admission/reservation_roster.html", ctx)

@app.get("/admission/labs-infra")
async def labs_infra(request: Request):
    ctx = base_ctx(request, "Labs & Infrastructure", "admission")
    ctx["sub_page"] = "labs"
    return templates.TemplateResponse("admission/labs_infra.html", ctx)

@app.get("/admission/library")
async def admission_library(request: Request):
    ctx = base_ctx(request, "Library", "admission")
    ctx["sub_page"] = "library"
    return templates.TemplateResponse("admission/library.html", ctx)

@app.get("/admission/fee-refund")
async def fee_refund(request: Request):
    ctx = base_ctx(request, "Fee Refund Policy", "admission")
    ctx["sub_page"] = "refund"
    return templates.TemplateResponse("admission/fee_refund.html", ctx)


# ─────────────────────────────────────────────
# STUDENT LIFE
# ─────────────────────────────────────────────
@app.get("/student/nss")
async def nss(request: Request):
    ctx = base_ctx(request, "NSS", "student")
    ctx["sub_page"] = "nss"
    return templates.TemplateResponse("student/nss.html", ctx)

@app.get("/student/sports")
async def sports(request: Request):
    ctx = base_ctx(request, "Sports & Curriculum", "student")
    ctx["sub_page"] = "sports"
    return templates.TemplateResponse("student/sports.html", ctx)

@app.get("/student/training")
async def training(request: Request):
    ctx = base_ctx(request, "Training Program", "student")
    ctx["sub_page"] = "training"
    return templates.TemplateResponse("student/training.html", ctx)

@app.get("/student/scholarship")
async def scholarship(request: Request):
    ctx = base_ctx(request, "Scholarship", "student")
    ctx["sub_page"] = "scholarship"
    return templates.TemplateResponse("student/scholarship.html", ctx)

@app.get("/student/healthcare")
async def healthcare(request: Request):
    ctx = base_ctx(request, "Health Care", "student")
    ctx["sub_page"] = "healthcare"
    return templates.TemplateResponse("student/healthcare.html", ctx)


# ─────────────────────────────────────────────
# INFORMATION
# ─────────────────────────────────────────────
@app.get("/info/rti")
async def rti_info(request: Request):
    ctx = base_ctx(request, "Right to Information Act", "info")
    ctx["sub_page"] = "rti"
    return templates.TemplateResponse("info/rti.html", ctx)

@app.get("/info/circulars")
async def circulars(request: Request):
    ctx = base_ctx(request, "Circulars & Notices", "info")
    ctx["sub_page"] = "circulars"
    return templates.TemplateResponse("info/circulars.html", ctx)

@app.get("/info/announcements")
async def announcements(request: Request):
    ctx = base_ctx(request, "Announcements", "info")
    ctx["sub_page"] = "announcements"
    return templates.TemplateResponse("info/announcements.html", ctx)

@app.get("/info/newsletter")
async def newsletter(request: Request):
    ctx = base_ctx(request, "News Letter", "info")
    ctx["sub_page"] = "newsletter"
    return templates.TemplateResponse("info/newsletter.html", ctx)

@app.get("/info/events")
async def events(request: Request):
    ctx = base_ctx(request, "Events", "info")
    ctx["sub_page"] = "events"
    return templates.TemplateResponse("info/events.html", ctx)


# ─────────────────────────────────────────────
# FACULTY
# ─────────────────────────────────────────────
@app.get("/faculty")
async def faculty(request: Request):
    ctx = base_ctx(request, "Faculty", "faculty")
    return templates.TemplateResponse("faculty.html", ctx)


# ─────────────────────────────────────────────
# GALLERY
# ─────────────────────────────────────────────
@app.get("/gallery")
async def gallery(request: Request):
    ctx = base_ctx(request, "Gallery", "gallery")
    return templates.TemplateResponse("gallery.html", ctx)


# ─────────────────────────────────────────────
# CONTACT
# ─────────────────────────────────────────────
@app.get("/contact")
async def contact(request: Request):
    ctx = base_ctx(request, "Contact Us", "contact")
    return templates.TemplateResponse("contact.html", ctx)


# ─────────────────────────────────────────────
# RTI
# ─────────────────────────────────────────────
@app.get("/rti")
async def rti(request: Request):
    ctx = base_ctx(request, "Right to Information", "rti")
    return templates.TemplateResponse("rti.html", ctx)


# ─────────────────────────────────────────────
# ANTI-RAGGING
# ─────────────────────────────────────────────
@app.get("/anti-ragging")
async def anti_ragging(request: Request):
    ctx = base_ctx(request, "Anti-Ragging", "anti_ragging")
    return templates.TemplateResponse("anti_ragging.html", ctx)


# ─────────────────────────────────────────────
# RUN
# ─────────────────────────────────────────────
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8009, reload=True)
