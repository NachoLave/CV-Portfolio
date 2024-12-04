'use client'

import { createContext, useContext, useState } from 'react'

type Language = 'es' | 'en'

type Translations = {
  [key in Language]: {
    experience: {
      title: string
      responsibilities: string[]
      period: string
    }
    skills: {
      title: string
      items: string[]
    }
    education: {
      title: string
      degrees: {
        systems: string
        english: string
      }
      status: {
        inProgress: string
        completed: string
      }
    }
    contact: {
      title: string
      info: string
      form: {
        name: string
        message: string
        send: string
      }
    }
  }
}

const translations: Translations = {
  es: {
    experience: {
      title: "Experiencia Profesional",
      responsibilities: [
        "Penetración de sistemas (Acunetix)",
        "Gestión de seguridad (FortiSIEM)",
        "Automatización de procesos",
        "Desarrollo de dashboards (Power BI)",
        "Documentación técnica"
      ],
      period: "Marzo - Actualidad"
    },
    skills: {
      title: "Habilidades Técnicas",
      items: [
        "Análisis de Vulnerabilidades",
        "Gestión de Incidentes",
        "Penetración de Sistemas",
        "FortiSIEM",
        "Acunetix",
        "Power BI",
        "Automatización",
        "Documentación Técnica",
        "APIs",
        "Seguridad en Redes"
      ]
    },
    education: {
      title: "Formación Académica",
      degrees: {
        systems: "Licenciatura en Sistemas",
        english: "Formación en Inglés Avanzado"
      },
      status: {
        inProgress: "En curso",
        completed: "Completado"
      }
    },
    contact: {
      title: "Contacto Seguro",
      info: "Información de Contacto",
      form: {
        name: "Nombre",
        message: "Mensaje",
        send: "Enviar Mensaje Encriptado"
      }
    }
  },
  en: {
    experience: {
      title: "Professional Experience",
      responsibilities: [
        "System Penetration (Acunetix)",
        "Security Management (FortiSIEM)",
        "Process Automation",
        "Dashboard Development (Power BI)",
        "Technical Documentation"
      ],
      period: "March - Present"
    },
    skills: {
      title: "Technical Skills",
      items: [
        "Vulnerability Analysis",
        "Incident Management",
        "System Penetration",
        "FortiSIEM",
        "Acunetix",
        "Power BI",
        "Automation",
        "Technical Documentation",
        "APIs",
        "Network Security"
      ]
    },
    education: {
      title: "Education",
      degrees: {
        systems: "Bachelor's Degree in Systems",
        english: "Advanced English Training"
      },
      status: {
        inProgress: "In Progress",
        completed: "Completed"
      }
    },
    contact: {
      title: "Secure Contact",
      info: "Contact Information",
      form: {
        name: "Name",
        message: "Message",
        send: "Send Encrypted Message"
      }
    }
  }
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  const t = (path: string) => {
    return path.split('.').reduce((obj, key) => obj[key], translations[language])
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

