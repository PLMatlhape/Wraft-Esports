import Reveal from './Reveal'
import './Multiplayer.css'

const NODES = [
  { title: 'Squad Up', description: 'Party with friends or get matched with players at your skill level in seconds.' },
  { title: 'Cross-Play', description: 'PC, console, and mobile players share the same lobbies — no split community.' },
  { title: 'Live Voice', description: 'Low-latency squad voice comms built into every match, no third-party app needed.' },
]

export default function Multiplayer() {
  return (
    <section id="multiplayer" className="multiplayer">
      <div className="container multiplayer__grid">
        <Reveal>
          <p className="section-eyebrow">Multiplayer</p>
          <h2 className="multiplayer__heading">
            One network. <span>Every squad.</span>
          </h2>
          <p className="multiplayer__body">
            Wraft's matchmaking runs on a single global network — jump between
            games, keep your squad, and never wait long for a fair match.
          </p>
        </Reveal>

        <div className="multiplayer__cards">
          {NODES.map((n, i) => (
            <Reveal key={n.title} delay={i * 100} as="article" className="multiplayer__card">
              <h3>{n.title}</h3>
              <p>{n.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
