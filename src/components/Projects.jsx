import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import portadaFocusTimer from './imagenes/FocusTimer.webp'
import portadaSubiNails from './imagenes/Subinails.webp'
import portadaMtgVital from './imagenes/mtgvital.webp'

export default function Projects() {
    const [ref, isVisible] = useScrollReveal()

    // Estados para filtro, búsqueda y descripciones expandidas
    const [selectedFilter, setSelectedFilter] = useState('Todos')
    const [searchQuery, setSearchQuery] = useState('')
    const [expandedProjects, setExpandedProjects] = useState({})

    const projects = [
        {
            title: 'Focus Timer',
            description: 'Aplicación web de gestión de tiempo con técnica Pomodoro. Construida con React y diseño minimalista para ayudar a mejorar la productividad y concentración mediante intervalos de trabajo y descanso.',
            tech: ['React', 'JavaScript', 'CSS'],
            category: 'Web App',
            github: 'https://github.com/amasencio/FocusTimer',
            demo: 'https://focustimer.site/',
            image: portadaFocusTimer
        },
        {
            title: 'SubiNails',
            description: 'Interfaz web moderna para sistema de reservas de salón de uñas. Diseño responsivo con selección de servicios, calendario interactivo y formulario de contacto.',
            tech: ['HTML', 'JavaScript', 'CSS'],
            category: 'Frontend',
            github: 'https://github.com/amasencio/SubiNails',
            demo: 'https://amasencio.github.io/SubiNails/',
            image: portadaSubiNails
        },
        {
            title: 'MTG Vital',
            description: 'Companion app completa para Magic: The Gathering con contador de vida, seguimiento de daño de comandante, gestión de contadores (veneno, experiencia) y lanzador de dados integrado para partidas multijugador.',
            tech: ['React', 'JavaScript','CSS', 'LocalStorage'], 
            category: 'Gaming App',
            github: 'https://github.com/AmAsencio/MTGVital',
            demo: 'https://mtgvital.com/',
            image: portadaMtgVital
        }

    ]

    // Obtener todas las tecnologías únicas
    const allTechnologies = ['Todos', ...new Set(projects.flatMap(p => p.tech))]

    // Filtrar proyectos por tecnología Y búsqueda
    const filteredProjects = projects.filter(project => {
        const matchesFilter = selectedFilter === 'Todos' || project.tech.includes(selectedFilter)
        const matchesSearch = searchQuery === '' ||
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
        return matchesFilter && matchesSearch
    })

    // Resetear filtros
    const resetFilters = () => {
        setSelectedFilter('Todos')
        setSearchQuery('')
    }

    // Toggle descripción expandida
    const toggleDescription = (projectTitle) => {
        setExpandedProjects(prev => ({
            ...prev,
            [projectTitle]: !prev[projectTitle]
        }))
    }

    return (
        <section
            id="projects"
            ref={ref}
            className={`py-20 px-6 bg-gray-50 dark:bg-gray-800 fade-in-right ${isVisible ? 'visible' : ''}`}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Proyectos Destacados
                </h2>

                {/* Barra de búsqueda */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar por nombre, descripción o tecnología..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-5 py-3 pl-12 rounded-lg border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                        />
                        <svg
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>

                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* Barra de filtros por tecnología */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {allTechnologies.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setSelectedFilter(tech)}
                            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${selectedFilter === tech
                                ? 'bg-blue-600 text-white shadow-lg scale-105'
                                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                {/* Contador y botón reset */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <p className="text-gray-600 dark:text-gray-400">
                        {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto encontrado' : 'proyectos encontrados'}
                    </p>

                    {(selectedFilter !== 'Todos' || searchQuery !== '') && (
                        <button
                            onClick={resetFilters}
                            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                        >
                            Limpiar filtros
                        </button>
                    )}
                </div>

                {/* Grid de proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <div
                                key={project.title}
                                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                                style={{
                                    animation: 'fadeInUp 0.5s ease-out',
                                    animationDelay: `${index * 0.1}s`,
                                    animationFillMode: 'both'
                                }}
                            >
                                <div className="relative overflow-hidden group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full hover:bg-gray-100 transition"
                                            title="Ver código"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                        {project.demo !== '#' && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white rounded-full hover:bg-gray-100 transition"
                                                title="Ver demo"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-xs font-semibold mb-3 w-fit">
                                        {project.category}
                                    </span>

                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                        {project.title}
                                    </h3>

                                    {/* DESCRIPCIÓN CON BOTÓN LEER MÁS */}
                                    <div className="mb-4">
                                        <p className={`text-gray-600 dark:text-gray-400 transition-all duration-300 ${expandedProjects[project.title] ? '' : 'line-clamp-3'
                                            }`}>
                                            {project.description}
                                        </p>

                                        {/* Mostrar botón solo si la descripción es larga */}
                                        {project.description.length > 120 && (
                                            <button
                                                onClick={() => toggleDescription(project.title)}
                                                className="text-blue-600 dark:text-blue-400 text-sm hover:underline mt-2 font-medium flex items-center gap-1"
                                            >
                                                {expandedProjects[project.title] ? (
                                                    <>
                                                        Ver menos
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                        </svg>
                                                    </>
                                                ) : (
                                                    <>
                                                        Leer más
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </>
                                                )}
                                            </button>
                                        )}
                                    </div>

                                    {/* Tecnologías */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                onClick={() => setSelectedFilter(tech)}
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                                                title={`Filtrar por ${tech}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Enlaces */}
                                    <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </a>
                                        {project.demo !== '#' && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16">
                            <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
                                No se encontraron proyectos
                            </p>
                            <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">
                                {searchQuery && `con "${searchQuery}"`}
                                {searchQuery && selectedFilter !== 'Todos' && ' y '}
                                {selectedFilter !== 'Todos' && `usando ${selectedFilter}`}
                            </p>
                            <button
                                onClick={resetFilters}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                Ver todos los proyectos
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
