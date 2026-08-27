import Reveal from './Reveal'
import './PageHeader.css'

interface PageHeaderProps {
  eyebrow: string
  heading: React.ReactNode
  body?: string
}

export default function PageHeader({ eyebrow, heading, body }: PageHeaderProps) {
  return (
    <div className="page-header">
      <Reveal as="div" className="container">
        <p className="section-eyebrow">{eyebrow}</p>
        <h1 className="page-header__heading">{heading}</h1>
        {body && <p className="page-header__body">{body}</p>}
      </Reveal>
    </div>
  )
}
