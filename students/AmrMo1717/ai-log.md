# AI Log — MCSS Agricultural Data Page

Assignment: Harvest to Screen — Build an Ag Data Web Page
Student folder: `students/AmrMo1717/`

## Prompt / direction 1 — assignment brief

I supplied the full assignment instructions headed **“Building a Data Page — Harvest to Screen: Build an Ag Data Web Page.”** The brief required an individual HTML page that answers one decision question with public Minnesota agriculture data, filters and a chart, loads a saved local CSV/JSON copy, includes three `// ME:` comments, and includes an AI log and reflection.

## Prompt / direction 2 — company context

I supplied the MCSS company profile. It describes Minnesota Corn & Soybean Storage as a hypothetical grain-storage provider. Farmers retain ownership of corn and soybeans while MCSS receives, handles, stores, and releases grain. The company does not purchase grain, arrange transportation, or process commodities.

## Prompt / direction 3 — repository

I supplied the team repository URL: https://github.com/aidan-labs/minnesota-corn-soybean-storage/tree/main and clarified that it is the team's repository.

## Prompt / direction 4 — project approach

The AI recommended using county crop production to evaluate potential grain-storage locations. After inspecting the team repository, it selected a county-level corn-for-grain dataset and a year filter. The chosen decision question is: **“Which Minnesota counties should MCSS evaluate first for corn storage?”**

## What the AI got wrong or what needed checking

An early visual mockup used illustrative bar heights and a county-count figure; those were only placeholders and were not USDA observations. They were not used in the final dashboard. I checked the actual values against USDA NASS's Minnesota Ag News report, **2023 Corn County Estimates**, published February 23, 2024. The report identifies Renville as the top 2023 county at 54.6 million bushels and Redwood at 41.9 million bushels. The detailed table reports Renville at 54,578,000 and Redwood at 41,888,000 bushels. The final JSON uses the table figures rather than the rounded summary.

I also checked the report's footnote: a dash means the estimate did not meet publication standards (or represents zero in the report's footnote context). In the dashboard those entries are treated as **no individual county estimate shown** and are excluded from ranking, rather than being assumed to equal zero. The report also includes an “Other counties” aggregate and a Minnesota total; neither is presented as an individual county.

## Data verification

- Source: https://www.nass.usda.gov/Statistics_by_State/Minnesota/Publications/County_Estimates/2024/MN-CtyEst-Corn-02-24.pdf
- Report publication date: February 23, 2024.
- Local data snapshot download/creation date: November 17, 2026.
- Fields stored: county, USDA district, 2022 corn-for-grain production (bushels), and 2023 corn-for-grain production (bushels).
- Verification examples: Renville 2023 = 54,578,000; Redwood 2023 = 41,888,000; Renville 2022 = 52,892,000.
- The HTML reads `corn-production.json` from the same folder. No live API call is needed for the dashboard to work after the files are hosted together.

## Final check still to perform after adding the files to GitHub

Open the page through GitHub Pages or a local web server (such as VS Code Live Server), change the year and county dropdowns, and confirm the chart/table update. A browser may block JSON `fetch()` when the HTML is opened directly with a `file://` URL; that is a browser restriction, not evidence that the JSON is missing.
