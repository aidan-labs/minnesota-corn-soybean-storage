https://github.com/aidan-labs/minnesota-corn-soybean-storage/tree/main/students/jonathan

1. What broke or surprised you in class, and what was the real cause?

One thing that I had an issue with when going through this activity was figuring out how to connect. I had high reliability on the use of AI to create my HTML webpage at first, which made made me encounter the issue of connecting the existing ORIGINAL data source with the dashboard file. Looking deeper into it, I made sure to have it uploaded as a CSV file, which makes it easier to retrieve updated figures in the scenario that the source info updates.

2. Where does your data live now, and who could change it without you knowing?

My data originally comes from the USDA NASS Quick Stats database [https://quickstats.nass.usda.gov/results/B71D223A-77F9-3919-84E2-D624D3E2FF9A] and is stored in the minnesota_soybean_production.csv file in GitHub. The webpage retrieves the data and temporarily stores it in an array within the browser's memory before processing and displaying it on the interactive HTML dashboard. Since our GitHub repository is shared, teammates with editing permissions could modify the CSV file without my immediate knowledge. However, GitHub's commit history allows me to track and identify these changes.

3. Your page is one signal in our supply chain. Who downstream would act on it, and what would the need to trust it?

An Operations Manager could use my dashboard to anticipate potential changes in grain-handling workload and prepare staffing, equipment, and facility capacity for customer pickups. To trust this information, they would need a reliable data source, accurate calculations, and a clear understanding of the dataset's limitations. Since the data represents statewide soybean production rather than actual MCSS inventory, additional facility-level information would be necessary before making specific operational decisions.

4. Name one thing your team's storefront would need to store for its signal to be trusted next week.

Our team's storefront would need to store a timestamped version history of its data. This would allow users to identify when information was updated, what changes were made, and who made those changes. For MCSS, maintaining this history would help ensure that employees and customers can verify the reliability of inventory and grain release information before making operational decisions.
