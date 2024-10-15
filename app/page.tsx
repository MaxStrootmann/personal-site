import { BlogPosts } from 'app/components/posts'
import Contact from './components/contact'

export default function Page() {
  return (
    <section>
      <h1 className="text-5xl tracking-tighter">
        <strong className='pr-2'>KMA</strong>Software
      </h1>
      <header className="pt-8 text-xl">Heeft uw bedrijf te maken met <strong>personeelstekorten, vergrijzing en verouderde systemen?</strong>
        <h2 className='pt-8 text-2xl font-semibold tracking-tighter'>KMA helpt bedrijven:</h2>
        <ul className='list-disc pt-2 list-outside ms-8'>
          <li>Computerwerk automatiseren</li>
          <li className=''>Documentatie en bestanden organiseren</li>
          <li>Efficiënter communiceren binnen hun organisatie</li>
        </ul>
      </header>
      <p className='pt-6'>Mijn naam is <strong>Max Strootmann</strong>. Na 10 jaar als monteur in de werktuigbouw gewerkt te hebben, heb ik sinds kort de overstap gemaakt naar software. Door mijn ervaring op de werkvloer, en op kantoor als 3D CAD tekenaar, kan ik technische bedrijven helpen bij het vinden van praktische oplossingen.</p>
      <div className="my-8">
      </div>
      <Contact />
    </section>
  )
}
