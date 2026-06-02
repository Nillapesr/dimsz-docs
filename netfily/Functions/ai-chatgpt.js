exports.handler = async (event) => {
    const { text, key } = event.queryStringParameters;
    
    const validKey = process.env.API_KEY || 'dimsz123';
    if (key !== validKey) {
        return {
            statusCode: 401,
            body: JSON.stringify({ error: 'Invalid API Key' })
        };
    }
    
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            status: true,
            result: `Respon AI Dimsz untuk: "${text}"`,
            query: text
        })
    };
};
