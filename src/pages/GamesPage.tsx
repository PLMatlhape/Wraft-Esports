import PageHeader from '../components/PageHeader'
import Games from '../components/Games'
import '../components/Games.css'
import '../components/PageHeader.css'

export default function GamesPage() {
  return (
    <div className="games-page">
      <PageHeader
        eyebrow="All Games"
        heading="Pick your battlefield."
        body="Every title on the Wraft network, matched and ranked on one account. Tap a game to see its Wraft teams."
      />
      <section className="games">
        <div className="container">
          <Games linkToTeams />
        </div>
      </section>
    </div>
  )
}
