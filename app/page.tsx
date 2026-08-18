import Link from "next/link";

const movies = [
  {
    title: "Shadow Protocol",
    genre: "Action",
    year: 2026,
    rating: "8.7",
    duration: "2h 14m",
    icon: "🕶️",
    description:
      "A former intelligence operative is pulled into a covert mission that could expose a global conspiracy.",
  },
  {
    title: "Lost Planet",
    genre: "Sci-Fi",
    year: 2025,
    rating: "8.3",
    duration: "2h 08m",
    icon: "🪐",
    description:
      "A stranded crew discovers an abandoned world hiding a signal that should not exist.",
  },
  {
    title: "Midnight Case",
    genre: "Mystery",
    year: 2026,
    rating: "8.9",
    duration: "1h 56m",
    icon: "🌙",
    description:
      "A detective follows a series of impossible clues through a city that never sleeps.",
  },
  {
    title: "The Last Signal",
    genre: "Thriller",
    year: 2025,
    rating: "8.1",
    duration: "2h 02m",
    icon: "📡",
    description:
      "One final transmission gives a journalist 24 hours to uncover the truth.",
  },
  {
    title: "Neon Horizon",
    genre: "Drama",
    year: 2026,
    rating: "8.5",
    duration: "1h 48m",
    icon: "🌆",
    description:
      "Two strangers cross paths in a futuristic city and change each other's lives.",
  },
  {
    title: "Echo Valley",
    genre: "Adventure",
    year: 2025,
    rating: "8.0",
    duration: "2h 21m",
    icon: "🏔️",
    description:
      "A dangerous expedition uncovers a forgotten story buried beneath the mountains.",
  },
];

const genres = [
  "Action",
  "Sci-Fi",
  "Thriller",
  "Mystery",
  "Drama",
  "Adventure",
];

const stats = [
  { value: "10K+", label: "Movies & Series" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "120+", label: "Genres & Collections" },
];

export default function Home() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-content">
          <div className="badge">
            <span>✦</span>
            THE FUTURE OF MOVIE DISCOVERY
          </div>

          <h1>
            Stories worth
            <br />
            <span>staying up for.</span>
          </h1>

          <p>
            Discover unforgettable movies and series, explore new genres,
            compare ratings, and find your next obsession.
          </p>

          <div className="actions">
            <Link href="/movies" className="btn primary">
              Explore Library
              <span>→</span>
            </Link>

            <Link href="/about" className="btn secondary">
              Discover Nettify
            </Link>
          </div>

          <div className="hero-meta">
            <div className="avatars">
              <span>🎬</span>
              <span>🍿</span>
              <span>⭐</span>
              <span>+</span>
            </div>

            <div>
              <strong>Loved by movie fans</strong>
              <small>Join thousands discovering something new.</small>
            </div>
          </div>
        </div>

        {/* FEATURED MOVIE */}
        <div className="hero-featured">
          <div className="featured-poster">
            <div className="featured-overlay" />

            <span className="featured-icon">🕶️</span>

            <div className="featured-label">
              <small>NETTIFY FEATURED</small>
              <strong>SHADOW<br />PROTOCOL</strong>
            </div>

            <div className="play-button">
              ▶
            </div>
          </div>

          <div className="featured-info">
            <div>
              <span className="eyebrow">FEATURED TONIGHT</span>
              <h2>Shadow Protocol</h2>
            </div>

            <div className="rating">
              <strong>★ 8.7</strong>
              <span>IMDb-style rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      {/* TRENDING */}
      <section className="section">
        <div className="section-head">
          <div>
            <span className="eyebrow">WHAT PEOPLE ARE WATCHING</span>
            <h2>Trending right now</h2>
          </div>

          <Link href="/movies" className="view-all">
            Browse everything →
          </Link>
        </div>

        <div className="grid">
          {movies.slice(0, 4).map((movie, index) => (
            <article className="movie-card" key={movie.title}>
              <div className={`poster poster-${index + 1}`}>
                <span className="movie-number">
                  0{index + 1}
                </span>

                <span className="movie-icon">
                  {movie.icon}
                </span>

                <div className="poster-bottom">
                  <small>NETTIFY ORIGINAL</small>
                  <strong>{movie.title}</strong>
                </div>
              </div>

              <div className="card-info">
                <div className="card-top">
                  <span>{movie.genre}</span>
                  <strong>★ {movie.rating}</strong>
                </div>

                <h3>{movie.title}</h3>

                <p>
                  {movie.year} · {movie.duration}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GENRES */}
      <section className="genre-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">FIND YOUR MOOD</span>
            <h2>Explore by genre</h2>
          </div>
        </div>

        <div className="genre-grid">
          {genres.map((genre, index) => (
            <Link
              href={`/movies?genre=${genre.toLowerCase()}`}
              className="genre-card"
              key={genre}
            >
              <span>{["⚡", "🪐", "🔪", "🔎", "🎭", "🏔️"][index]}</span>
              <strong>{genre}</strong>
              <small>Explore →</small>
            </Link>
          ))}
        </div>
      </section>

      {/* LATEST COLLECTION */}
      <section className="section">
        <div className="section-head">
          <div>
            <span className="eyebrow">CURATED FOR YOU</span>
            <h2>More worth watching</h2>
          </div>
        </div>

        <div className="compact-grid">
          {movies.slice(4).map((movie) => (
            <article className="compact-card" key={movie.title}>
              <div className="compact-icon">
                {movie.icon}
              </div>

              <div>
                <span>{movie.genre}</span>
                <h3>{movie.title}</h3>
                <p>
                  {movie.year} · ★ {movie.rating}
                </p>
              </div>

              <Link
                href="/movies"
                aria-label={`View ${movie.title}`}
              >
                →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-content">
          <span className="eyebrow">YOUR NEXT FAVORITE IS WAITING</span>

          <h2>
            Stop scrolling.
            <br />
            Start discovering.
          </h2>

          <p>
            Browse the Nettify library and find something worth watching
            tonight.
          </p>

          <Link href="/movies" className="btn primary">
            Start Exploring
            <span>→</span>
          </Link>
        </div>

     
      </section>
    </main>
  );
}
