import { useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [ref, isVisible] = useScrollReveal()
    const form = useRef()
    const [sending, setSending] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const sendEmail = (e) => {
        e.preventDefault()
        setSending(true)
        setStatus({ type: '', message: '' })


        emailjs.sendForm(
            'service_pbprttw',
            'template_dkx1eem',
            form.current,
            '8mdpsc3YOB_n58TYa'
        )
            .then((result) => {
                console.log('Emails enviados exitosamente:', result.text)
                setStatus({
                    type: 'success',
                    message: '¡Mensaje enviado con éxito! Recibirás una confirmación en tu email y te responderé pronto.'
                })
                form.current.reset()
            })
            .catch((error) => {
                console.error('Error al enviar email:', error.text)
                setStatus({
                    type: 'error',
                    message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente por email.'
                })
            })
            .finally(() => {
                setSending(false)
            })
    }

    return (
        <section
            id="contact"
            ref={ref}
            className={`py-20 px-6 bg-white dark:bg-gray-900 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Contacto
                </h2>

                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
                    ¿Tienes un proyecto en mente? ¿Buscas un desarrollador full-stack?
                    <br />
                    <strong>¡Hablemos!</strong> Estoy disponible para nuevas oportunidades.
                </p>

                {/* Mensaje de estado */}
                {status.message && (
                    <div className={`mb-8 p-5 rounded-lg border-l-4 animate-fade-in ${status.type === 'success'
                        ? 'bg-green-50 border-green-500 text-green-700 dark:bg-green-900/20 dark:border-green-500 dark:text-green-300'
                        : 'bg-red-50 border-red-500 text-red-700 dark:bg-red-900/20 dark:border-red-500 dark:text-red-300'
                        }`}>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                                {status.type === 'success' ? (
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                            <div>
                                <p className="font-medium">{status.message}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Formulario */}
                    <div>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="user_name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label htmlFor="user_email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition resize-none"
                                    placeholder="Cuéntame sobre tu proyecto o la oportunidad que tienes en mente..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                className={`w-full px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 ${sending
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:scale-105 text-white'
                                    }`}
                            >
                                {sending ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Enviar Mensaje
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Información de contacto */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-lg border-2 border-blue-100 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Información de Contacto
                            </h3>

                            {/* Email */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Email</p>
                                    <a
                                        href="mailto:aasenciomontes@gmail.com"
                                        className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
                                    >
                                        aasenciomontes@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Teléfono */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Teléfono</p>
                                    <a
                                        href="tel:+34633848410"
                                        className="text-gray-900 dark:text-white font-medium hover:text-green-600 dark:hover:text-green-400 transition"
                                    >
                                        (+34) 633 848 410
                                    </a>
                                </div>
                            </div>

                            {/* Ubicación */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Ubicación</p>
                                    <p className="text-gray-900 dark:text-white font-medium">
                                        Málaga, España
                                    </p>
                                </div>
                            </div>

                            {/* Redes sociales */}
                            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Sígueme en:</p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/AmAsencio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-900 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                                        title="GitHub"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://linkedin.com/in/alejandro-asencio-montes"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                                        title="LinkedIn"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Disponibilidad */}
                        <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <p className="text-green-700 dark:text-green-300 font-bold">
                                    Disponible para nuevos proyectos
                                </p>
                            </div>
                            <p className="text-green-600 dark:text-green-400 text-sm">
                                Actualmente buscando oportunidades como desarrollador full-stack junior.
                                Respondo en menos de 24 horas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
