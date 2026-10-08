# CodeLens

CodeLens is a full-stack web application that analyzes JavaScript code and provides rule-based warnings and suggestions to help developers identify simple code-quality improvements.

## 🚀 Live Demo

**Live Application:** https://code-lens-git-main-merins-projects.vercel.app/

## ✨ Features

- Analyze JavaScript code through a simple web interface
- Detect variables declared with `let` that can be changed to `const`
- Identify non-descriptive variable names
- Display analysis warnings clearly
- Input validation for empty code
- Loading state while analysis is in progress
- Error handling for failed requests
- Clear code and analysis results

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- REST API

### Deployment
- Vercel — Frontend
- Render — Backend

### Development Tools
- Git
- GitHub

## ⚙️ How It Works

1. The user enters JavaScript code into the React interface.
2. The frontend sends the code to the Express.js REST API using a `POST` request.
3. The backend validates the submitted code.
4. The analyzer checks the code against predefined rules.
5. The API returns the detected warnings as JSON.
6. The React frontend displays the warnings to the user.

## 📁 Project Structure

```text
codelens/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── App.css
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── index.js
│   ├── analyzer.js
│   ├── package.json
│   └── ...
│
└── README.md
```

## 💻 Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Clone the repository

```bash
git clone https://github.com/merinmat/CodeLens.git
cd codelens
```

### Run the backend

```bash
cd backend
npm install
node index.js
```

The backend will run locally on:

```text
http://localhost:3000
```

### Run the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The Vite development server will provide the local frontend URL.

## 🌐 Deployment

The application is deployed as two services:

- **Frontend:** Vercel
- **Backend:** Render

The production React application communicates with the deployed Express.js API through the `/api/analyze` endpoint.

## 🔮 Future Improvements

Possible future improvements include:

- Support for additional JavaScript code-quality rules
- More detailed explanations for detected warnings
- Line-specific warning locations
- Syntax highlighting
- User-selectable analysis rules
- AI-assisted code explanations

## 📌 What I Learned

Building CodeLens helped me strengthen my understanding of:

- React state and conditional rendering
- REST API communication
- Express.js request handling and validation
- Error and loading states
- Responsive CSS
- Git and GitHub workflows
- Deploying a frontend and backend separately
- Connecting a production frontend to a deployed backend
