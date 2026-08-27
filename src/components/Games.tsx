import { Link } from 'react-router-dom'
import { GAMES } from '../data/games'
import Reveal from './Reveal'
import './Games.css'

interface GamesProps {
  /** When true, each card links through to the Teams page for that game. */
  linkToTeams?: boolean
}

export default function Games({ linkToTeams = false }: GamesProps) {
  return (
    <div className="games__grid">
      {GAMES.map((game, i) => {
        const card = (
          <article className="game-card">
            <div className="game-card__thumb" aria-hidden="true">
              <span className="game-card__thumb-glow" />
            </div>
            <h3 className="game-card__title">{game.name}</h3>
            <p className="game-card__meta">
              {game.mode} &middot; {game.players}
            </p>
          </article>
        )

        return (
          <Reveal key={game.id} delay={i * 80}>
            {linkToTeams ? (
              <Link to={`/teams?game=${game.id}`} className="game-card__link">
                {card}
              </Link>
            ) : (
              card
            )}
          </Reveal>
        )
      })}
    </div>
  )
}
