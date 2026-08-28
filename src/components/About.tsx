import Reveal from './Reveal'
import logo from '../images/Wraft_logo.png'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <Reveal className="about__brand">
          <div className="about__logo-wrap"><img src={logo} alt="Wraft" className="about__logo" /></div>
          <p className="section-eyebrow">About Wraft</p>
          <h2 className="about__heading">From Ekasi to the <span>Professional Stage.</span></h2>
        </Reveal>
        <div className="about__content">
          <Reveal>
            <p className="about__lead">Wraft is an esports organization rooted in the heart of ekasi, driven by a single mission: to transform local passion into professional greatness.</p>
            <p className="about__body">Gaming is more than just a hobby—it is a competitive frontier, a community builder, and a viable career path. We exist to bridge the gap between casual township gaming and the global esports stage.</p>
          </Reveal>
          <div className="about__sections">
            <Reveal className="about__block"><p className="section-eyebrow">Our Mission</p><p>To discover, nurture, and elevate the next generation of competitive gaming talent. We provide young players from our communities with the structure, training, and exposure they need to compete at the highest levels.</p></Reveal>
            <Reveal className="about__block" delay={100}><p className="section-eyebrow">What We Do</p><div className="about__list"><div><strong>Skill Development</strong><p>We host local tournaments, training camps, and bootcamps to sharpen our players' mechanical skills and strategic thinking.</p></div><div><strong>Mentorship & Discipline</strong><p>Esports requires focus, teamwork, and mental resilience. We guide our youth both in and out of the game.</p></div><div><strong>Professional Pathways</strong><p>We connect our players with competitive leagues, sponsorships, and networking opportunities to launch real esports careers.</p></div><div><strong>Community Building</strong><p>We are growing a safe, inclusive, and vibrant gaming culture right here at home.</p></div></div></Reveal>
            <Reveal className="about__future" delay={150}><p className="section-eyebrow">The Future of Township Gaming</p><p>The talent in ekasi is undeniable, but the opportunities have been limited. We are changing that story.</p><p>By investing in our youth today, we are building the champions, content creators, and esports leaders of tomorrow.</p></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
