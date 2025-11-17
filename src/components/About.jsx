import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
    const [ref, isVisible] = useScrollReveal()

    return (
        <section
            id="about"
            ref={ref}
            className={`py-20 px-6 bg-gray-50 dark:bg-gray-800 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Sobre mí
                </h2>
                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                    <p>
                        Soy un <strong>desarrollador full-stack</strong> con experiencia en <strong>React.js, TypeScript</strong> y metodologías ágiles.
                        Actualmente cursando el Grado Superior en Desarrollo de Aplicaciones Web en el IES Mar de Alborán,
                        con formación previa en DAM (nota media 8.6) en C.D.P.CENEC-Málaga.
                    </p>
                    <p>
                        Mi experiencia profesional incluye <strong>prácticas en Accenture</strong> como tester de aplicaciones web y móviles,
                        donde desarrollé habilidades en análisis, seguimiento de errores y trabajo colaborativo en equipos de calidad de software.
                        Además, he trabajado como <strong>desarrollador web freelance</strong> para SubiNails, creando una interfaz web moderna con sistema
                        de reservas online y optimización de la experiencia de usuario.
                    </p>
                    <p>
                        Mi objetivo es contribuir en un equipo dinámico como desarrollador junior, aportando calidad, adaptabilidad y
                        enfoque a resultados mientras sigo creciendo profesionalmente en el ecosistema del desarrollo web full-stack.
                    </p>
                </div>

                {/* Badges destacados */}
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full font-semibold">
                        🌍 Inglés Avanzado
                    </span>
                    <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full font-semibold">
                        📍 Málaga, España
                    </span>
                </div>
            </div>
        </section>
    )
}
