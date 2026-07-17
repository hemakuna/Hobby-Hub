import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Photography() {
  return (
    <>
      <Header />

      <div style={{ padding: "40px" }}>
        <h1>📸 Photography</h1>

        <p>
          Photography is the art of capturing beautiful moments using a camera.
        </p>

        <h2>Materials Needed</h2>

        <ul>
          <li>Camera</li>
          <li>Tripod</li>
          <li>Memory Card</li>
          <li>Editing Software</li>
        </ul>

        <h2>Difficulty</h2>

        <p>⭐⭐ Beginner to Intermediate</p>

        <Link to="/">
          <button>⬅ Back to Home</button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Photography;