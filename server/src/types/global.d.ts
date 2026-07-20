// Global type declarations for Node.js environment
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;
      MONGODB_URI: string;
      FRONTEND_URL?: string;
      FORMSPREE_FORM_ID?: string;
    }
  }

  // Global declarations for Node.js
  var process: NodeJS.Process;
  var console: Console;
}

export {};
