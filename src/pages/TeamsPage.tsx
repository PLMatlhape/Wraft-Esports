import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { GAMES } from '../data/games'
import { TEAMS_BY_GAME } from '../data/teams'
import './TeamsPage.css'

export default function TeamsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeGame = searchParams.get('game') ?? GAMES[0].id
  const teams = TEAMS_BY_GAME[activeGame] ?? []

  return (
    <>
      <PageHeader
        eyebrow="Teams"
        heading="Pick a game, meet the roster."
        body="Every Wraft team competing across our supported titles — pick a game to see who's repping the badge."
      />

      <section className="teams">
        <div className="container">
          <div className="teams__tabs" role="tablist" aria-label="Select a game">
            {GAMES.map((game) => (
              <button
                key={game.id}
                type="button"
                role="tab"
                aria-selected={activeGame === game.id}
                className={`teams__tab ${activeGame === game.id ? 'teams__tab--active' : ''}`}
                onClick={() => setSearchParams({ game: game.id })}
              >
                {game.name}
              </button>
            ))}
          </div>

          <div className="teams__grid" key={activeGame}>
            {teams.map((team, i) => (
              <Reveal key={team.name} as="article" delay={i * 70} className="team-card">
                <div className="team-card__badge" aria-hidden="true">
                  {team.tag}
                </div>
                <h3 className="team-card__name">{team.name}</h3>
                <p className="team-card__meta">
                  {team.region} &middot; {team.record}
                </p>
              </Reveal>
            ))}

            {teams.length === 0 && (
              <p className="teams__empty">No Wraft teams listed for this game yet.</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
