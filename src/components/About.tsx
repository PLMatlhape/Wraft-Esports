import './About.css'

const STATS = [
  { value: '2.4M', label: 'Active players' },
  { value: '180+', label: 'Countries reppin\u2019 Wraft' },
  { value: '12K', label: 'Tournaments hosted' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__text">
          <p className="section-eyebrow">About Wraft</p>
          <h2 className="about__heading">
            Built by players, <span>run on skill.</span>
          </h2>
          <p className="about__body">
            Wraft is the arena where squads form, rivalries are settled, and
            every match counts toward something bigger. No filler modes, no
            dead lobbies — just a fast matchmaking network tuned for players
            who show up to compete.
          </p>
        </div>

        <div className="about__stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="about__stat">
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
