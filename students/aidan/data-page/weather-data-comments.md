# Notes

The notes below are in here and meant for `weather.json`. The comments are not in there as JSON does not support comments, and I am too lazy to change it into a JS JSON Object for now.

## Comments

Data Source: https://api.open-meteo.com/v1/forecast

Original download command (from repository root):

```bash
curl -o students/aidan/weather.json "https://api.open-meteo.com/v1/forecast?latitude=44.54&longitude=-95.12&daily=precipitation_sum,temperature_2m_max,temperature_2m_min&forecast_days=14&timezone=America%2FChicago&precipitation_unit=inch&temperature_unit=fahrenheit"
```

Download date: November 12, 2026. The weather.json file is a stored fallback copy and does not update automatically. It is loaded by `index.html` only if the live API request fails.
