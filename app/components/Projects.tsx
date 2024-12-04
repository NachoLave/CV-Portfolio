import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Detección de Intrusos",
      description: "Desarrollo e implementación de un IDS personalizado utilizando técnicas de machine learning.",
      technologies: ["Python", "TensorFlow", "Snort"]
    },
    {
      title: "Automatización de Análisis de Logs",
      description: "Creación de scripts para automatizar el análisis de logs de seguridad y generar reportes.",
      technologies: ["Python", "ELK Stack", "Bash"]
    },
    {
      title: "Evaluación de Seguridad en la Nube",
      description: "Realización de evaluaciones de seguridad en infraestructuras cloud de clientes.",
      technologies: ["AWS", "Azure", "GCP", "Terraform"]
    }
  ]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Proyectos Destacados</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

