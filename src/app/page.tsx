import Image from "next/image";

export default function Home() {
  const projects = [
    {
      name: "VendePunto",
      description: "Sistema punto de venta.",
      link: "https://vendepunto.com",
    },
    {
      name: "Albercas Vergara",
      description: "Tienda en linea.",
      link: "https://albercasyagua.com",
    },
    // Add more projects as needed
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 text-center">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <p className="text-lg mt-2">Web Developer</p>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Acerca de mi</h2>
          <p className="mt-2 text-sm sm:text-base">
            Programador web con mas de 6 años de experiencia en el desarrollo de aplicaciones web y móviles.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="list-none mt-4">
            {projects.map((project, index) => (
              <li key={index} className="mb-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:underline"
                >
                  {project.name}
                </a>
                <p className="text-sm">{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/eduardo03061"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/64e79ca5aff2fb7295bfddf9_github-que-es.jpg"
            alt="GitHub icon"
            width={50}
            height={50}
          />
          
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/eduardoahg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://1000marcas.net/wp-content/uploads/2020/01/Linkedin-logo.jpg"
            alt="LinkedIn icon"
            width={50}
            height={50}
          />
         
        </a>
      </footer>
    </div>
  );
}