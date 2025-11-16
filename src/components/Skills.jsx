import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Skills() {
    const [ref, isVisible] = useScrollReveal()

    const skills = [
        {
            name: 'HTML',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            color: '#E34F26'
        },
        {
            name: 'CSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            color: '#1572B6'
        },
        {
            name: 'Tailwind',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
            color: '#06B6D4'
        },
        {
            name: 'Bootstrap',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
            color: '#7952B3'
        },
        {
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            color: '#F7DF1E'
        },
        {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            color: '#61DAFB'
        },
        {
            name: 'Next.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            color: '#000000'
        },
        {
            name: 'Unity',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
            color: '#000000'
        },
        {
            name: 'C#',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
            color: '#239120'
        },
        {
            name: 'PHP',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
            color: '#777BB4'
        },
        {
            name: 'Node.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            color: '#339933'
        },
        {
            name: 'Npm',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
            color: '#CB3837'
        },
        {
            name: 'MySQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            color: '#4479A1'
        },
        {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            color: '#F05032'
        },
        {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            color: '#2496ED'
        }
    ]

    return (
        <section
            id="skills"
            ref={ref}
            className={`py-20 px-6 bg-gray-50 dark:bg-gray-800 scale-in ${isVisible ? 'visible' : ''}`}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                    Habilidades Técnicas
                </h2>

                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center gap-3 group cursor-pointer"
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
            </div>
        </section>
    )
}
