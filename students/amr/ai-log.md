# AI Log — Harvest to Screen: Build an Ag Data Web Page

**Student folder:** `students/AmrMo1717/`  
**Project:** Minnesota Corn & Soybean Storage (MCSS)  
**Decision question:** Which Minnesota counties should MCSS evaluate first for corn storage?

## Prompt Record

The assignment instructed me to copy each prompt sent to the LLM and note anything it got wrong. This log records the prompts and directions available from the project conversation. Where an earlier prompt is represented as a summary rather than an exact transcript, it is labelled as a summary. I have not invented wording and presented it as verbatim.

### Assignment-Provided Starter Prompt

The assignment supplied this template for the first build prompt:

> Build one self-contained HTML file that answers this question for a Minnesota agriculture supply chain: [your question]. Use this data source: [URL or file name]. The fields I need are: [fields]. Add a dropdown or slider to filter by [county / year / crop] and a chart that updates when I change it. Add comments that explain, in plain English, where the data comes from and where it is stored.

For this project, the completed direction was to answer: **"Which Minnesota counties should MCSS evaluate first for corn storage?"** using the USDA NASS Minnesota 2023 Corn County Estimates report and county corn-for-grain production for 2022 and 2023. The page was to include year and county filters, a chart, and an explanation of the data source and storage location.

### Additional Prompts and Directions Used During the Project

1. **Assignment requirements — summary:** I supplied the "Harvest to Screen: Build an Ag Data Web Page" assignment and asked for help completing the individual deliverable in my own team-repository folder. The work needed a decision question, public agricultural data, a stored local data file, a filter and chart, three `// ME:` comments, an AI log, and a reflection.

2. **Company context — summary:** I supplied the MCSS company profile and asked that the project fit our hypothetical Minnesota corn and soybean grain-storage business. MCSS provides storage services; it does not buy or take ownership of farmers' grain.

3. **Repository and folder — summary:** I supplied the team GitHub repository and asked for step-by-step help placing my individual work in `students/AmrMo1717/`.

4. **Project question and data — summary:** I worked with the assistant to use county corn-for-grain production as a signal for identifying Minnesota counties MCSS could evaluate for corn storage. The chosen years were 2022 and 2023, and the unit was bushels.

5. **Reflection — summary:** I asked for help answering the four assignment reflection questions: what broke or surprised me and the real cause; where the data lives and who can change it; who downstream could act on the page and what they need to trust it; and what the storefront should store for its signal to be trusted next week.

6. **Rubric review — summary:** I supplied the 20-point rubric and asked for a review of the deliverables against the full-credit criteria.

7. **Final revision — summary:** I asked for the project materials to be checked and revised against the assignment requirements and rubric.

8. **Technical verification — summary:** I asked the assistant to check the GitHub files and inspect whether the dashboard referenced the stored JSON, contained the two filters and chart/table logic, and included the three required code-reading comments.

9. **AI-log completeness — summary:** I asked to improve the AI log so it accurately represented the prompts and met the assignment's requirement to include every prompt, an LLM error, and how it was checked.

**Transcript limitation:** The entries above marked "summary" are accurate summaries of the project requests available in this conversation, not claimed verbatim quotations. If I used other AI tools or separate chat sessions, those prompts must be added from those histories; they are not available in this log.

## AI Output That Needed Checking / Error Caught

A visual example generated during the planning stage used illustrative bar heights and a county-count figure. Those were not verified USDA observations and should not be used as source data. I treated them as placeholders and checked the actual figures against the USDA NASS Minnesota county-estimates report before using the stored JSON values.

I checked key values against the report's county table, including:

- Renville, 2023: **54,578,000 bushels**
- Redwood, 2023: **41,888,000 bushels**
- Renville, 2022: **52,892,000 bushels**

I also checked how the report handles dash-marked county values. The dashboard preserves those as `null` (no individual county estimate displayed) rather than silently converting them to zero. Aggregate rows such as "Other counties" and the statewide total are not treated as individual counties.

## Source and Verification Record

- **Source:** USDA National Agricultural Statistics Service, _Minnesota Ag News — 2023 Corn County Estimates_
- **Source URL:** https://www.nass.usda.gov/Statistics_by_State/Minnesota/Publications/County_Estimates/2024/MN-CtyEst-Corn-02-24.pdf
- **Report date:** February 23, 2024
- **Data snapshot date recorded in JSON:** November 17, 2026
- **Measures:** County corn-for-grain production, in bushels, for crop years 2022 and 2023
- **How checked:** Compared sample county values and the report's notes/footnotes with the local JSON data; checked that the dashboard filters published estimates and does not rank aggregate rows as counties.

## Remaining Manual Verification

The HTML and JSON files were checked in the GitHub repository. The dashboard code uses `fetch("./corn-production.json")`, validates the stored county records, populates the county filter, and updates the chart and table when the year or county selection changes.

The page has not yet been confirmed running in a browser through a web server. Opening the HTML directly from a `file://` path may block the JSON fetch; this is a browser security restriction, not proof that the JSON is missing.county change. A browser can block a JSON `fetch()` request from a `file://` page; that is a browser security restriction. Also review this log and add any exact prompts used in other AI sessions or omitted from this conversation if “all prompts” is interpreted literally.
