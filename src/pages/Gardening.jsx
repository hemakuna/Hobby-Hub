import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Gardening() {
  return (
    <>
      <Header />

      <div style={{ padding: "40px" }}>
        <h1>🌱 Gardening</h1>

        <p>
          Gardening is a rewarding hobby that involves growing flowers,
          vegetables, fruits, and plants. It helps you connect with nature,
          improve your environment, and reduce stress.
        </p>

        <h2>Materials Needed</h2>

        <ul>
          <li>🪴 Plant Pots</li>
          <li>🌱 Seeds or Saplings</li>
          <li>🌿 Garden Soil</li>
          <li>💧 Watering Can</li>
          <li>✂️ Gardening Tools</li>
        </ul>

        <h2>Benefits</h2>

        <ul>
          <li>✔ Reduces stress and improves mental health</li>
          <li>✔ Encourages physical activity</li>
          <li>✔ Produces fresh flowers and vegetables</li>
          <li>✔ Helps protect the environment</li>
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

export default Gardening;