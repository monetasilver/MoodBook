# MoodBook

Telegram Mini App prototype: personal mood diary with a dark, experimental visual style.

## Current prototype
- Mood selection and diary entries
- Private-by-default entries with a public/private marker
- Local browser storage
- Responsive layout for mobile
- Telegram Web App SDK initialization

## Run locally
Open `index.html` in a browser.

## Important
This is a front-end prototype. Entries are stored only in the current browser using localStorage. The public toggle is currently a local label, not a real public feed. There is no account system or server database yet.

## Planned next steps
1. Telegram `initData` validation on a server
2. Cloudflare Workers + D1 database
3. Real profiles and private/public permissions
4. Community feed, reactions and comments
5. English translations and language toggle
