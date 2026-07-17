import { Link } from "react-router-dom";

function HobbyCard({
  image,
  emoji,
  name,
  description,
  category,
  level,
  link,
  youtube,
  isFavorite,
  toggleFavorite,
}) {
  return (
    <div className="card">
      <img src={image} alt={name} className="hobby-image" />

      <button
        className="favorite-btn"
        onClick={() => toggleFavorite(name)}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <h3>
        {emoji} {name}
      </h3>

      <p>{description}</p>

      <p>
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Level:</strong> {level}
      </p>

      <Link to={link}>
        <button>Explore</button>
        <a
  href={youtube}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="youtube-btn">
    📺 Watch Tutorial
  </button>
</a>
      </Link>
    </div>
  );
}

export default HobbyCard;