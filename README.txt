MTest Local V3 — Android/PWA

Mobile-first, local-first test application.
- HTML/CSS/JavaScript only
- IndexedDB stores question banks locally in the browser
- CSV import
- Single choice, multiple choice, True/False
- Practice and Exam modes
- JSON backup/restore
- Service worker for offline use after first successful HTTPS/localhost load

ANDROID INSTALLATION
A PWA must be served from HTTPS (or localhost during development). Upload the contents of this folder to any static HTTPS host, open the URL in Chrome on Android, then use the browser's Install app / Add to Home screen option when offered.

IMPORTANT
IndexedDB data belongs to the browser/site profile. Keep periodic JSON backups before clearing browser/site data or changing devices.

CSV
The included sscp-50-questions.csv can be imported directly from Android Files/Downloads.
