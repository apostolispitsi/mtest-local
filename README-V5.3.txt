MTest Local V5.3

Fix for Practice/Resume:
V5.2 app.js imported the database put() function, but the V5.2 update package did not include database.js. If the deployed database.js was from V5.1, the JavaScript module failed to load and Practice/Exam buttons stopped working.

Replace ALL THREE files in GitHub:
- app.js
- database.js
- service-worker.js

IndexedDB database name/version remains mtest-local / version 1. Existing banks/questions are preserved. Do not clear site data.
