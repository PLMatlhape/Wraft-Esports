import './FeatureRail.css'

export interface FeatureItem { title: string; description: string }

const FEATURES: FeatureItem[] = [
  { title: 'ARENA', description: 'Gear up, lock in, and dominate the ultimate multiplayer arena.' },
  { title: 'RESPAWN', description: 'Every end is a new beginning — jump back in stronger and faster.' },
  { title: 'LEVEL UP', description: 'Boost your loadout, earn rewards, and climb the ranks.' },
]

export default function FeatureRail() {
  return (
    <ul className="feature-rail">
      {FEATURES.map((feature) => (
        <li key={feature.title} className="feature-rail__item">
          <span className="feature-rail__bar" />
          <div><h3 className="feature-rail__title">{feature.title}</h3><p className="feature-rail__desc">{feature.description}</p></div>
        </li>
      ))}
    </ul>
  )
}
