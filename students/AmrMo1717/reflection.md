# Reflection — Harvest to Screen

**1. What broke or surprised you in class, and what was the real cause?**

I was surprised by how much agricultural information USDA's National Agricultural Statistics Service (NASS) makes publicly available, and how quickly AI helped turn that information into a webpage with filters and a chart. Reviewing NASS in class showed me that finding a number is only the first step: I also need to understand what it measures, its crop year, and its limitations. The real challenge is checking that an AI-generated visualization accurately represents the original source.

**2. Where does your data live now, and who could change it without you knowing?**

My data is stored in `students/AmrMo1717/corn-production.json` in our team's GitHub repository. It is a saved snapshot of USDA NASS county corn-for-grain production estimates for 2022 and 2023. Anyone with write access could change the JSON or webpage. GitHub's commit history can help identify changes, but I would still need to review and verify them.

**3. Who downstream would act on your page, and what would they need to trust it?**

MCSS operations staff could use the dashboard to identify counties worth investigating for future corn-storage opportunities. They need confidence in the USDA source, crop years, bushel units, and treatment of unpublished estimates. Production indicates where corn is grown; it does not prove how much grain is available to store.

**4. What should your team's storefront store for its signal to be trusted next week?**

The storefront should store dated inventory transactions showing bushels received, released, and remaining by commodity and location. This would give operations staff a current, auditable picture of MCSS inventory instead of relying only on historical county production.
