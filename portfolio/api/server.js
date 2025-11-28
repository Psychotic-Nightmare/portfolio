// Simple Vercel serverless function for React Router v7
export default async (req, res) => {
  const { default: handler } = await import('../build/server/index.js');
  return handler(req, res);
};

