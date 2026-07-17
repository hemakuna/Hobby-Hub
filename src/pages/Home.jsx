
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HobbyCard from "../components/HobbyCard";
import Footer from "../components/Footer";

import crochetImg from "../images/crochet.jpg";
import paintingImg from "../images/painting.jpg";
import photographyImg from "../images/photography.jpg";
import musicImg from "../images/music.jpg";
import gardeningImg from "../images/gardening.jpg";
import writingImg from "../images/writing.jpg";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  
  const hobbies = [
    
    {
      image: crochetImg,
      emoji: "🧶",
      name: "Crochet",
      description: "Learn crochet patterns and tutorials.",
      category: "Art & Craft",
      level: "Beginner",
      link: "/crochet",
       youtube: "https://www.youtube.com/results?search_query=crochet+for+beginners"
     
    },
    {
      image: paintingImg,
      emoji: "🎨",
      name: "Painting",
      description: "Discover painting techniques.",
      category: "Art",
      level: "Beginner",
      link: "/painting",
      youtube: "https://www.youtube.com/results?search_query=painting+for+beginners"
    },
    {
      image: photographyImg,
      emoji: "📸",
      name: "Photography",
      description: "Learn photography skills.",
      category: "Creative",
      level: "Intermediate",
      link: "/photography",
      youtube: "https://www.youtube.com/results?search_query=photography+for+beginners"
    },
    {
      image: musicImg,
      emoji: "🎸",
      name: "Music",
      description: "Learn instruments and singing.",
      category: "Performance",
      level: "All Levels",
      link: "/music",
      youtube: "https://www.youtube.com/results?search_query=learn+music+for+beginners"
    },
    {
      image: gardeningImg,
      emoji: "🌱",
      name: "Gardening",
      description: "Grow plants and flowers.",
      category: "Nature",
      level: "Beginner",
      link: "/gardening",
      youtube: "https://www.youtube.com/results?search_query=gardening+for+beginners"
    },
    {
      image: writingImg,
      emoji: "✍️",
      name: "Writing",
      description: "Creative writing and blogging.",
      category: "Creative",
      level: "All Levels",
      link: "/writing",
      youtube: "https://www.youtube.com/results?search_query=creative+writing+for+beginners"
    },
  ];
    const filteredHobbies = hobbies.filter((hobby) => {
  const matchesSearch = hobby.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    hobby.category === selectedCategory;

  return matchesSearch && matchesCategory;
});
  
  

  return (
    <>
      <Header />
      

      <Hero search={search} setSearch={setSearch} />
      <section className="filter-section">
  <h2>Browse by Category</h2>

  <div className="filter-buttons">
    <button onClick={() => setSelectedCategory("All")}>All</button>

    <button onClick={() => setSelectedCategory("Art & Craft")}>
      Art & Craft
    </button>

    <button onClick={() => setSelectedCategory("Art")}>
      Art
    </button>

    <button onClick={() => setSelectedCategory("Creative")}>
      Creative
    </button>

    <button onClick={() => setSelectedCategory("Performance")}>
      Performance
    </button>

    <button onClick={() => setSelectedCategory("Nature")}>
      Nature
    </button>
  </div>
</section>

      <h2 className="title">Popular Hobbies</h2>

      <div className="cards">
        {filteredHobbies.map((hobby, index) => (
          <HobbyCard
            key={index}
            image={hobby.image}
            emoji={hobby.emoji}
            name={hobby.name}
            description={hobby.description}
            category={hobby.category}
            level={hobby.level}
            link={hobby.link}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;