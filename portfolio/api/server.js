// Vercel serverless function for React Router v7 with Hono
export default async (req, res) => {
  try {
    // Dynamically import the built server
    const { default: app } = await import('../build/server/index.js');
    
    // Convert Vercel request to Web API Request
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host;
    const url = new URL(req.url, `${protocol}://${host}`);
    
    const request = new Request(url, {
      method: req.method,
      headers: new Headers(req.headers),
      body: req.method !== 'GET' && req.method !== 'HEAD' && req.body 
        ? JSON.stringify(req.body) 
        : undefined,
    });
    
    // Get response from Hono app
    const response = await app.fetch(request);
    
    // Convert Web API Response to Vercel response
    const body = await response.text();
    const headers = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });
    
    res.status(response.status);
    Object.entries(headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    res.send(body);
  } catch (error) {
    console.error('Serverless function error:', error);
    res.status(500).json({ error: error.message });
  }
};

