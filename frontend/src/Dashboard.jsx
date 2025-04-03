import { useEffect, useState } from "react";
import { useAccessToken, useSignOut } from "@nhost/react";
import { useNavigate } from "react-router-dom";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const accessToken = useAccessToken();
  const signOut = useSignOut();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  const fetchNews = async () => {
    if (!accessToken) return;

    try {
      const response = await fetch(
        "https://ktkucbnyhybpruopvqyu.hasura.ap-south-1.nhost.run/v1/graphql",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            query: `
              query {
                getSummarizedNews {
                  id
                  title
                  summary
                  sentiment
                }
              }
            `,
          }),
        }
      );

      const data = await response.json();
      console.log("Full API Response:", JSON.stringify(data, null, 2));

      if (data.errors) {
        console.error("GraphQL Error:", data.errors);
        return;
      }

      if (data?.data?.getSummarizedNews) {
        setNews(data.data.getSummarizedNews);
      } else {
        console.log("No news data found in response.");
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [accessToken]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">News Digest</h1>
        <button
          onClick={() => {
            signOut();
            navigate("/login");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.length === 0 ? (
          <p className="text-center text-gray-500">No news available.</p>
        ) : (
          news.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.summary}</p>
              <span
                className={`text-xs font-bold ${
                  item.sentiment === "positive"
                    ? "text-green-600"
                    : item.sentiment === "negative"
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {item.sentiment}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
