import pandas as pd

# Load dataset
df = pd.read_csv("data/cybersecurity.csv")

# Check dataset info
print(df.info())

# Check missing values
print(df.isnull().sum())

# Remove duplicate records
df = df.drop_duplicates()

# Remove rows with missing important data
df = df.dropna()

# Save cleaned dataset
df.to_csv("data/cybersecurity_cleaned.csv", index=False)

print("Cybersecurity data cleaning completed!")
