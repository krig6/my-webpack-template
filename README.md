# Webpack Template

Welcome to the Webpack Template! 🎉 This template provides a solid foundation for starting a modern JavaScript project with Webpack, including development and production setups.

## Features

- Development and Production Builds: Separate configurations for development (webpack.dev.js) and production (webpack.prod.js).
- CSS and Asset Handling: Pre-configured loaders for CSS and image files.
- HTML Generation: Automatically generates an HTML file with dynamic script inclusion using HtmlWebpackPlugin.
- Hot Module Replacement: Enables fast, live updates during development.
- Optimized Output: Uses content hashing for cache busting in production builds.

## Getting Started

Follow these steps to set up and run the project:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies

Install the necessary packages with npm:

```bash
npm install
```

### 3. Start the Development Server

Launch the development server with hot reloading enabled:

```bash
npm run dev
```

This will start the server at http://localhost:3000 by default.

### 4. Build for Production

Generate an optimized production build:

```bash
npm run build
```

This will generate the production-ready files in the dist directory.

### 5. Deploy to GitHub Pages

To deploy your project to GitHub Pages, use:

```
npm run deploy
```

This script will deploy the contents of the dist directory to the gh-pages branch of your repository, making it available at https://&lt;username&gt;.github.io/&lt;repository-name&gt;.

Note: Replace &lt;username&gt; with your GitHub username and &lt;repository-name&gt; with the name of your repository.

## Project Structure

```
├── dist/ # Compiled output files
├── src/ # Source files
│ ├── index.js # Entry point for JavaScript
│ ├── template.html # HTML template
│ └── styles/ # CSS files
├── webpack.common.js # Common Webpack configuration
├── webpack.dev.js # Development Webpack configuration
├── webpack.prod.js # Production Webpack configuration
└── package.json # Project metadata and dependencies
```

## Customization

Feel free to modify the configuration files and project structure to fit your specific needs. Whether you're adding new loaders, plugins, or custom scripts, this template is designed to be flexible and easy to extend.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the issues page if you want to contribute.
