import Reveal from './Reveal'
import './About.css'

const PILLARS = [
  {
    title: 'Skill Development',
    body: 'We host local tournaments, training camps, and bootcamps to sharpen our players\' mechanical skills and strategic thinking.',
  },
  {
    title: 'Mentorship & Discipline',
    body: 'Esports requires focus, teamwork, and mental resilience. We guide our youth both in and out of the game.',
  },
  {
    title: 'Professional Pathways',
    body: 'We connect our players with competitive leagues, sponsorships, and networking opportunities to launch real esports careers.',
  },
  {
    title: 'Community Building',
    body: 'We are growing a safe, inclusive, and vibrant gaming culture right here at home.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__content">
        <Reveal className="about__intro">
          <p className="section-eyebrow">About Wraft</p>
          <h2 className="about__heading">From Ekasi to the <span>Professional Stage</span></h2>
          <p className="about__lead">
            We are an esports organization from ekasi. We develop gaming culture, sharpen the skills of young players, and create pathways to professional esports.
          </p>
          <p className="about__body">
            We are an esports organization rooted in the heart of ekasi, driven by a single mission: to transform local passion into professional greatness. Gaming is more than just a hobby—it is a competitive frontier, a community builder, and a viable career path. We exist to bridge the gap between casual township gaming and the global esports stage.
          </p>
        </Reveal>

        <Reveal className="about__mission" delay={100}>
          <p className="section-eyebrow">Our Mission</p>
          <p className="about__mission-text">
            To discover, nurture, and elevate the next generation of competitive gaming talent. We provide young players from our communities with the structure, training, and exposure they need to compete at the highest levels.
          </p>
        </Reveal>

        <div className="about__pillars">
          <Reveal className="about__pillars-title" delay={150}>
            <p className="section-eyebrow">What We Do</p>
          </Reveal>
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={180 + i * 90} className="about__pillar">
              <span className="about__pillar-number">0{i + 1}</span>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="about__future" delay={200}>
          <p className="section-eyebrow">The Future of Township Gaming</p>
          <p>
            The talent in ekasi is undeniable, but the opportunities have been limited. We are changing that story. By investing in our youth today, we are building the champions, content creators, and esports leaders of tomorrow.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
