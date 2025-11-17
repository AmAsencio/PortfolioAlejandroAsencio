import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Experience() {
    const [ref, isVisible] = useScrollReveal()

    const education = [
        {
            title: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
            institution: 'I.E.S. MAR DE ALBORÁN (ESTEPONA)',
            period: '2024 - Actualidad',
            description: 'Formación especializada en desarrollo web full-stack, bases de datos, y arquitectura de aplicaciones empresariales.',
            skills: ['React', 'Node.js', 'PHP', 'MySQL', 'Docker'],
            status: 'En curso'
        },
        {
            title: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
            institution: 'C.D.P.CENEC-MÁLAGA',
            period: '2021 - 2023',
            description: 'Formación en desarrollo de aplicaciones para múltiples plataformas con enfoque en programación orientada a objetos y bases de datos.',
            skills: ['Java', 'MySQL', 'Android', 'Git'],
            gpa: '8.9',
            status: 'Completado'
        },
        {
            title: 'Bachillerato Tecnológico',
            institution: ' I.E.S. MEDITERRÁNEO (ESTEPONA)',
            period: '2019 - 2021',
            description: 'Especialización en ciencias y tecnología con enfoque en matemáticas e informática.',
            status: 'Completado'
        }
    ]

    return (
        <section
            id="experience"
            ref={ref}
            className={`py-20 px-6 bg-white dark:bg-gray-900 fade-in-left ${isVisible ? 'visible' : ''}`}
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                    Formación Académica
                </h2>

                <div className="relative">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-900"></div>

                    {education.map((item, index) => (
                        <div
                            key={index}
                            className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'
                                } md:w-1/2`}
                        >
                            <div className={`absolute w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 top-6 ${index % 2 === 0
                                    ? 'left-0 -translate-x-1.5 md:left-auto md:right-0 md:translate-x-1/2'
                                    : 'left-0 -translate-x-1.5 md:left-0 md:-translate-x-1/2'
                                }`}></div>
                            <div className="ml-8 md:ml-0 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                                {item.status && (
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${item.status === 'En curso'
                                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                                        }`}>
                                        {item.status}
                                    </span>
                                )}

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h3>
                                <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                                    {item.institution}
                                </div>
                                <div className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                                    {item.period}
                                </div>

                                {item.gpa && (
                                    <div className="mb-3">
                                        <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-semibold">
                                            📊 Nota media: {item.gpa}
                                        </span>
                                    </div>
                                )}

                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {item.description}
                                </p>

                                {item.skills && (
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-md text-sm border border-gray-200 dark:border-gray-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
