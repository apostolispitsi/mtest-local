MTest Local V5 update

New import support:
- CSV (existing MTest schema)
- XLS (legacy Excel)
- XLSX
- Automatic recognition of the supplied Excel template: Title, Description, Duration, Question, type, Option1-4, Explanation, Answer, Points.
- tf values T/F are converted to True/False and A/B.
- Bank metadata stores title/description/duration/source filename.
- Question metadata stores points.

Important: Excel parsing uses SheetJS 0.20.3 from the official SheetJS CDN. After it has been fetched and cached by the PWA, Excel import can work offline. CSV import has no external dependency.

Replace the included files in the GitHub repository and commit. Do not clear browser/site data; IndexedDB remains version 1 and existing banks are preserved.
