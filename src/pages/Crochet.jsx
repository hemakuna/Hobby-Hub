import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Crochet() {
  return (
    <>
      <Header />

      <div style={{ padding: "40px" }}>
        <h1>🧶 Crochet</h1>

        <p>
          Crochet is the art of creating fabric using yarn and a crochet hook.
          It is a relaxing and creative hobby loved by people of all ages.
        </p>

        <h2>Materials Needed</h2>

        <ul>
          <li>Yarn</li>
          <li>Crochet Hook</li>
          <li>Scissors</li>
          <li>Stitch Markers</li>
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

export default Crochet;