#!/bin/bash

# Define the file name
FILE=".env.local"

# Prompt the user for the API key
read -p "Enter your API key: " API_KEY

# Check if the user entered an API key
if [ -z "$API_KEY" ]; then
  echo "No API key entered. Exiting."
  exit 1
fi

# Write the API key to the .env.local file
echo "API_KEY=$API_KEY" > "$FILE"

# Confirm that the file was created
if [ -f "$FILE" ]; then
  echo "$FILE has been created with the provided API key."
else
  echo "Failed to create $FILE."
  exit 1
fi