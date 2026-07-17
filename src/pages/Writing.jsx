import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Writing() {
  return (
    <>
      <Header />

      <div style={{ padding: "40px" }}>
        <h1>✍️ Writing</h1>

        <p>
          Writing is a creative hobby that allows you to express your thoughts,
          ideas, and imagination through stories, blogs, poems, and articles.
        </p>

        <h2>What You Can Write</h2>

        <ul>
          <li>📝 Journals</li>
          <li>📖 Short Stories</li>
          <li>✒️ Poetry</li>
          <li>💻 Blogs</li>
          <li>📚 Articles</li>
        </ul>

        <h2>Benefits</h2>

        <ul>
          <li>✔ Improves communication skills</li>
          <li>✔ Boosts creativity</li>
          <li>✔ Enhances vocabulary</li>
          <li>✔ Helps organize thoughts</li>
        </ul>

        <h2>Difficulty</h2>

        <p>⭐ Beginner Friendly</p>

        <Link to="/">
          <button>⬅ Back to Home</button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Writing;