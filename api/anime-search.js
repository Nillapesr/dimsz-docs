exports.handler = async (event) => {
    const { search } = event.queryStringParameters;
    
    if (!search) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Search parameter required' })
        };
    }
    
    const animeDB = [
        { title: 'Naruto', genre: 'Action, Adventure', episodes: 220, rating: 8.0 },
        { title: 'One Piece', genre: 'Action, Adventure', episodes: 1000, rating: 8.5 },
        { title: 'Jujutsu Kaisen', genre: 'Action, Supernatural', episodes: 24, rating: 8.6 },
        { title: 'Attack on Titan', genre: 'Action, Dark Fantasy', episodes: 87, rating: 9.0 },
        { title: 'Demon Slayer', genre: 'Action, Supernatural', episodes: 44, rating: 8.7 },
        { title: 'My Hero Academia', genre: 'Action, Superhero', episodes: 138, rating: 8.3 }
    ];
    
    const results = animeDB.filter(anime => 
        anime.title.toLowerCase().includes(search.toLowerCase())
    );
    
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            status: true,
            query: search,
            total: results.length,
            results: results
        })
    };
};