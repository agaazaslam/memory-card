# Memory Card Game

A fun and interactive memory game built with React. This app fetches image cards from an external API and challenges users to click cards without repeating any previous choice.
It features a real-time score tracker and keeps track of the best score achieved in the session.

A brief and clear description of what your project does.

Live preview: [https://memory-card.agaazaslam.com](https://memory-card.agaazaslam.com)

## Features

- Memory game logic with unique image cards
- Scoreboard displaying current and best scores
- Cards shuffle randomly on each click
- Fetches card data (images and info) from an external API
- Fully responsive UI styled with Tailwind CSS
- Interactive, user-friendly game experience

## Technologies Used

- Frontend: React, Tailwind CSS
- External API ([PokeAPI](https://pokeapi.co))

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/agaazaslam/memory-card.git
cd memory-card
npm install
npm run dev
```

## Project Structure

<pre> <code> 

├── eslint.config.js           # ESLint configuration for code quality
├── index.html                 # Main HTML file where the React app mounts
├── package.json               # Project metadata, dependencies, and scripts
├── package-lock.json          # Auto-generated lock file for dependencies
├── README.md                  # Project documentation
├── src                        # Source code
│   ├── App.jsx                # Main application component
│   ├── Card.jsx               # Reusable card component (image + info)
│   ├── index.css              # Global styles including Tailwind imports
│   └── main.jsx               # React entry point, renders App
└── vite.config.js             # Vite configuration for build and dev server

 </code> </pre>
