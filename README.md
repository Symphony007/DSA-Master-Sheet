# DSA Master Sheet – Personal Progress Tracker

A minimal DSA practice tracker to systematically work through **exactly 581 essential coding problems**. Built for consistency, clarity, and long-term interview preparation.

👉 **Live Site:** [https://dsa-master-sheet-kappa.vercel.app/](https://dsa-master-sheet-kappa.vercel.app/)

---

## Why This Exists

Tracking DSA in spreadsheets or notes breaks easily. This project exists to:

* Maintain a **clear learning order**
* Track solved / unsolved problems reliably
* Preserve progress across sessions without accounts
* Focus on **patterns and consistency**, not noise

No social features. No analytics overload. Just problems and progress.

---

## What’s Included

* **581 carefully selected problems**

  * Sources: LeetCode + GeeksforGeeks
  * Ordered by learning progression

### Topics Covered

1. Arrays & Matrix
2. Strings & Linked Lists
3. Stacks, Queues & Heaps
4. Trees & Tries
5. Binary Search & Bit Manipulation
6. Advanced Topics (DP, Graphs, Backtracking, Greedy)

Each topic shows:

* Solved / Total count
* Progress indicator
* Easy / Medium / Hard breakdown

---

## Core Features

### Progress Tracking

* Mark problems as solved using checkboxes
* Automatically saved in browser (LocalStorage)
* Overall and topic-wise completion tracking

### Search & Filters

* Search by problem name
* Filter by difficulty (Easy / Medium / Hard)
* Filter by status (Solved / Unsolved)

### Stats (Only What Matters)

* Total solved out of 581
* Topic-wise progress
* Difficulty distribution

### Backup & Restore

* Export progress as JSON
* Import progress on another device or browser
* No cloud sync, no accounts

### UI

* Clean, distraction-free layout
* Dark / Light theme toggle
* Fully responsive (mobile, tablet, desktop)

---

## How I Use It

* **Daily:** Solve 2–3 problems from one topic
* **After solving:** Mark the problem as done
* **Revision:** Star tough problems
* **Weekly:** Review stats and revisit starred problems

Consistency > volume.

---

## Project Structure

```text
DSA-SHEET/
└── dsa-tracker/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── DifficultyBadge.jsx
    │   │   ├── ProgressRing.jsx
    │   │   ├── StatCard.jsx
    │   │   ├── ThemeToggle.jsx
    │   │   └── TopicProgress.jsx
    │   ├── data/
    │   │   └── questions.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
```

---

## Run Locally

```bash
git clone https://github.com/Symphony007/dsa-master-sheet.git
cd dsa-tracker
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Tech Stack

* **React** – UI logic
* **Vite** – Fast dev environment
* **LocalStorage** – Persistent progress
* **Custom CSS** – No UI libraries

---

## Learning Path Used

* **Phase 1 (2 weeks):** Arrays → Matrix → Strings
* **Phase 2 (3 weeks):** Linked Lists → Stacks/Queues → Trees
* **Phase 3 (4 weeks):** Heaps → Binary Search → Bit Manipulation
* **Phase 4 (5 weeks):** DP → Graphs → Backtracking → Greedy

Adjust based on your pace.

---

## Contributing

If you think a must-solve problem is missing:

1. Fork the repo
2. Add it to `src/data/questions.js`
3. Open a PR

---

## License

MIT License.

Use it, modify it, adapt it to your workflow.

---

**A simple tool for people who want to get better at DSA without tracking progress in spreadsheets.**
