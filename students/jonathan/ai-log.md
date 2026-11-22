
# AI Log — Harvest to Screen: Build an Ag Data Web Page

**Student:** Jonathan Le  
**Student Folder:** `students/jonathan.le/`  
**Course:** OPMT 375  
**Project:** Minnesota Corn & Soybean Storage (MCSS)  
**SCOR Pillar:** DELIVER  
**AI Tool:** ChatGPT  

**Decision Question:** How can historical soybean production inform MCSS grain-handling and delivery planning?

---

## 1. Project Objective

The objective of this project was to develop an interactive, data-driven webpage that uses historical Minnesota soybean production data to support grain-handling and delivery planning for MCSS.

As a grain-storage service provider, MCSS receives, stores, handles, and prepares farmers' grain for release without taking ownership of the grain or arranging transportation. Historical soybean production can serve as a planning indicator for potential changes in grain-handling workload and operational requirements.

AI was used as a supporting tool throughout the project to understand the assignment, identify relevant data, develop the webpage, troubleshoot technical issues, and verify the functionality of the final deliverable.

---

## 2. Assignment-Provided Starter Prompt

The assignment provided the following template to guide the initial development of the webpage:

> Build one self-contained HTML file that answers this question for a Minnesota agriculture supply chain: [your question]. Use this data source: [URL or file name]. The fields I need are: [fields]. Add a dropdown or slider to filter by [county / year / crop] and a chart that updates when I change it. Add comments that explain, in plain English, where the data comes from and where it is stored.

### Project-Specific Adaptation

The following is a reconstruction of how the assignment's starter prompt applies to my project:

> Build one self-contained HTML file that answers the following question for a Minnesota agricultural supply chain: How can historical soybean production inform MCSS grain-handling and delivery planning?
>
> Use historical Minnesota soybean production data obtained from USDA NASS Quick Stats. The fields needed are year and soybean production measured in bushels.
>
> Include a year dropdown and an interactive bar chart that responds to changes in the selected year. Display selected-year production, year-over-year percentage changes, and historical average production.
>
> Include comments explaining where the data comes from, where it is stored, and how it is transformed. Provide a business interpretation that connects historical production trends to MCSS grain-handling and delivery planning.

---

## 3. Prompt Record and Development Process

The following record organizes my AI interactions according to their purpose and contribution to the final project.

Entries identified as prompt summaries represent reconstructed descriptions of earlier requests rather than exact quotations. Entries identified as actual prompts preserve the original wording.

Throughout the development process, I used both primary development prompts and iterative follow-up prompts. Primary prompts established objectives and deliverable requirements, while follow-up prompts helped clarify implementation methods, evaluate AI-generated outputs, resolve technical issues, and develop a better understanding of the webpage.

### Phase 1 — Assignment Understanding

**Objective:** Understand the assignment requirements and establish the project scope.

**Prompt Summary:**

Review the Harvest to Screen assignment instructions and grading rubric. Explain the project requirements, expected deliverables, and the steps necessary to complete the assignment successfully.

**Outcome:**

Established the requirements for a decision question, public agricultural dataset, interactive webpage, saved data file, three ME comments, AI log, and reflection.

### Phase 2 — Business Context and Decision Question

**Objective:** Align the individual project with MCSS and the DELIVER pillar of the SCOR model.

**Prompt Summary:**

Review the company profile for Minnesota Corn & Soybean Storage (MCSS). Considering that my assigned SCOR pillar is DELIVER, help me develop a meaningful decision question using publicly available agricultural data. Take into consideration that MCSS stores, handles, and releases farmers' grain but does not own the grain or arrange transportation. Identify how historical agricultural production could support operational planning.

**Outcome:**

Established the decision question:

How can historical soybean production inform MCSS grain-handling and delivery planning?

### Phase 3 — Data Sourcing

**Objective:** Identify a credible agricultural dataset that supports the selected decision question.

**Prompt Summary:**

Help me navigate USDA NASS Quick Stats to identify historical Minnesota soybean production data. Explain which commodity, geographic area, reporting period, statistical category, and measurement units should be selected to obtain relevant data for my decision question. Identify why these variables are appropriate for MCSS delivery planning.

**Outcome:**

