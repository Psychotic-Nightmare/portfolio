// Vercel serverless function for React Router v7 with Hono
export default async (req, res) => {
  const { default: app } = await import('../build/server/index.js');
  
  // Convert Vercel request to Web API Request
  const url = new URL(req.url, `https://${req.headers.host}`);
  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
  });
  
  // Handle the response
  const response = await app.fetch(request);
  const body = await response.text();
  
  // Set response headers
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  
  res.status(response.status).send(body);
};

