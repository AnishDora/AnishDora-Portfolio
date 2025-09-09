import { personal, skills, experiences, education, projects, publications } from './data';

function Section({ id, title, children }) {
  return (
    <section id={id} className="space-y-4" >
      <h2 className="text-3xl font-bold text-teal-400">{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 sticky top-0 z-10">
        <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <h1 className="text-xl font-semibold">{personal.name}</h1>
          <ul className="flex flex-wrap gap-4 text-sm">
            <li><a href="#about" className="hover:text-teal-400">About</a></li>
            <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
            <li><a href="#experience" className="hover:text-teal-400">Experience</a></li>
            <li><a href="#education" className="hover:text-teal-400">Education</a></li>
            <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
            <li><a href="#publications" className="hover:text-teal-400">Publications</a></li>
            <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4 space-y-24">
        <Section id="about" title="About">
          <p className="text-lg">{personal.title}</p>
          <p>{personal.location}</p>
          <p>
            <a href={`tel:${personal.phone}`} className="text-teal-400 hover:underline">{personal.phone}</a> •
            <a href={`mailto:${personal.email}`} className="text-teal-400 hover:underline ml-1">{personal.email}</a>
          </p>
          <p>
            <a href={personal.linkedin} className="text-teal-400 hover:underline" target="_blank" rel="noreferrer">LinkedIn</a> •
            <a href={personal.github} className="text-teal-400 hover:underline ml-1" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain mb-2" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Professional Experience">
          {experiences.map((exp) => (
            <div key={exp.company} className="mb-8">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-sm italic">{exp.role} • {exp.period} • {exp.location}</p>
              <ul className="list-disc ml-5 mt-2 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section id="education" title="Education">
          {education.map((edu) => (
            <div key={edu.school} className="mb-8">
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="text-sm italic">{edu.degree} • {edu.period} • {edu.location} • GPA: {edu.gpa}</p>
              <ul className="list-disc ml-5 mt-2">
                {edu.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          {projects.map((proj) => (
            <div key={proj.name} className="mb-8">
              <h3 className="text-xl font-semibold">{proj.name}</h3>
              <p className="text-sm italic">{proj.period}</p>
              <ul className="list-disc ml-5 mt-2 space-y-2">
                {proj.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section id="publications" title="Publications">
          {publications.map((pub) => (
            <div key={pub.title} className="mb-4">
              <h3 className="text-xl font-semibold">{pub.title}</h3>
              <p className="italic">{pub.venue}</p>
              {pub.link && (
                <a href={pub.link} className="text-teal-400 hover:underline" target="_blank" rel="noreferrer">Link</a>
              )}
            </div>
          ))}
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-lg">{personal.name}</p>
          <p>{personal.location}</p>
          <p>
            <a href={`tel:${personal.phone}`} className="text-teal-400 hover:underline">{personal.phone}</a> •
            <a href={`mailto:${personal.email}`} className="text-teal-400 hover:underline ml-1">{personal.email}</a>
          </p>
        </Section>
      </main>

      <footer className="bg-gray-800 text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} {personal.name}</p>
      </footer>
    </div>
  );
}

export default App;
