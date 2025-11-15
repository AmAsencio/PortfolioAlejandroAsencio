import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white">
                        Alejandro Asencio Montes
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition">
                            Sobre mí
                        </a>
                        <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition">
                            Habilidades
                        </a>
                        <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition">
                            Proyectos
                        </a>
                        <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition">
                            Contacto
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-600 dark:text-gray-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 space-y-4">
                        <a href="#about" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600">
                            Sobre mí
                        </a>
                        <a href="#skills" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600">
                            Habilidades
                        </a>
                        <a href="#projects" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600">
                            Proyectos
                        </a>
                        <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600">
                            Contacto
                        </a>
                    </div>
                )}
            </nav>
        </header>
    )
}
