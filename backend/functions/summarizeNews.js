const summarizeNews = async (text) => {
    const response = await fetch("https://openrouter.ai/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });
    const data = await response.json();
    return data.summary;
};

module.exports = { summarizeNews };
