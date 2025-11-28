// Vercel serverless function for React Router v7 with Hono
import { handle } from 'hono/vercel';

let app;
export default async (req, res) => {
  if (!app) {
    const module = await import('../build/server/index.js');
    app = module.default;
  }
  
  return handle(app)(req, res);
};

