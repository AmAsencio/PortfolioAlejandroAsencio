import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Skills() {
    const [ref, isVisible] = useScrollReveal()

    const skills = [
        // Lenguajes de Programación
        {
            name: 'HTML5',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            category: 'Frontend'
        },
        {
            name: 'CSS3',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            category: 'Frontend'
        },
        {
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            category: 'Frontend'
        },
        {
            name: 'TypeScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            category: 'Frontend'
        },
        {
            name: 'Java',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            category: 'Backend'
        },
        {
            name: 'Kotlin',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
            category: 'Mobile'
        },

        // Frameworks y Librerías
        {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            category: 'Frontend'
        },
        {
            name: 'Tailwind',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
            category: 'Frontend'
        },
        {
            name: 'Bootstrap',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
            category: 'Frontend'
        },
        {
            name: 'Node.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            category: 'Backend'
        },

        // Bases de Datos
        {
            name: 'MySQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            category: 'Backend'
        },
        {
            name: 'MongoDB',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            category: 'Backend'
        },
        {
            name: 'Firebase',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
            category: 'Backend'
        },

        // Herramientas
        {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            category: 'Tools'
        },
        {
            name: 'GitHub',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            category: 'Tools'
        },
        {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            category: 'Tools'
        },
        {
            name: 'Figma',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
            category: 'Tools'
        },
        {
            name: 'VS Code',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
            category: 'Tools'
        },

        // Otros
        {
            name: 'Unity',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
            category: 'Game Dev'
        },
        {
            name: 'C#',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
            category: 'Game Dev'
        }
    ]

    return (
        <section
            id="skills"
            ref={ref}
            className={`py-20 px-6 bg-gray-50 dark:bg-gray-800 scale-in ${isVisible ? 'visible' : ''}`}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Habilidades Técnicas
                </h2>

                {/* Descripción de competencias */}
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
                    Stack completo orientado al desarrollo web moderno con experiencia en <strong>React.js</strong>,
                    diseño responsivo, accesibilidad web (WCAG), consumo de APIs REST y metodologías ágiles (Scrum).
                </p>

                {/* Grid de iconos */}
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center gap-3 group cursor-pointer"
                            title={skill.category}
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 dark:bg-gray-900 rounded-xl flex items-center justify-center p-3 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Competencias adicionales */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            🎨 Frontend
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Responsive Design, Accesibilidad Web (WCAG), Performance Optimization, UX/UI Design
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            ⚙️ Backend
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            REST APIs, SQL (MySQL, Oracle), NoSQL (MongoDB), Node.js, Firebase
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            🛠️ Metodologías
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Scrum, Git/GitHub, Testing, Control de Versiones, Trabajo Colaborativo
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
