# manfred-to-europass-spikes

## First goal

Create a simple web app where:
  - You will upload a CV in manfred format.
  - It will be parsed from manfred json to europass format.
  - The user will be able to download the file.

## POCS

POCs proposal:
  - Read a manfred json file (the file is harcoded on the app).
  - Find a library to generate XML using JavaScript (browser side).
  - Get a simple euorpass XML example.
  - Generate just an europass simple section (heading or contact).
  - Generate a full europass XML example (heading informed but all sections empty) that can be imported by europass.
  - Upload a file to the browser (we will use this to let the user upload his manfred json).
  - Download a file (text file) from the browser to the client explorer (we will use this to download the XML generated file).
  - Validate generated XML against europass XSD (https://joinup.ec.europa.eu/release/europass-xml-schema-v30-final)

