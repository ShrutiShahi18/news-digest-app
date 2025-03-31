const fetchNews = async (topic) => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${topic}&apiKey=YOUR_API_KEY`);
    const data = await response.json();
    return data.articles;
};

module.exports = { fetchNews };
