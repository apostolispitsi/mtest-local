MTest Local V4 GitHub update
Replace these five files in the repository root:
app.js
database.js
index.html
style.css
service-worker.js

Changes:
- Previous/Next navigation
- answers preserved when moving between questions
- Exam mode does not reveal correctness until results
- delete question bank + its questions, with confirmation
- final score, success percentage, correct/wrong/unanswered counts
- CSV source metadata retained when present
- IndexedDB schema/version unchanged, so existing local banks are preserved

Note: True/False answer balance is a property of the imported CSV question bank, not application code.
