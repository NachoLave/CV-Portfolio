export default function Skills() {
  const skills = [
    "Pentesting", "Análisis de vulnerabilidades", "SIEM", 
    "Gestión de incidentes", "Automatización", "APIs", 
    "Power BI", "Documentación técnica", "Acunetix", "FortiSIEM"
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

