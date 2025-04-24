# 📝 Quick Notes App (Next.js + Shadcn UI)

Welcome to the **Quick Notes App**, a simple and beginner-friendly project built with **Next.js** and **Shadcn UI**. This application allows users to create, view, and delete notes — all stored locally in the browser's **Local Storage**, so no backend is needed!

## 🚀 Features

- ✍️ Create new notes
- 🗃️ Display a list of saved notes
- 🗑️ Delete individual notes
- 💾 Automatically saves and retrieves data from browser's **Local Storage**
- 🎨 Clean and modern UI using **Shadcn UI**
- ⚡ Fast and responsive with **Next.js 14 App Router**

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [Shadcn UI](https://ui.shadcn.com/)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Storage**: Browser's `localStorage`

## 📦 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or above)
- [pnpm](https://pnpm.io/) or `npm` / `yarn`

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/browser-notes-app.git
   cd quicknotes
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
/app
  └─ /notes     → Main Notes App UI
/components     → Reusable UI components
/lib            → Utility functions (e.g. localStorage helpers)
```

## 📸 Screenshots

| Home View | Add Note |
|-----------|----------|
| ![Home View](https://via.placeholder.com/400x200?text=Home+View) | ![Add Note](https://via.placeholder.com/400x200?text=Add+Note) |

## 🧠 Learnings

Through this project, you will learn:

- How to use Next.js App Router
- How to build responsive UIs with Shadcn UI
- How to persist data using localStorage
- How to manage state using useState and useEffect

## 🧾 License

This project is licensed under the MIT License.

Feel free to fork this repo, suggest improvements, or use it as a base for your own Next.js projects. Happy coding! 😄
