import './Games.css'

interface GameCard {
  title: string
  mode: string
  players: string
}

const GAMES: GameCard[] = [
  { title: 'Nightfall Ops', mode: 'Battle Royale', players: '2–100' },
  { title: 'Circuit Break', mode: 'Team Deathmatch', players: '5v5' },
  { title: 'Ironline', mode: 'Tactical FPS', players: '4v4' },
  { title: 'Dead Signal', mode: 'Extraction', players: '1–4' },
]

export default function Games() {
  return (
    <section id="games" className="games">
      <div className="container">
        <p className="section-eyebrow">All Games</p>
        <h2 className="games__heading">Pick your battlefield.</h2>

        <div className="games__grid">
          {GAMES.map((game) => (
            <article key={game.title} className="game-card">
              <div className="game-card__thumb" aria-hidden="true">
                <span className="game-card__thumb-glow" />
              </div>
              <h3 className="game-card__title">{game.title}</h3>
              <p className="game-card__meta">
                {game.mode} &middot; {game.players}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
