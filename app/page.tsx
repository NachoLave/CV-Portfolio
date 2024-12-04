import { Metadata } from 'next'
import Header from './components/Header'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export const metadata: Metadata = {
  title: 'CV Ciberseguridad',
  description: 'CV profesional especializado en ciberseguridad',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}

