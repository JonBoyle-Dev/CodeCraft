# CodeCraft 🚀

**A gamified coding education app for teens aged 12–16.**

CodeCraft teaches real programming skills through bite-sized lessons, interactive challenges, and an XP-based progression system — making learning to code feel like a game.

🌐 **Live demo:** https://jonboyle82.github.io/CodeCraft/

---

## Features

- **4 Learning Tracks** — HTML, CSS, JavaScript, and Python
- **Interactive Lessons** — read a concept, then write real code to prove you got it
- **Challenge System** — submit code answers and get instant pass/fail feedback with hints
- **XP & Streaks** — earn experience points per lesson and build daily coding streaks
- **Badge System** — unlock achievements as you progress through tracks
- **Profile Dashboard** — track your XP, level, streak, and per-track progress
- **Persistent Progress** — your progress saves locally between sessions

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React Native (Expo SDK 56) |
| Navigation | Expo Router v4 |
| Platform | Mobile (iOS & Android) + Web |
| Storage | AsyncStorage |
| Deployment | GitHub Pages (web export) |
| Language | TypeScript |

---

## Project Structure

```
CodeCraft/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx       # Tab bar configuration
│   │   ├── index.tsx         # Learn screen (track selection)
│   │   ├── challenges.tsx    # Bonus challenges screen
│   │   └── profile.tsx       # User profile & stats
│   ├── lesson/
│   │   └── [id].tsx          # Individual lesson screen
│   └── _layout.tsx           # Root layout
├── constants/
│   ├── colors.ts             # Design system colours
│   └── storage.ts            # AsyncStorage helpers & progress logic
├── data/
│   └── lessons.ts            # All lesson content & tracks
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Pages deployment
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your phone (iOS or Android)

### Run locally

```bash
git clone https://github.com/JonBoyle82/CodeCraft.git
cd CodeCraft
npm install --legacy-peer-deps
npx expo start
```

Scan the QR code with Expo Go to run on your phone, or press `w` to open in the browser.

### Build for web

```bash
npx expo export --platform web
```

---

## Learning Tracks

| Track | Icon | Lessons | Skills Taught |
|-------|------|---------|---------------|
| HTML | 🌐 | 3 | Tags, structure, links, images |
| CSS | 🎨 | 1+ | Selectors, colours, layout |
| JavaScript | ⚡ | 1+ | Variables, functions, DOM |
| Python | 🐍 | 1+ | Print, variables, logic |

---

## Roadmap

- [ ] AI tutor hint system (Claude API)
- [ ] Syntax-highlighted code editor
- [ ] More lessons per track (10+ each)
- [ ] Animated XP rewards and level-up celebrations
- [ ] Leaderboard (opt-in)
- [ ] User accounts and cloud sync
- [ ] Mobile app store release (EAS Build)

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## License

MIT © 2026 Jon Boyle — see [LICENSE](LICENSE) for details.
