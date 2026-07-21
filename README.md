# VeerifyAI

VeerifyAI is a responsive marketing website for a healthcare compliance platform. The current application presents the product, provides a privacy policy, and lets prospective customers request a personalized demo.

## Current features

- Product landing page
- Responsive desktop and mobile layout
- Demo-request form with client-side validation
- Demo requests stored in MongoDB
- Optional Formspree notification for each submission
- Privacy policy page
- Vercel-compatible frontend and serverless API
- Standalone Express API for local development or separate deployment

## Technology

- React 18 and TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide React icons
- Express
- MongoDB and Mongoose

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Product landing page |
| `/request-demo` | Demo-request form |
| `/privacy` | Privacy policy |
| `/api/health` | API and database health check |
| `/api/demo-requests` | Creates a demo request |

## Prerequisites

- Node.js 18 or newer
- npm
- A MongoDB connection string

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/veerifyai
   PORT=4001
   NODE_ENV=development
   FRONTEND_URL=http://localhost:8080
   FORMSPREE_FORM_ID=your_formspree_form_id
   ```

   `MONGODB_URI` is required. `FORMSPREE_FORM_ID` is optional; the application uses its configured default form when it is omitted.

3. Start the API server in one terminal:

   ```bash
   npm run server:dev
   ```

4. Start the frontend in another terminal:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:8080`.

During local development, Vite proxies `/api` requests to `http://localhost:4001`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run server:dev` | Starts the Express API with file watching |
| `npm run build` | Creates a production frontend build |
| `npm run server:build` | Compiles the standalone API server |
| `npm run server:start` | Runs the compiled standalone API |
| `npm run preview` | Previews the production frontend build |
| `npm run lint` | Runs ESLint |

## Project structure

```text
VeerifyAI/
|-- api/                 # Vercel serverless entry points
|-- public/              # Static assets
|-- server/              # Express API, MongoDB model, and notification service
|-- src/
|   |-- components/      # Reusable interface components
|   |-- pages/           # Landing, demo-request, and privacy pages
|   `-- App.tsx          # Application routes
|-- vite.config.ts       # Vite development and build configuration
`-- vercel.json          # Vercel deployment configuration
```

## Production build

```bash
npm run build
```

The frontend output is written to `dist/`. Set `MONGODB_URI`, `FRONTEND_URL`, and optionally `FORMSPREE_FORM_ID` in the deployment environment.

## Contact

- Email: [info@veerifyai.com](mailto:info@veerifyai.com)
- Phone: +91 81810 16016
