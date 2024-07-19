# NLP Web Tool Project

## Project Overview

This project is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. It classifies the content based on subjectivity (opinion vs. fact) and tone (positive, neutral, negative) using the Aylien NLP API.

## Project Motivation

The motive of this project is to familiarize you with the environment and tools commonly used in a front-end role. The focus is on understanding the roles of different tools and technologies in the overall architecture, rather than memorizing specific commands or setups.

## Features

- Analyze articles and blogs for subjectivity and tone.
- Use of the Aylien NLP API for processing and classification.
- Webpack configuration for development and production environments.
- Routing with Express.
- Service Worker for offline capabilities.

## Technologies Used

- **Node.js**: Webserver.
- **Express.js**: Web application framework for routing.
- **Webpack**: Build tool for setting up development and production environments.
- **Aylien NLP API**: External API for natural language processing.
- **Service Worker**: For offline support and improving performance.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/maanraddadi/nlp-web-tool.git
   cd nlp-web-tool
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of your project and add your Aylien API credentials:
   ```env
   AYLIEN_APP_KEY=your_app_key
   ```

## Usage

1. Start the development server:

   ```bash
   npm run build-dev
   ```

2. For production build:

   ```bash
   npm run build-prod
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```plaintext
├── dist
│   ├── index.html
│   ├── main.js
├── src
│   ├── client
│   │   ├── js
│   │   │   ├── formHandler.js
│   │   │   └── index.js
│   │   ├── styles
│   │   │   ├── base.scss
│   │   │   ├── footer.scss
│   │   │   ├── form.scss
│   │   │   ├── header.scss
│   │   │   └── resets.scss
│   ├── server
│   │   └── index.js
├── .babelrc
├── .env
├── package.json
├── webpack.dev.js
├── webpack.prod.js
└── README.md
```
