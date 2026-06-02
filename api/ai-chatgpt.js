export default function handler(req, res) {
  const { text, key } = req.query;
  
  const validKey = process.env.API_KEY || 'dimsz123';
  if (key !== validKey) {
    return res.status(401).json({ error: 'Invalid API Key' });
  }
  
  res.status(200).json({
    status: true,
    result: `Respon AI Dimsz untuk: "${text}"`,
    query: text
  });
}
