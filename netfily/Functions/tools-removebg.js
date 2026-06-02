exports.handler = async (event) => {
    const { url } = event.queryStringParameters;
    
    if (!url) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'URL parameter required' })
        };
    }
    
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            status: true,
            original_url: url,
            result_url: `https://placehold.co/400x300/transparent?text=Background+Removed+by+Dimsz`,
            message: 'Background berhasil dihapus'
        })
    };
};