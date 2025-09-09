import { personal, skills, experiences, education, projects, publications } from './data';

function Section({ id, title, children }) {
  return (
    <section id={id} className="space-y-8 scroll-mt-24">
      <h2 className="text-3xl font-bold text-teal-400">{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <header className="fixed top-0 w-full bg-gray-900/70 backdrop-blur z-20">
        <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <h1 className="text-lg font-semibold tracking-wide">{personal.name}</h1>
          <ul className="flex flex-wrap gap-6 text-sm">
            <li><a href="#about" className="hover:text-teal-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a></li>
            <li><a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a></li>
            <li><a href="#education" className="hover:text-teal-400 transition-colors">Education</a></li>
            <li><a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a></li>
            <li><a href="#publications" className="hover:text-teal-400 transition-colors">Publications</a></li>
            <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24 px-4"
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">
          {personal.name}
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">{personal.title}</p>
        <div className="mt-6 flex space-x-8 text-2xl">
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-teal-400" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-teal-400" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href={`mailto:${personal.email}`} className="hover:text-teal-400" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <a href="#about" className="mt-12 flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
          <span>Explore more</span>
          <i className="fas fa-arrow-down animate-bounce"></i>
        </a>
      </section>

      <main className="container mx-auto p-4 space-y-24">
        <Section id="about" title="About">
          <div className="space-y-2 bg-gray-800/60 p-6 rounded-lg">
            <p className="text-lg">{personal.title}</p>
            <p className="flex items-center gap-2"><i className="fas fa-location-dot text-teal-400"></i>{personal.location}</p>
            <div className="flex flex-wrap gap-6 pt-2 text-sm">
              <a href={`tel:${personal.phone}`} className="flex items-center gap-2 hover:text-teal-400"><i className="fas fa-phone"></i>{personal.phone}</a>
              <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-teal-400"><i className="fas fa-envelope"></i>{personal.email}</a>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center bg-gray-800/60 p-4 rounded-lg hover:-translate-y-1 hover:shadow-lg transition"
              >
                <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain" />
                <span className="mt-2 text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Professional Experience">
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="bg-gray-800/60 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-sm italic">{exp.role} • {exp.period} • {exp.location}</p>
                <ul className="list-disc ml-5 mt-2 space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.school} className="bg-gray-800/60 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-sm italic">{edu.degree} • {edu.period} • {edu.location} • GPA: {edu.gpa}</p>
                <ul className="list-disc ml-5 mt-2">
                  {edu.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-8">
            {projects.map((proj) => (
              <div key={proj.name} className="bg-gray-800/60 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold">{proj.name}</h3>
                <p className="text-sm italic">{proj.period}</p>
                <ul className="list-disc ml-5 mt-2 space-y-2">
                  {proj.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="publications" title="Publications">
          <div className="space-y-8">
            {publications.map((pub) => (
              <div key={pub.title} className="bg-gray-800/60 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold">{pub.title}</h3>
                <p className="italic">{pub.venue}</p>
                {pub.link && (
                  <a href={pub.link} className="text-teal-400 hover:underline" target="_blank" rel="noreferrer">Link</a>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="space-y-4 bg-gray-800/60 p-6 rounded-lg">
            <p className="text-lg">{personal.name}</p>
            <p className="flex items-center gap-2"><i className="fas fa-location-dot text-teal-400"></i>{personal.location}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a href={`tel:${personal.phone}`} className="flex items-center gap-2 hover:text-teal-400"><i className="fas fa-phone"></i>{personal.phone}</a>
              <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-teal-400"><i className="fas fa-envelope"></i>{personal.email}</a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="bg-gray-900 text-center py-6 mt-10 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} {personal.name}</p>
      </footer>
    </div>
  );
}

export default App;

