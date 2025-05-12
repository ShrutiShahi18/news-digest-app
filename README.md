# 📰 News Digest App

An AI-powered personalized news digest platform that delivers smart, summarized, and sentiment-filtered news straight to your dashboard. Built with **Nhost**, **Hasura**, **Bolt.new**, and **n8n** for a seamless, full-stack experience.

---

## 🚀 Features

- 🔒 User Authentication via Nhost (with email verification)
- 🧠 AI Summarization & Sentiment Analysis using OpenRouter via n8n workflows
- 📊 Filter news by sentiment: Positive, Negative, Neutral
- 📥 Real-time news fetching from public APIs
- ⚡ Fast frontend with Bolt.new
- 🧩 Modular backend using Hasura Actions and Postgres
- 🌐 Deployed on Nhost with GraphQL APIs

---

## 🛠️ Tech Stack

| Technology         | Purpose                                        |
|--------------------|------------------------------------------------|
| Nhost              | Backend, Auth, Database (PostgreSQL), GraphQL |
| Hasura             | GraphQL API over database with custom actions |
| Bolt.new           | Frontend builder for fast prototyping         |
| n8n                | Automated workflows for fetching & summarizing news |
| OpenRouter         | AI model routing for summarization and sentiment |
| React + Tailwind CSS | UI components & styling                     |

---

## 📦 Installation (Development)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/news-digest-app.git
cd news-digest-app
```

### 2. Setup environment variables

Create a `.env.local` file inside your `frontend` directory with the following content:

```env
VITE_NHOST_BACKEND_URL=https://backend-yourproject.nhost.run
VITE_NHOST_SUBDOMAIN=yourproject
VITE_NHOST_REGION=region
```

Make sure to replace these with actual values from your [Nhost](https://nhost.io) project dashboard.

### 3. Install frontend dependencies

```bash
cd frontend
npm install
npm run dev
```

### 4. Set up n8n workflows

Create and run an n8n workflow that:
- Fetches news articles from a public API (e.g., NewsAPI, GNews)
- Sends articles to OpenRouter for:
  - Summarization
  - Sentiment analysis
- Uses GraphQL mutation to insert summarized news into your Nhost database

---

## 🧪 Usage

1. Sign up and verify your email.
2. Log in to access your personalized news dashboard.
3. Use sentiment filters (Positive, Negative, Neutral) to explore content.
4. Click any article to view its AI-generated summary.

---

## ✨ Future Improvements

- ✅ Bookmarking and favoriting articles
- 📬 Email digest delivery
- 🔍 News search and topic filtering
- 🌍 Support for multiple languages
- 🧠 Learning user preferences for better recommendations

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository
2. Create your feature branch: `git checkout -b feature/awesome-feature`
3. Commit your changes: `git commit -m 'Add awesome feature'`
4. Push to the branch: `git push origin feature/awesome-feature`
5. Open a pull request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♀️ Built By

**Shruti Shahi**  
Passionate about building intelligent web applications that simplify and enrich daily life.

- [LinkedIn](https://linkedin.com/in/shruti-shahi)
- [GitHub](https://github.com/shruti-shahi)

---
