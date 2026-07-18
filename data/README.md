</> Markdown
# Data Folder


# Data Storage

## Overview
This folder contains the cybersecurity dataset used for the AI Agent for Cybersecurity Incident Response project.

The purpose of storing these CSV files is to maintain the original collected data and the processed clean data separately. This helps in tracking the data preparation process and makes the dataset ready for further analysis, feature engineering, and model development.

## Dataset Files

### 1. cybersecurity.csv
This file contains the original raw cybersecurity dataset collected during the data collection phase.

It is stored to preserve the initial data before any preprocessing or cleaning operations. Keeping the raw dataset helps maintain data traceability and allows comparison between original and processed data.

### 2. cybersecurity_cleaned.csv
This file contains the cleaned version of the cybersecurity dataset.

Data cleaning operations were performed using Python to improve data quality. The cleaning process included checking missing values, removing duplicate records, and removing incomplete entries.

This cleaned dataset is stored because it will be used for future analysis and machine learning/model development tasks.

## Data Processing Summary

- Raw dataset was collected and stored in CSV format.
- Data cleaning was performed using Python (Pandas).
- Duplicate records and missing-value records were removed.
- The cleaned dataset was saved separately to maintain a structured workflow.

## Purpose of Storage

The datasets are stored in CSV format because it is easy to access, analyze, and integrate with Python-based data analysis and machine learning workflows.
