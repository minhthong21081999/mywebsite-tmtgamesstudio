# MyWebsite - TMTGamesStudio

Simple React + Vite demo website for TMTGamesStudio.

## Setup

```bash
npm install
npm run dev
```

Open the URL shown by Vite (default http://localhost:5173).

## Structure

- `src/pages` - Home, GameDetail, Profile, Contact
- `src/components` - `GameCard`
- `src/data/games.ts` - sample games data (replace with real data)

Replace placeholder data and images with your real content.

## Firebase Hosting Deployment

Install Firebase CLI globally and authenticate:

```bash
npm install -g firebase-tools
firebase login
```

Initialize or use an existing Firebase project:

```bash
firebase init hosting
```

Build and deploy:

```bash
npm install
npm run deploy
```

If you prefer using the locally installed CLI, run:

```bash
npx firebase deploy
```
