# Multilingual Read & Type

A static Astro site for language learning through long-form reading and typing.

## Features

- Language selector, category selector, and level selector on the home page
- Typing practice page with progress, accuracy, and WPM tracking
- Japanese and English translation sections
- Expressions and grammar notes from the text
- LocalStorage state for favorite, review later, and learned flags
- Mobile-first design with dark mode support

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Data structure

Text items are stored in `src/data/texts.json` following the required JSON schema.
