exports.handler = async () => {
    const images = [
        'https://picsum.photos/id/1/300/300',
        'https://picsum.photos/id/2/300/300',
        'https://picsum.photos/id/3/300/300',
        'https://picsum.photos/id/4/300/300',
        'https://picsum.photos/id/5/300/300',
        'https://picsum.photos/id/6/300/300',
        'https://picsum.photos/id/7/300/300',
        'https://picsum.photos/id/8/300/300'
    ];
    
    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            status: true,
            url: randomImage,
            message: 'Random PAP from Dimsz API'
        })
    };
};