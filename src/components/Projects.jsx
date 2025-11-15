export default function Projects() {
    const projects = [
        {
            title: 'Focus Timer',
            description: 'Aplicación web de gestión de tiempo con técnica Pomodoro. Construida con React y diseño minimalista.',
            tech: ['React', 'JavaScript', 'CSS'],
            github: 'https://github.com/tu-usuario/focus-timer',
            demo: 'https://focustimer.site/',
            image: 'https://via.placeholder.com/400x300'
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción de tu segundo proyecto destacado.',
            tech: ['Node.js', 'MySQL', 'React'],
            github: 'https://github.com/tu-usuario/proyecto-2',
            demo: 'https://tu-demo2.vercel.app',
            image: 'https://via.placeholder.com/400x300'
        },
        {
            title: 'Proyecto 3',
            description: 'Descripción de tu tercer proyecto destacado.',
            tech: ['PHP', 'MySQL', 'JavaScript'],
            github: 'https://github.com/tu-usuario/proyecto-3',
            demo: 'https://tu-demo3.vercel.app',
            image: 'https://via.placeholder.com/400x300'
        }
    ]

    return (
        <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                    Proyectos Destacados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
                                    >
                                        GitHub →
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
                                    >
                                        Demo →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
