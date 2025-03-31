const analyzeSentiment = async (text) => {
    const response = await fetch("https://openrouter.ai/api/sentiment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });
    const data = await response.json();
    return data.sentiment;
};

module.exports = { analyzeSentiment };