export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://github.com/AmAsencio" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/alejandro-asencio-montes-96973a282/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        LinkedIn
                    </a>
                    <a href="mailto:aasenciomontes@gmail.com" className="hover:text-blue-400 transition">
                        Email
                    </a>
                </div>
                <p className="text-gray-400">
                    © 2025 Alejandro Asencio. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}
