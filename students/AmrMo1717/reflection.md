# Reflection — Harvest to Screen

**Before submitting:** Replace the bracketed sentence with what actually happened to you in class. I cannot know your personal in-class experience from the repository or assignment brief.

[Describe what broke or surprised you in class in one or two specific sentences.] The important technical lesson in this project is that a webpage and its saved data are separate files. The page must load the JSON correctly, and a browser may block that request when the HTML is opened directly from a `file://` path. Testing with a local web server or GitHub Pages avoids that issue.

The data now lives in `students/AmrMo1717/corn-production.json` in our team repository. It is a saved snapshot transcribed from a USDA NASS county-estimates report covering 2022 and 2023 corn-for-grain production. The source website may change, but this local copy stays the same unless someone commits a change. Anyone with repository write access could alter the JSON or page without me noticing, so the source URL, report date, download date, and data limitations are documented.

Downstream buyers and processors could use county production as an indication of where corn is grown. MCSS operations staff could use it to decide which areas deserve further storage-location research. They would need to trust that the source is USDA, that the year and bushel units are clear, that the values match the report, and that dash-marked entries are not misrepresented as zero. Production alone does not show how much grain is available to MCSS.

One thing our storefront should store for a trustworthy signal next week is a dated inventory record showing bushels received, released, and remaining by crop. County production describes potential supply, while inventory records show what MCSS actually holds and can release to buyers or processors.
