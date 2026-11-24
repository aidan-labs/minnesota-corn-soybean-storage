# Individual Ag Data Assignment — OPMT 375

**Student:** Jonathan Le  
**Team/Company:** Minnesota Corn & Soybean Storage (MCSS)  
**SCOR Pillar:** DELIVER

## Decision Question

How can historical soybean production inform MCSS grain-handling and delivery planning?

## Project Overview

This interactive webpage analyzes historical Minnesota soybean production from 2015 through 2025 to support preliminary grain-handling and delivery planning for MCSS.

The dashboard allows users to select a year, examine annual soybean production, compare year-over-year percentage changes, and evaluate production levels against the historical average.

These insights can help MCSS anticipate potential changes in grain-handling workload, staffing requirements, facility readiness, and inventory release operations.

## Data Source

USDA National Agricultural Statistics Service (NASS) — Quick Stats Database.

**Source:** https://quickstats.nass.usda.gov/results/B71D223A-77F9-3919-84E2-D624D3E2FF9A

- **Commodity:** Soybeans
- **Geographic Area:** Minnesota
- **Time Period:** 2015–2025
- **Measurement Unit:** Bushels
- **Reporting Period:** YEAR
- **Download Date:** November 19, 2026
- **Number of Observations:** 11 annual production records

The original dataset contained 54 records, including annual production estimates and monthly forecast observations. The dataset was cleaned to retain one annual production observation for each year.

The cleaned dataset is stored locally within the project folder as `minnesota_soybean_production.csv`.

## Dashboard Features

- Interactive year-selection dropdown.
- Annual soybean production displayed in millions of bushels.
- Year-over-year percentage changes.
- Historical average production.
- Interactive historical production bar chart.
- Business interpretation relevant to MCSS grain-handling and delivery planning.

## Files

| File                               | Description                                                                                     |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| `index.html`                       | Interactive soybean production dashboard, calculations, visualizations, and code documentation. |
| `minnesota_soybean_production.csv` | Cleaned USDA soybean production dataset used by the webpage.                                    |
| `ai-log.md`                        | AI prompt record, development process, technical corrections, and verification notes.           |
| `README.md`                        | Project overview, data source, file descriptions, and operating instructions.                   |

## Running the Page

The webpage uses JavaScript's `fetch()` function to retrieve the saved CSV file. The retrieved data is temporarily stored in the browser's memory and used to generate dashboard calculations and visualizations.

Access the published dashboard through GitHub Pages:

https://aidan-labs.github.io/minnesota-corn-soybean-storage/students/jonathan.le/

Alternatively, the webpage can be run using a local web server, such as VS Code Live Server.

Opening `index.html` directly through a `file://` path may prevent the browser from retrieving the CSV file due to browser security restrictions.

## Important Limitation

Historical statewide soybean production is a broad agricultural supply indicator, not a direct measure of MCSS inventory, storage demand, shipment volumes, or customer pickup schedules.

Although historical production trends can support preliminary operational planning, specific delivery decisions would require additional facility-level information, including available inventory, grain-handling capacity, customer release requests, staffing availability, and scheduled pickups.

The dashboard should therefore be used as a supporting decision-making tool rather than a direct measure of MCSS delivery performance.
