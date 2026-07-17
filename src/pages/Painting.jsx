import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Painting() {
  return (
    <>
      <Header />

      <div style={{ padding: "40px" }}>
        <h1>🎨 Painting</h1>

        <p>
          Painting is a creative hobby that allows you to express ideas and
          emotions through colors and brushes.
        </p>

        <h2>Materials Needed</h2>

        <ul>
          <li>Canvas</li>
          <li>Paint Brushes</li>
          <li>Acrylic or Watercolor Paints</li>
          <li>Palette</li>
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

export default Painting;