Selected historical Minnesota soybean production data from USDA NASS Quick Stats covering 2015 through 2025, measured in bushels.

### Phase 4 — Data Preparation

**Objective:** Prepare a reliable and usable dataset for the interactive webpage.

**Prompt Summary:**

Review the downloaded USDA soybean production dataset. Identify unnecessary records, forecast observations, formatting issues, and irrelevant information. Prepare a clean dataset containing one annual soybean production observation for each year from 2015 through 2025.

**Outcome:**

The original dataset contained 54 records, including monthly forecast observations. The dataset was reduced to 11 annual production records by retaining observations with the reporting period identified as YEAR.

The cleaned data was saved as:

`minnesota_soybean_production.csv`

### Phase 5 — Interactive Webpage Development

**Objective:** Transform the cleaned agricultural dataset into an interactive decision-support webpage.

**Prompt Summary:**

Develop an interactive HTML webpage using my cleaned Minnesota soybean production dataset. The webpage should help MCSS understand historical soybean production trends from 2015 through 2025.

Include a year-selection dropdown, an interactive bar chart, selected-year production in millions of bushels, year-over-year percentage changes, and historical average production.

Include the original USDA source URL, data download date, and a business interpretation of the selected year. Explain how the information could support grain-handling and delivery planning while acknowledging that statewide production does not directly represent MCSS shipment volumes or storage demand.

**Outcome:**

Developed an interactive webpage containing:

- Historical soybean production from 2015 through 2025.
- An interactive year-selection dropdown.
- Selected-year production measured in millions of bushels.
- Year-over-year percentage changes.
- Historical average production.
- An interactive bar chart.
- Business interpretation and data source documentation.

### Phase 6 — GitHub Implementation

**Objective:** Organize, implement, and publish the individual project within the MCSS team repository.

**Prompt Summary:**

Provide step-by-step instructions for creating my individual student folder within the team GitHub repository, uploading the HTML and CSV files, committing changes, and accessing the published webpage through GitHub Pages.

**Iterative Follow-Up Prompts:**

During implementation, I used additional prompts to clarify the process of navigating GitHub, managing project files, and replacing existing files with revised versions.

> im in the index.html thing still i'm not sure what to do

> how do I download the one you created?

These questions addressed the practical implementation of the webpage and the process of transferring AI-assisted development outputs into the team repository.

**Outcome:**

Created the individual student folder:

`students/jonathan.le/`

Uploaded the following files:

- `index.html`
- `minnesota_soybean_production.csv`

The dashboard was successfully published through GitHub Pages. I also learned how to replace and commit revised project files when technical changes were necessary.

### Phase 7 — Troubleshooting and Corrective Action

**Objective:** Evaluate the existing webpage, identify technical gaps, implement corrective changes, and independently verify the revised dashboard.

#### Comparative Review

After developing the initial webpage, I wanted to evaluate my implementation against the assignment requirements and understand how other members of the team approached similar technical requirements.

I used the following prompts to initiate a comparative review of the individual project folders within the MCSS repository.

**Actual Follow-Up Prompts:**

> are you able to read the other peoples' folders? like "aidan", "AmrMo1717", and "pwanori"?

> how should we go about this review

> how to do that again for all of my partners?

The purpose of these interactions was to explore alternative implementation methods, particularly how agricultural data was stored and retrieved by the individual webpages.

The review reinforced the importance of loading data from a separately stored file rather than embedding the production values directly into the HTML code.

#### Technical Correction

**Prompt Summary:**

Modify the existing HTML code so that the webpage retrieves the saved Minnesota soybean production CSV file using JavaScript rather than relying on hardcoded production values. Maintain the existing dashboard layout, calculations, chart, and interactive features.

Ensure that the webpage can operate independently of the original USDA data source.

**Outcome:**

The HTML was revised to retrieve the saved CSV file using JavaScript's `fetch()` function.

I replaced the original HTML code and committed the updated version to GitHub.

The dashboard retained its original appearance and functionality while addressing the requirement to load data from a separately stored file.

#### Technical Verification

Following the implementation of the revised HTML, I used AI to identify an appropriate method for independently verifying that the technical correction was successful.

**Actual Follow-Up Prompt:**

> i updated the index.html, how do I test the updated dashboard

