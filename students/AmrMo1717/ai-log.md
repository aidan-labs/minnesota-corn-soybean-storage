# AI Log — Harvest to Screen: Build an Ag Data Web Page

Student folder: `students/AmrMo1717/`  
Project: Minnesota Corn & Soybean Storage (MCSS)

## AI prompts and directions used

This log records the substantive prompts and directions used in this conversation. The original assignment brief and MCSS company profile were supplied earlier in the project; if the instructor expects a verbatim transcript of every prompt, paste the exact text of those original materials and any prompts from other AI sessions below rather than treating this summary as a verbatim transcript.

1. **Assignment requirements:** I provided the “Harvest to Screen: Build an Ag Data Web Page” assignment instructions and asked for help completing the individual deliverable. The requirements included a decision question, public agricultural data, a stored local data file, a filter and chart, three `// ME:` comments, an AI log, and a reflection.
2. **Company context:** I provided the MCSS company profile and asked that the project be connected to the team's hypothetical Minnesota corn and soybean storage business.
3. **Repository context:** I provided the team's GitHub repository and asked for step-by-step help placing my individual work in `students/AmrMo1717/`.
4. **Individual project direction:** I asked for guidance through the assignment and GitHub submission process. The selected decision question became: **Which Minnesota counties should MCSS evaluate first for corn storage?**
5. **Reflection prompt:** I asked for help answering the four reflection questions about what happened in class, where data lives and who can change it, downstream users, and what the storefront should store.
6. **Rubric review:** I provided the 20-point grading rubric and asked whether the work met each criterion.
7. **Final revision request:** I asked for all project materials to be updated against the rubric so the submission would be as complete as possible.

## AI output that needed checking / error caught

A visual example generated during the planning stage used illustrative bar heights and a county-count figure. Those were not verified USDA observations and should not be used as source data. I treated them as placeholders and checked the actual figures against the USDA NASS Minnesota county-estimates report before using the stored JSON values.

I checked key values against the report's county table, including:
- Renville, 2023: 54,578,000 bushels
- Redwood, 2023: 41,888,000 bushels
- Renville, 2022: 52,892,000 bushels

I also checked how the report handles dash-marked county values. The dashboard preserves those as `null` (no individual county estimate displayed) rather than silently converting them to zero. Aggregate rows such as “Other counties” and the statewide total are not treated as individual counties.

## Source and verification record

- **Source:** USDA National Agricultural Statistics Service, *Minnesota Ag News — 2023 Corn County Estimates*
- **Source URL:** https://www.nass.usda.gov/Statistics_by_State/Minnesota/Publications/County_Estimates/2024/MN-CtyEst-Corn-02-24.pdf
- **Report date:** February 23, 2024
- **Data snapshot date recorded in JSON:** November 17, 2026
- **Measures:** County corn-for-grain production, in bushels, for crop years 2022 and 2023
- **How checked:** Compared sample county values and the report's notes/footnotes with the local JSON data; checked that the dashboard filters published estimates and does not rank aggregate rows as counties.

## Remaining manual verification

After committing the files, open the page through a web server (not by double-clicking the HTML file) and test both dropdowns. Confirm that the chart and table update when the year and county change. A browser can block a JSON `fetch()` request from a `file://` page; that is a browser security restriction. Also review this log and add any exact prompts used in other AI sessions or omitted from this conversation if “all prompts” is interpreted literally.
