export default function Skills() {
    const skills = [
        { name: 'React', level: 'Avanzado', color: 'bg-blue-500' },
        { name: 'JavaScript', level: 'Avanzado', color: 'bg-yellow-500' },
        { name: 'Node.js', level: 'Intermedio', color: 'bg-green-500' },
        { name: 'MySQL', level: 'Intermedio', color: 'bg-blue-700' },
        { name: 'PHP', level: 'Intermedio', color: 'bg-purple-500' },
        { name: 'Java', level: 'Intermedio', color: 'bg-red-500' },
        { name: 'Tailwind CSS', level: 'Avanzado', color: 'bg-cyan-500' },
        { name: 'Git & GitHub', level: 'Avanzado', color: 'bg-gray-700' },
    ]

    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                    Habilidades Técnicas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition"
                        >
                            <div className={`w-12 h-12 ${skill.color} rounded-lg mb-4`}></div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {skill.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
