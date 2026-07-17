function Hero({ search, setSearch }) {
  return (
    <section className="hero">
      <h1>Discover Your Next Hobby</h1>

      <p>Everything about hobbies in one place.</p>

      <input
        type="text"
        placeholder="Search hobbies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  );
}

export default Hero;