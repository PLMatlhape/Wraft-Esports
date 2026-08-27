import './Tournaments.css'

export default function Tournaments() {
  return (
    <section id="tournaments" className="tournaments">
      <div className="container tournaments__inner">
        <div>
          <p className="section-eyebrow">Live Tournaments</p>
          <h2 className="tournaments__heading">
            Queue up for the next bracket.
          </h2>
          <p className="tournaments__body">
            Weekly ranked cups, seasonal championships, and open qualifiers —
            all tracked live with real-time brackets and prize pools.
          </p>
        </div>

        <a href="#" className="tournaments__cta">
          View Schedule
        </a>
      </div>
    </section>
  )
}
