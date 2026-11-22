# Individual Ag Data Assignment — OPMT 375

**Student:** Amr Mohammed  
**Team/company:** Minnesota Corn & Soybean Storage (MCSS)

## Decision question

Which Minnesota counties should MCSS evaluate first for corn storage?

## Data source

USDA National Agricultural Statistics Service (NASS), _Minnesota Ag News — 2023 Corn County Estimates_.

Source: https://www.nass.usda.gov/Statistics_by_State/Minnesota/Publications/County_Estimates/2024/MN-CtyEst-Corn-02-24.pdf

The stored JSON contains county corn-for-grain production estimates for 2022 and 2023, measured in bushels. The report was published February 23, 2024. The data snapshot date is recorded in `corn-production.json`.

## Files

- `index.html` — dashboard with crop-year and county filters, chart, and county table
- `corn-production.json` — stored data used by the page
- `ai-log.md` — AI prompt record, error check, and verification notes
- `reflection.md` — reflection answering the four assignment questions

## Running the page

The page loads JSON with `fetch()`. Run it from a local web server (for example, VS Code Live Server) or a configured static web host. Opening `index.html` directly from a `file://` path may prevent the browser from loading the JSON.

## Important limitation

County production is a historical supply indicator, not current MCSS inventory or confirmed storage demand. Site selection would also require current inventory, storage capacity, transportation access and costs, competing facilities, and customer demand.