AI provided instructions for inspecting browser developer tools, identifying the CSV request within the Network tab, and testing the dashboard's interactive features.

**Outcome:**

I independently opened the published dashboard and inspected the Network tab in my browser's developer tools.

The CSV request returned an HTTP status of 200 and a request type of fetch, confirming that the webpage successfully requested the separately stored dataset.

I also tested multiple year selections to confirm that the production figures, percentage changes, historical average, and highlighted chart bars behaved as expected.

This process demonstrated the importance of verifying the technical functionality of an AI-generated solution rather than relying solely on its visual appearance.

### Phase 8 — AI Documentation and Code Comprehension

**Objective:** Understand the underlying data process, document AI contributions, and communicate the development process accurately.

#### Code Comprehension

The assignment required three personalized ME comments explaining where data enters the webpage, where it is stored during operation, and how it is transformed.

Rather than relying exclusively on AI-generated comments, I used follow-up questions to develop a clearer understanding of the underlying JavaScript functions and data management processes.

**Actual Follow-Up Prompts:**

> how do I add/modify those comments into the updated index.html?

> what are these comments trying to say? Help me understanad these?

During this discussion, I identified the purpose of the stored CSV file:

> the csv file contains all the data we need for it

I then requested additional clarification regarding the temporary storage and transformation of the data:

> im not sure about 2 and 3

These interactions helped distinguish between the permanent storage of the CSV file in GitHub and the temporary storage of retrieved production values in the browser's memory.

**Outcome:**

Developed an understanding of the three primary stages of the webpage's data process:

1. **Data Entry:** JavaScript retrieves the soybean production data from the saved CSV file.
2. **Data Storage:** The production array temporarily stores the retrieved information in the browser's memory while the webpage is running.
3. **Data Transformation:** The render function uses the stored data to calculate production figures, percentage changes, and historical averages while updating the interactive chart.

Understanding these processes helped me explain the functionality of the webpage in my own words and connect the technical implementation to the assignment's information-system concepts.

#### AI Documentation

After completing the primary development and verification stages, I used AI to improve the organization of my project documentation.

The objective was to create an AI log that communicated the purpose of each development stage, the contribution of AI, the technical challenges encountered, and the actions taken to verify the final deliverable.

**Actual Prompts:**

> I want to modify the AI log and make it look more professional. How was I supposed to start the AI prompts in order to have purposeful prompts and a designated goal

> What would my prompts look like that led to our end stage?

> create that in a way that I can copy and paste it into the ai-log.md file on github.

> this is my current modified prompts, what would you suggest adding/changing?

> would it be okay to confirm those changes and move forward with the assignment?

> The reason why I am hesitant to add the deleted phases is because the prompts I used were very short and vague, it looks like I was desparetely searching for the answer and not fully understanding the changes

> please create a structure that retains the newly modified eight phase structure but also include the new contexualized follow-up prompts. Please create it in a copy and paste format and add it into the existing structure.

**Outcome:**

Organized the AI log into eight development phases with designated objectives, actual prompts or clearly labeled summaries, contextualized follow-up interactions, and project outcomes.

The documentation distinguishes between primary development instructions and iterative follow-up questions while preserving the original wording of available prompts.

**Transcript Limitation:**

Some earlier AI interactions are represented as summaries rather than exact quotations. These summaries describe the development process without claiming that reconstructed wording was entered verbatim. Additional exact prompts should be included from the original conversation history wherever available.

---

## 4. AI Error Identification and Corrective Action

### Identified Error

The original AI-generated HTML contained the historical soybean production values directly within the JavaScript code.

Although the webpage displayed the production figures and interactive chart correctly, it did not retrieve information from the separate CSV file stored in my GitHub folder.

### Cause

The initial implementation created a functional, self-contained webpage by embedding the dataset directly into the HTML. This overlooked the assignment's requirement to load information from a separately saved CSV or JSON file.

### Potential Impact

The original webpage could display information even if the stored CSV file was changed or removed.

This created a disconnect between the documented data source and the information actually used by the dashboard. Changes to the saved CSV would not automatically be reflected on the webpage.

### Corrective Action

The HTML code was revised to use JavaScript's `fetch()` function to retrieve the saved CSV file.

The retrieved information is stored in a production array within the browser's memory and used to calculate the dashboard's metrics and visualizations.

