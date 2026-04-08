# Tejaswee Sulekh - Personal Portfolio

A scalable, component based personal portfolio website built to showcase professional experience, architectural system designs, quantitative research, and hardware metrology projects.

The application is engineered with a strict separation of concerns, decoupling the user interface from the underlying data layer to allow for highly scalable and maintainable content management.

## Tech Stack
- **Frontend Framework** : React.js
- **UI/Component Library**: Material-UI (MUI)
- **Styling**: Emotion (MUI system) / CSS-in-JS
- **Animation**: Framer Motion (via custom `FadeInView` wrapper)
- **Icon**: React Icons (`react-icons/fa`)

## Architecture & Design Philosophy
This repository is built with maintainability and rapid iteration in mind.
1. **Data-Driven UI**: All textual content, project data, and professional experience are isolated in a centralized data file (`src/data/portfolioData.js`). The UI components are entirely stateless regarding content, acting solely as rendering engines.
2. **Dynamic Layout Scaling**: The `Projects` component utilizes a dynamic `layout` engine. Based on the layout property defined in the data layer (e.g., `list` vs. `grid`), the React component automatically determines whether to render a full-width deep-dive card or a modular 3-column summary grid.
3. **Responsive Grid System**: Fully responsive across mobile, tablet, and desktop viewports using MUI's 12-column grid architecture

## Project Structure
```plaintext
├── src/
│   ├── components/
│   │   ├── Projects.jsx      # Dynamic project rendering engine
│   │   ├── FadeInView.jsx    # Animation wrapper component
│   │   └── ...               # Additional UI components (Hero, Experience, etc.)
│   ├── data/
│   │   └── portfolioData.js  # Centralized single source of truth for site data
│   ├── App.jsx               # Root application component
│   └── index.js              # Application entry point
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
└── README.md
```

## How it works (Content Management)
The site is designed so that expanding the portfolio requires **zero changes to the React component code**.

To add a new project, skill, or experience, modify the exported arrays in `src/data/portfolioData.js`. The UI will automatically generate the appropriate Material-UI components, typography variants, list items, and animated transitions.

**Example: Adding a new Project Category**
```Javascript
// Inside src/data/portfolioData.js
export const projectCategories = [
  // ... existing categories ...
  {
    title: "Open Source Contributions",
    layout: "list", // "list" for full-width cards, "grid" for 3-column cards
    projects: [
      {
        title: "Project Name",
        subtitle: "Tech Stack / Domain",
        points: [
          "Key architectural achievement.",
          "Performance metric optimization."
        ],
        githubLink: "https://github.com/...",
        liveLink: "https://..."
      }
    ]
  }
];
```

## Getting Started
To run this project locally, ensure you have Node.js installed, then execute the following commands:

1. **Clone the repository**
```bash
git clone https://github.com/TejasweeSulekh/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm start
# or
yarn start
```

The application will launch in development mode and can be viewed at `http://localhost:3000`.