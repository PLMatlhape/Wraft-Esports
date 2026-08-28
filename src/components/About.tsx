import Reveal from './Reveal'
import wraftLogo from '../images/Wraft_logo.png'
import gamePageDesign from '../images/GAME PAGE DESIGN.png'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      {/* Decorative background art: GAME PAGE DESIGN.png sits behind the
          copy as a faded, soft-edged graphic (not a boxed foreground
          image), with the Wraft logo centered directly on top of it. */}
      <div className="about__bg" aria-hidden="true">
        <div className="about__bg-art">
          <img src={gamePageDesign} alt="" className="about__bg-image" />
          <div className="about__logo-mark">
            <img src={wraftLogo} alt="" className="about__logo" />
          </div>
        </div>
      </div>

      <div className="container about__grid">
        <Reveal className="about__content">
          <p className="section-eyebrow">About Wraft</p>
          <h2 className="about__heading">From Ekasi to the Professional Stage</h2>

          <p className="about__lead">
            We are an esports organization rooted in the heart of ekasi, driven
            by a single mission: to transform local passion into professional
            greatness.
          </p>
          <p className="about__body">
            Gaming is more than just a hobby — it is a competitive frontier, a
            community builder, and a viable career path. We exist to bridge the
            gap between casual township gaming and the global esports stage.
          </p>

          <h3 className="about__subheading">Our Mission</h3>
          <p className="about__body">
            To discover, nurture, and elevate the next generation of
            competitive gaming talent. We provide young players from our
            communities with the structure, training, and exposure they need
            to compete at the highest levels.
          </p>

          <h3 className="about__subheading">What We Do</h3>
          <ul className="about__list">
            <li>
              <strong>Skill Development:</strong> We host local tournaments,
              training camps, and bootcamps to sharpen our players' mechanical
              skills and strategic thinking.
            </li>
            <li>
              <strong>Mentorship &amp; Discipline:</strong> Esports requires
              focus, teamwork, and mental resilience. We guide our youth both
              in and out of the game.
            </li>
            <li>
              <strong>Professional Pathways:</strong> We connect our players
              with competitive leagues, sponsorships, and networking
              opportunities to launch real esports careers.
            </li>
            <li>
              <strong>Community Building:</strong> We are growing a safe,
              inclusive, and vibrant gaming culture right here at home.
            </li>
          </ul>

          <h3 className="about__subheading">The Future of Township Gaming</h3>
          <p className="about__body">
            The talent in ekasi is undeniable, but the opportunities have been
            limited. We are changing that story. By investing in our youth
            today, we are building the champions, content creators, and
            esports leaders of tomorrow.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
