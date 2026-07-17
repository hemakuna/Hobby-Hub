import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Music() {
  return (
    <>
      <Header />

      <div style={{ padding: "40px" }}>
        <h1>🎸 Music</h1>

        <p>
          Music is a creative hobby that allows you to express emotions through
          singing, playing instruments, or composing songs. It improves
          concentration, creativity, and confidence.
        </p>

        <h2>What You Can Learn</h2>

        <ul>
          <li>🎹 Piano</li>
          <li>🎸 Guitar</li>
          <li>🥁 Drums</li>
          <li>🎤 Singing</li>
          <li>🎼 Music Theory</li>
        </ul>

        <h2>Benefits</h2>

        <ul>
          <li>✔ Improves memory and concentration</li>
          <li>✔ Reduces stress</li>
          <li>✔ Boosts creativity</li>
          <li>✔ Builds confidence</li>
        </ul>

        <h2>Difficulty</h2>

        <p>⭐ Beginner to Advanced</p>

        <Link to="/">
          <button>⬅ Back to Home</button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Music;