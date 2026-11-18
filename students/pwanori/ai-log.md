# AI Log — Harvest to Screen

**Project:** Minnesota Organic Corn Harvest Planning  
**Data Source:** USDA National Agricultural Statistics Service (NASS), Quick Stats

## 1. Building My Website

**Prompt summary:** I asked ChatGPT to help me build an HTML website using Minnesota organic corn production data from USDA NASS Quick Stats. I wanted a dropdown that would allow users to select different years and a bar chart showing production trends.

**Result:** ChatGPT helped me create a website displaying organic corn production and explaining how the information could help grain elevators plan storage and transportation capacity.

## 2. Saving My Data

**Prompt summary:** I asked ChatGPT to help me store my corn production data in a JSON file so my website would not depend on the USDA website being available.

**Result:** I created `corn-data.json` and saved it in my GitHub project folder.

## 3. Problems With the Chart

**Problem:** My website initially displayed an empty chart and dropdown.

**Error found:** When I inspected the browser console, I found the message "Chart is not defined."

**How I checked:** I used Chrome Developer Tools to identify the JavaScript error instead of assuming the production data was incorrect.

**Correction:** I worked on fixing the chart-loading issue.

## 4. Problems Loading the JSON File

**Problem:** My website displayed "Unable to load corn data" when I opened the HTML file directly.

**How I checked:** I confirmed that `corn-data.json` existed and contained production values for the selected years.

**Correction:** I learned that opening the HTML file directly was different from running it through a local web server.

## 5. Running the Website Locally

**Problem:** I initially tried starting a local server using Python, but my MacBook requested additional developer tools. I also discovered that Node.js was not installed.

**Correction:** I checked whether Ruby was installed and successfully started a local server using Ruby.

**Result:** My website loaded the stored JSON data successfully.

## 6. Testing the Final Website

I opened my website through the local server and confirmed that the dropdown displayed different production years.

For 2025, the website displayed 6,668,325 bushels.

I also tested 2016 and confirmed that the production number and highlighted bar changed when I selected a different year.

## 7. What I Learned

This project showed me that AI-generated code does not always work correctly the first time. I learned how to identify errors, check where data is stored, and test whether the website is displaying information correctly.

I also learned why storing data separately from the website code is important for maintaining a reliable supply chain information system.

## Prompt History to Complete

Before submitting, I need to add the exact prompts I used during the assignment, including my original website-building prompt and subsequent troubleshooting requests.
