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
      <div className="multiplayer__network" aria-hidden="true">
        <span className="multiplayer__orb multiplayer__orb--one" />
        <span className="multiplayer__orb multiplayer__orb--two" />
        <span className="multiplayer__line multiplayer__line--one" />
        <span className="multiplayer__line multiplayer__line--two" />
        <span className="multiplayer__line multiplayer__line--three" />
      </div>

      <div className="container multiplayer__shell">
        <Reveal className="multiplayer__intro" direction="left">
          <div className="multiplayer__kicker"><span /> Multiplayer</div>
          <p className="multiplayer__index">03 / CONNECT</p>
          <h2 className="multiplayer__heading">
            One network.<br />
            <span>Every squad.</span>
          </h2>
          <p className="multiplayer__body">
            Wraft's matchmaking runs on a single global network — jump between
            games, keep your squad, and never wait long for a fair match.
          </p>
          <div className="multiplayer__status"><i /> NETWORK ONLINE</div>
        </Reveal>

        <div className="multiplayer__panel">
          <div className="multiplayer__panel-top">
            <span>SQUAD SYSTEM</span>
            <span>WRAFT / LIVE</span>
          </div>
          <div className="multiplayer__cards">
            {NODES.map((n, i) => (
              <Reveal key={n.title} delay={i * 120} as="article" className="multiplayer__card" direction="right">
                <div className="multiplayer__card-number">0{i + 1}</div>
                <div className="multiplayer__card-copy">
                  <h3>{n.title}</h3>
                  <p>{n.description}</p>
                </div>
                <div className="multiplayer__card-arrow" aria-hidden="true">↗</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="multiplayer__ticker" aria-hidden="true">
        <span>CONNECT</span><b>•</b><span>COMPETE</span><b>•</b><span>CONQUER</span><b>•</b><span>CONNECT</span><b>•</b><span>COMPETE</span>
      </div>
    </section>
  )
}
