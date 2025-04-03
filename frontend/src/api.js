import nhost from "./nhost";

export const fetchData = async () => {
  const session = nhost.auth.getSession();

  if (!session) {
    console.error("User is not authenticated");
    return null;
  }

  try {
    const response = await fetch("https://your-api-endpoint.com/news", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