This established a direct connection between the stored dataset and the webpage.

### Verification Method

After committing the revised HTML file, I opened the published dashboard and inspected the Network tab using my browser's developer tools.

The CSV request returned:

- HTTP Status: 200
- Request Type: fetch
- Requested File: `minnesota_soybean_production.csv`

This confirmed that the updated webpage successfully requested the separate stored dataset.

---

## 5. Data Source and Traceability

| Category | Description |
|---|---|
| Data Provider | USDA National Agricultural Statistics Service (NASS) |
| Database | USDA NASS Quick Stats |
| Download Date | November 19, 2026 |
| Commodity | Soybeans |
| Geographic Area | Minnesota |
| Time Period | 2015–2025 |
| Measurement Unit | Bushels |
| Reporting Period | YEAR |
| Original Dataset | 54 records |
| Cleaned Dataset | 11 annual observations |
| Stored File | minnesota_soybean_production.csv |
| Storage Location | students/jonathan.le/ |
| Data Retrieval Method | JavaScript fetch() |

**Original Data Source:**

https://quickstats.nass.usda.gov/results/B71D223A-77F9-3919-84E2-D624D3E2FF9A

The original dataset included annual production observations and monthly forecast records. Only annual observations were retained to maintain consistency and avoid including multiple production estimates for the same year.

The saved CSV allows the webpage to retrieve historical data without depending on the original USDA website being available.

---

## 6. Verification and Validation Record

After updating the data-loading method, I manually tested the published dashboard using multiple year selections.

| Verification Test | Observed Result | Status |
|---|---|---|
| CSV retrieval | HTTP status 200 | Passed |
| JavaScript retrieval | Request type: fetch | Passed |
| 2015 production | 377.50 million bushels | Displayed as expected |
| 2015 annual change | N/A | Displayed as expected |
| 2019 production | 297.88 million bushels | Displayed as expected |
| 2019 annual change | -20.5% | Displayed as expected |
| 2025 production | 371.18 million bushels | Displayed as expected |
| 2025 annual change | +12.7% | Displayed as expected |
| Historical average | 360.80 million bushels | Displayed as expected |
| Interactive dropdown | Selected-year metrics update | Passed |
| Chart functionality | Highlighted bar changes with year selection | Passed |

The 2015 annual change is displayed as N/A because the dataset does not contain production information for 2014.

The historical average remains constant when a different year is selected because it represents the average across the complete 2015–2025 dataset.

These tests confirmed that the revised dashboard successfully requests the saved dataset and maintains its intended interactive functionality. The numerical results listed above were observed during browser testing.

---

## 7. Business Application and Data Limitations

Historical soybean production provides MCSS with a broad indicator of changes in Minnesota agricultural output.

Higher production years may suggest a potential increase in grain-handling workload, while lower production years may indicate reduced statewide production volumes.

This information can support preliminary discussions related to:

- Grain-handling capacity.
- Staffing requirements.
- Facility readiness.
- Inventory release planning.
- Customer pickup scheduling.

However, statewide soybean production does not directly measure MCSS inventory, customer demand, actual shipment volumes, or scheduled pickups.

MCSS would need additional facility-level information, including customer release requests, available inventory, historical pickup records, and scheduling information, before making specific operational decisions.

The dashboard should therefore be treated as a supporting planning tool rather than a direct measure of delivery performance.

---

## 8. Key Learning Outcomes

Throughout this project, I developed a better understanding of how data moves through an information system.

I learned how a webpage retrieves information from a stored data file, temporarily holds that information in the browser's memory, and transforms raw data into meaningful calculations and visualizations.

I also learned that an AI-generated webpage can appear to function correctly without meeting every technical requirement. Reviewing the underlying code and independently testing its functionality are necessary steps when using AI to develop information systems.

The iterative prompting process helped me clarify technical concepts, evaluate alternative development methods, and better understand the relationship between the stored dataset and the webpage's functionality.

From a supply chain perspective, this project demonstrated how publicly available agricultural data can support operational planning while also highlighting the importance of distinguishing between broad production indicators and actual business-level performance data.

AI supported the development process, but reviewing the generated work, implementing the corrective changes, and verifying the dashboard remained important responsibilities throughout the project.
