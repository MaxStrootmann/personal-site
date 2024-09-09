import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Kennis Met AI, Techniek en IT
      </h1>
      <header className="mb-4">
        Minder zoeken, sneller werken. Digitalisering met ERP systemen, en kennisbeheer met de nieuwste AI software.
      </header>
      <p>Mijn naam is Max Strootmann.</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
